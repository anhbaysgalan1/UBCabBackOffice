import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
// react component used to create charts
import ChartistGraph from 'react-chartist'
// react components used to create a SVG / Vector map
import { VectorMap } from 'react-jvectormap'

import Card from 'components/Card/Card.jsx'
import StatsCard from 'components/Card/StatsCard.jsx'
import Tasks from 'components/Tasks/Tasks.jsx'

import {
  dataPie,
  dataSales,
  optionsSales,
  responsiveSales,
  dataBar,
  optionsBar,
  responsiveBar,
  table_data
} from 'variables/Variables.jsx'

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
}

class Dashboard extends Component {
  createTableData () {
    var tableRows = []
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className='flag'>
              <img src={table_data[i].flag} alt='us_flag' />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className='text-right'>{table_data[i].count}</td>
          <td className='text-right'>{table_data[i].percentage}</td>
        </tr>
      )
    }
    return tableRows
  }
  render () {
    return (
      <div className='main-content'>
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-car text-warning' />}
                statsText='Үйлчилгээнд'
                statsValue='150'
                statsIcon={<i className='fa fa-refresh' />}
                statsIconText='Сая шинэчлэгдсэн'
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-wallet text-success' />}
                statsText='Орлого'
                statsValue='150,000₮'
                statsIcon={<i className='fa fa-calendar-o' />}
                statsIconText='Өнөөдөр'
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='pe-7s-graph1 text-danger' />}
                statsText='Дуудлага'
                statsValue='93'
                statsIcon={<i className='fa fa-clock-o' />}
                statsIconText='Өнөөдөр'
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className='fa fa-bullseye text-info' />}
                statsText='Гүйцэтгэл'
                statsValue='+45%'
                statsIcon={<i className='fa fa-refresh' />}
                statsIconText='Updated now'
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                title='Дуудлагын төлөв'
                content={<ChartistGraph data={dataPie} type='Pie' />}
                legend={
                  <div>
                    <i className='fa fa-circle text-success' /> Амжилттай
                    <i className='fa fa-circle text-danger' /> Цуцалсан
                    <i className='fa fa-circle text-warning' /> Орхисон
                  </div>
                }
                stats={
                  <div>
                    <i className='fa fa-clock-o' /> саяхан шинэчлэгдсэн
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                title='Сүүлийн 24 цагийн үзүүлэлт'
                content={
                  <ChartistGraph
                    data={dataSales}
                    type='Line'
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                  />
                }
                legend={
                  <div>
                    <i className='fa fa-circle text-info' /> Дуудлага
                    <i className='fa fa-circle text-success' /> Гүйцэтгэл
                    <i className='fa fa-circle text-warning' /> Орхисон
                  </div>
                }
                stats={
                  <div>
                    <i className='fa fa-history' /> Шинэчлэгдсэн
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title='Эрэлт байршлаар'
                category='Бүсчлэлээр'
                content={
                  <Row>
                    <Col md={5}>
                      <div className='table-responsive'>
                        <table className='table'>
                          <tbody>{this.createTableData()}</tbody>
                        </table>
                      </div>
                    </Col>
                    <Col md={6} mdOffset={1}>
                      <VectorMap
                        map={'world_mill'}
                        backgroundColor='transparent'
                        zoomOnScroll={false}
                        containerStyle={{
                          width: '100%',
                          height: '280px'
                        }}
                        containerClassName='map'
                        regionStyle={{
                          initial: {
                            fill: '#e4e4e4',
                            'fill-opacity': 0.9,
                            stroke: 'none',
                            'stroke-width': 0,
                            'stroke-opacity': 0
                          }
                        }}
                        series={{
                          regions: [
                            {
                              values: mapData,
                              scale: ['#AAAAAA', '#444444'],
                              normalizeFunction: 'polynomial'
                            }
                          ]
                        }}
                      />
                    </Col>
                  </Row>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                title='Сарын үзүүлэлт'
                content={
                  <ChartistGraph
                    data={dataBar}
                    type='Bar'
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                }
                legend={
                  <div>
                    <i className='fa fa-circle text-info' /> Дуудлага
                    <i className='fa fa-circle text-success' /> Гүйцэтгэл
                  </div>
                }
                stats={
                  <div>
                    <i className='fa fa-check' /> Баталгаажсан
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

export default Dashboard