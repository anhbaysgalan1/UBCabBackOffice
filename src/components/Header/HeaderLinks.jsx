import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class HeaderLinks extends Component {
  render () {
    return (
      <div>
        <Navbar.Form pullLeft className='navbar-search-form'>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className='fa fa-search' />
              </InputGroup.Addon>
              <FormControl type='text' placeholder='Хайлт...' />
            </InputGroup>
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem>
            <a eventKey={3}>
              <i className='pe-7s-mail' /> Мэдэгдэл
              <span className='notification'>5</span>
            </a>
          </NavItem>
          <NavItem>
            <a eventKey={4}>
              <i className='pe-7s-help1' /> Тусламж
            </a>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
export default HeaderLinks
