import React from 'react'
import {Grid, Row, Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap'

class NewTaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      task_type:""
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Create a new human intelligence task project</h1></Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <ControlLabel>Choose your task</ControlLabel>
                <FormControl
                  componentClass="select">
                    <option value="object_detection">Object detection</option>
                    <option value="tweet_analysis">Tweet sentiment analysis</option>
                    <option value="image_tag">Image tagging</option>
                </FormControl>
              </FormGroup>
            Choose task type
            </Col>
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
