import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class NewTaskGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default NewTaskGroup;
