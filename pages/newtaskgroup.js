import React from 'react'
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'

export default class NewTaskGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <head>
          <title>mnemic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        </head>
        <MnemicNavbar/>
        <Grid>
          <Row>
            <Col><h1>CREATE A NEW TASK GROUP</h1></Col>
          </Row>
          <Row>
            <Col>Choose task type</Col>
          </Row>
          <Row>
            <Col>Add inputs</Col>
          </Row>
          <Row>
            <Col>Define output</Col>
          </Row>
          <Row>
            <Col>$/assignment</Col>
          </Row>
          <Row>
            <Col>time to complete assignment</Col>
          </Row>
          <Row>
            <Col>Expiration</Col>
          </Row>
          <Row>
            <Col>Deploy assignments</Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
