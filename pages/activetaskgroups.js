import React from 'react'
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'

export default class ActiveTaskGroups extends React.Component {
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
            <Col><h1>ActiveTaskGroups</h1></Col>
          </Row>
          <Row>
            <Col>See HITS in group</Col>
          </Row>
          <Row>
            <Col>See % complete</Col>
          </Row>
          <Row>
            <Col>Monitor output</Col>
          </Row>
          <Row>
            <Col>See input</Col>
          </Row>
        <Grid>
      </div>
    )
  }
}
