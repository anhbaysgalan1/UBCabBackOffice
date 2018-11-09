import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

import Card from 'components/Card/Card.jsx'

import Button from 'components/CustomButton/CustomButton.jsx'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardHidden: true
    }
  }
  componentDidMount () {
    setTimeout(
      function () {
        this.setState({ cardHidden: false })
      }.bind(this),
      200
    )
  }
  render () {
    return (
      <Grid>
        <Row>
          <Col md={4} sm={6} mdOffset={4} smOffset={3}>
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title='Нэвтрэх'
                content={
                  <div>
                    <FormGroup>
                      <ControlLabel>Имэйл хаяг</ControlLabel>
                      <FormControl placeholder='Имэйл хаяг' type='email' />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Нууц үг</ControlLabel>
                      <FormControl placeholder='Нууц үг' type='password' />
                    </FormGroup>
                  </div>
                }
                legend={
                  <Button bsStyle='info' fill wd>
                    Нэвтрэх
                  </Button>
                }
                ftTextCenter
              />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default LoginPage
