import React from 'react'
import {Grid, Row, Col, ControlLabel, FormGroup, FormControl, Panel, Button } from 'react-bootstrap'

class NewTaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      task_type:"",
      object_detection_images_file:"",
      num_tasks: 3,
      cost:0.75
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Create a new human intelligence task project</h1></Col>
          </Row>
          <FormGroup>
            <Row>
              <Col md={4}>
                <ControlLabel>Choose your task</ControlLabel>
                <FormControl
                  componentClass="select">
                    <option value="object_detection">Object detection</option>
                    <option value="tweet_analysis" disabled="true">Text sentiment analysis (coming soon)</option>
                    <option value="image_tag" disabled="true">Image tagging (coming soon)</option>
                </FormControl>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <ControlLabel>Unlabelled images</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="URL to newline delimited textfile of image links"/>
              </Col>
              <Col md={4}>
                <ControlLabel>Objects to find in images</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="URL to file containing comma seprated list of objects"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <ControlLabel>Time to complete a single task</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter duration in minutes"/>
              </Col>
              <Col md={4}>
                <ControlLabel>Project expiration time</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter duration in minutes"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <ControlLabel>Reward per task completed</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter a value $0.00"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <Panel>
                  <Panel.Body>
                    Cost to label {this.state.num_tasks} images is ${this.state.cost}.
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
	        </FormGroup>
          <Row>
            <Col>
              <Button>Deploy tasks</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewTaskGroup;
