import React, { Component } from 'react'
import ReactLoader from 'react-loader-advanced'
import { ScaleLoader } from 'react-spinners'

export class Loader extends Component {
  render () {
    return (
      <ReactLoader
        show={this.props.loading}
        contentBlur={3}
        backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0,2)' }}
        message={
          <div>
            <ScaleLoader color='#303030' loading={this.props.loading} />
          </div>
        }>
        {this.props.children}
      </ReactLoader>
    )
  }
}

export default Loader
