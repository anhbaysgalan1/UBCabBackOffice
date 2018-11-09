import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

import MapCard from 'components/Card/MapCard.jsx'

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
)

class FullScreenMap extends Component {
  render () {
    return (
      <div className='main-content'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <MapCard
                title=''
                content={
                  <CustomMap
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE'
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
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

export default FullScreenMap
