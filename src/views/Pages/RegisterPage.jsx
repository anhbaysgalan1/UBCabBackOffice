import React, { Component } from 'react'
import { Grid, Row, Col, Media, FormControl, FormGroup } from 'react-bootstrap'

import Card from 'components/Card/Card.jsx'

import Button from 'components/CustomButton/CustomButton.jsx'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { selectOptionsCountry, selectOptionsCity } from 'variables/Variables.jsx'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      radio: '1',
      radioVariant: '1'
    }
  }
  handleRadio = event => {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })
  };
  render () {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className='header-text'>
              <h2>UBCab Удирдлагын систем</h2>
              <h4>Та өөрийн системд хандах хэрэглэгчийг энд бүртгэнэ</h4>
              <hr />
            </div>
          </Col>
          <Col md={4} mdOffset={2}>
            <Media>
              <Media.Left>
                <div className='icon'>
                  <i className='pe-7s-user' />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Хэрэглэгчдийн бүртгэл</Media.Heading>
                Удирдлагын системд хандах хэрэглэгчдийг төрлөөр нь зохицуулах,
                эрх, хандалтыг удирдах
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className='icon'>
                  <i className='pe-7s-graph1' />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Тайлан, Гүйцэтгэл</Media.Heading>
                Үйлчилгээтэй холбоотой төрөл бүрийн тайлан, төлөвлөгөө, гүйцэтгэлээ
                цаг тухайд нь хянах боломжтой
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className='icon'>
                  <i className='pe-7s-headphones' />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Оператор</Media.Heading>
                Дуудлага өгөх, жолооч нарыг хянах, үйлчилгээний төлөвийг хянах,
                үйлчилгээний санал хүсэлт хүлээж авч ажиллах
              </Media.Body>
            </Media>
          </Col>
          <Col md={4}>
            <form>
              <Card
                plain
                content={
                  <div>
                    <FormGroup>
                      <FormControl type='text' placeholder='Овог' />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type='text' placeholder='Нэр' />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type='text' placeholder='Байгууллага' />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type='email' placeholder='Имэйл хаяг' />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type='phone' placeholder='Утасны дугаар' />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        placeholder='Улс'
                        name='CountrySelect'
                        value={this.state.CountrySelect}
                        options={selectOptionsCountry}
                        onChange={value =>
                          this.setState({ CountrySelect: value })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        placeholder='Хот'
                        name='CitySelect'
                        value={this.state.CitySelect}
                        options={selectOptionsCity}
                        onChange={value =>
                          this.setState({ CitySelect: value })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type='password' placeholder='Нууц үг' />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type='password'
                        placeholder='Нууц үг давтах'
                      />
                    </FormGroup>
                  </div>
                }
                ftTextCenter
                legend={
                  <Button wd fill neutral>
                    Бүртгэх
                  </Button>
                }
              />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default RegisterPage
