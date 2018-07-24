import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default Home;
