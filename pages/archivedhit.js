import React from 'react'
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'

export default class ArchivedHit extends React.Component {
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
            <Col><h1>Archived Hit</h1></Col>
          </Row>
          <Row>
            <Col>See old HIT info</Col>
          <Row>
        </Grid>
      </div>
    )
  }
}
