import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer
        className={
          'footer' +
          (this.props.transparent !== undefined ? ' footer-transparent' : '')
        }
      >
        <div
          className={
            'container' + (this.props.fluid !== undefined ? '-fluid' : '')
          }
        >
          <nav className='pull-left'>
            <ul>
              <li>
                <a href='#pablo'>Нүүр</a>
              </li>
              <li>
                <a href='#pablo'>Бидний тухай</a>
              </li>
              <li>
                <a href='#pablo'>Үйлчилгээ</a>
              </li>
              <li>
                <a href='#pablo'>Мэдээ</a>
              </li>
            </ul>
          </nav>
          <p className='copyright pull-right'>
            &copy; {1900 + new Date().getYear()}{' '}
            <a href='https://www.ubcab.mn'>UBCab LLC</a>
          </p>
        </div>
      </footer>
    )
  }
}
export default Footer
