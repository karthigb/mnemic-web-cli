import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_jobs = ["0","2","3"]
    }
  }

  render() {
    return (
      <div>
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
        </Grid>
      </div>
    );
  }
}

export default ActiveTaskGroups;
