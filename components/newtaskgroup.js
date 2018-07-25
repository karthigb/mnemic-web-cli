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
          <Row>
            <Col>
              <FormGroup>
                <ControlLabel>Choose your task</ControlLabel>
                <FormControl
                  componentClass="select">
                    <option value="object_detection">Object detection</option>
                    <option value="tweet_analysis" disabled="true">Tweet sentiment analysis</option>
                    <option value="image_tag" disabled="true">Image tagging</option>
                </FormControl>
                <ControlLabel>Unlabelled images</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="URL to newline delimited textfile of image links"/>
                </FormGroup>
                <ControlLabel>Objects to find in images</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="URL to file containing comma seprated list of objects"/>
                </FormGroup>
                <ControlLabel>Time to complete a single task</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter duration in minutes"/>
                </FormGroup>
                <ControlLabel>Project expiration time</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter duration in minutes"/>
                </FormGroup>
                <ControlLabel>Reward per task completed</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter a value $0.00"/>
                </FormGroup>
                <Panel>
                  <Panel.Body>
                    Cost to label {this.state.num_tasks} images is ${this.state.cost}.
                  </Panel.Body>
                </Panel>
            </Col>
          </Row>
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
