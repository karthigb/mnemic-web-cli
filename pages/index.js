import React from 'react'
import {Navbar, Nav, NavItem, Button, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'
import Link from 'next/link'

export default class Index extends React.Component {
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
            <Col md={8} mdOffset={2}><h1>Automate your data labeling with nmemic</h1></Col>
          </Row>
          <Row>
            <Col mdOffset={2}>
              <Link href='/newtaskgroup'>
                <Button bsStyle="primary" bsSize="lg">Create new tasks</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>See active task groups</Col>
          </Row>
          <Row>
            <Col>See past task groups</Col>
          </Row>
          <Row>
            <Col>Create new tasks</Col>
          </Row>
          <Row>
            <Col>Cleanup expiered tasks</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
