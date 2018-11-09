import React, { Component } from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Card from 'components/Card/Card.jsx'
import FormInputs from 'components/FormInputs/FormInputs.jsx'
import UserCard from 'components/Card/UserCard.jsx'
import Button from 'components/CustomButton/CustomButton.jsx'

import avatar from 'assets/img/default-avatar.png'

class UserPage extends Component {
  render () {
    return (
      <div className='main-content'>
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title='Хэрэглэгч'
                content={
                  <form>
                    <FormInputs
                      ncols={['col-md-5', 'col-md-3', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Үйлчилгээ',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Үйлчилгээ',
                          defaultValue: 'Юбикаб ХХК'
                        },
                        {
                          label: 'Хэрэглэгчийн нэр',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Хэрэглэгчийн нэр',
                          defaultValue: ''
                        },
                        {
                          label: 'Имэйл хаяг',
                          type: 'email',
                          bsClass: 'form-control',
                          placeholder: 'Имэйл хаяг'
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'Овог',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Овог',
                          defaultValue: ''
                        },
                        {
                          label: 'Нэр',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Нэр',
                          defaultValue: ''
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-12']}
                      proprieties={[
                        {
                          label: 'Гэрийн хаяг',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Хаяг',
                          defaultValue:
                            ''
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-4', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Хот',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Хот',
                          defaultValue: ''
                        },
                        {
                          label: 'Улс',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Улс',
                          defaultValue: ''
                        }
                      ]}
                    />

                    <div className='row'>
                      <div className='col-md-12'>
                        <FormGroup controlId='formControlsTextarea'>
                          <ControlLabel>Нэмэлт тайлбар</ControlLabel>
                          <FormControl
                            rows='5'
                            componentClass='textarea'
                            bsClass='form-control'
                            placeholder='Энд бусад тайлбар мэдээллүүд оруулна уу'
                            defaultValue=''
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <Button bsStyle='info' pullRight fill type='submit'>
                      Засах
                    </Button>
                    <div className='clearfix' />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage='https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400'
                avatar={avatar}
                name='Овог нэр'
                userName='Хэрэглэгчийн нэр'
                description={
                  <span>
                    Нэмэлт мэдээлэл энд гарна
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className='fa fa-facebook-square' />
                    </Button>
                    <Button simple>
                      <i className='fa fa-twitter' />
                    </Button>
                    <Button simple>
                      <i className='fa fa-google-plus-square' />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default UserPage
