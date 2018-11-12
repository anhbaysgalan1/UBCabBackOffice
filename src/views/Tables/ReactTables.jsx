import React, { Component } from 'react'
// react component for creating dynamic tables
import ReactTable from 'react-table'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Card from 'components/Card/Card.jsx'

class ReactTables extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pages: null,
      loading: true
    }
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData (state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    this.setState({ loading: true })
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    axios.post('https://7dsd5mf6g8.execute-api.eu-central-1.amazonaws.com/inhouse/enrollments',
      {
        pageSize: state.pageSize,
        page: state.page,
        sorted: state.sorted,
        filtered: state.filtered
      })
      .then(res => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
        this.setState({
          data: res.data,
          pages: 10,
          loading: false
        })
      })
  }
  render () {
    const { data, pages, loading } = this.state
    return (
      <div className='main-content'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title='DataTables.net'
                content={
                  <ReactTable
                    filterable
                    columns={[
                      {
                        Header: 'Name',
                        accessor: 'name',
                        id: 'name'
                      },
                      {
                        Header: 'Username',
                        accessor: 'username',
                        id: 'username'
                      },
                      {
                        Header: 'Email',
                        accessor: 'email',
                        id: 'email'
                      },
                      {
                        Header: 'Phone',
                        accessor: 'phone',
                        id: 'phone'
                      },
                      {
                        Header: 'Actions',
                        accessor: 'actions',
                        sortable: false,
                        filterable: false
                      }
                    ]}
                    manual
                    data={data}
                    pages={pages}
                    loading={loading}
                    onFetchData={this.fetchData}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className='-striped -highlight'
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ReactTables
