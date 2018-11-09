import React, { Component } from 'react'
import { Table, Grid, Row, Col } from 'react-bootstrap'

import Card from 'components/Card/Card.jsx'

import { thArray, tdArray } from 'variables/Variables.jsx'
import fetch from 'node-fetch'

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: null
    }
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ datas: data })
      })
  }
  componentDidMount = () => {
    this.fetchData()
  }

  render () {
    let { datas } = this.state
    if (datas === null) {
      return <div>Loading</div>
    }
    return (
      <div className='main-content'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title='Striped Table with Hover'
                category='Here is a subtitle for this table'
                tableFullWidth
                content={
                  <Table striped hover responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.datas.map((row, i) => {
                        return (
                          <tr key={i}>
                            <td>{row.userId}</td>
                            <td>{row.title}</td>
                            <td>{row.body}</td>
                            <td>{row.userId}</td>
                            <td>{row.userId}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                plain
                title='Table on Plain Background'
                category='Here is a subtitle for this table'
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                title='Regular Table with Colors'
                category='Here is a subtitle for this table'
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        var type = ''
                        switch (key) {
                          case 0:
                            type = 'success'
                            break
                          case 2:
                            type = 'info'
                            break
                          case 4:
                            type = 'danger'
                            break
                          case 6:
                            type = 'warning'
                            break
                          default:
                        }
                        return (
                          <tr key={key} className={type}>
                            <td>{key + 1}</td>
                            {prop.map((prop, key) => {
                              return (
                                <td key={key}>
                                  {prop}
                                  {key === 0 && type !== ''
                                    ? ' (' + type + ')'
                                    : null}
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Test
