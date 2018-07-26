import React from 'react'
import {Grid, Row, Col, ControlLabel, FormGroup, FormControl, Button, Badge, Modal } from 'react-bootstrap'

class NewTaskGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      task_type:"",
      images_file_url_ref:null,
      objects_file_url_ref:null,
      hit_time_given_ref:null,
      project_expiration_ref:null,
      reward_ref:null,
      num_tasks: 3,
      cost:0,
      show_modal:false
    }
    this.calculateCost = this.calculateCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  calculateCost(e) {
    if(!isNaN(this.state.reward_ref.value)) {
      this.setState({cost: parseFloat(this.state.reward_ref.value)*this.state.num_tasks});
    }
  }

  handleClose(e) {
    this.setState({show_modal:false});
  }

  handleSubmit(e) {
    this.setState({show_modal:true});
    fetch('https://mnemicmturk.azurewebsites.net/api/UpdateMturkCosmos', {
      method: 'POST',
      headers: {
        /*'Accept': 'application/json',
        'Content-Type': 'application/json',*/
      },
      body: JSON.stringify({
        urls: this.state.images_file_url_ref.value,
        labels: this.state.objects_file_url_ref.value,
        complete_time: this.state.hit_time_given_ref.value,
        expiration_time: this.state.project_expiration_ref.value,
        reward: this.state.reward_ref.value
      })
    }).then(function(response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Create new human intelligence tasks</h1></Col>
          </Row><br/><br/>
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
                  inputRef={ref => { this.state.images_file_url_ref = ref; }}
                  placeholder="URL to newline delimited textfile of image links"/>
              </Col>
              <Col md={4}>
                <ControlLabel>Objects to find in images</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={ref => { this.state.objects_file_url_ref = ref; }}
                  placeholder="URL to file containing comma seprated list of objects"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <ControlLabel>Time to complete a single task</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={ref => { this.state.hit_time_given_ref = ref; }}
                  placeholder="Enter duration in minutes"/>
              </Col>
              <Col md={4}>
                <ControlLabel>Project expiration time</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={ref => { this.state.project_expiration_ref = ref; }}
                  placeholder="Enter duration in minutes"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <ControlLabel>Reward per task completed</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={ref => { this.state.reward_ref = ref; }}
                  onChange={this.calculateCost}
                  placeholder="Enter a value $0.00"/>
              </Col>
            </Row><br/>
            <Row>
              <Col md={4}>
                <p>
                  Cost to label {this.state.num_tasks} images is <Badge>${this.state.cost}</Badge>.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Button bsStyle="primary" onClick={this.handleSubmit}>Deploy tasks</Button>
              </Col>
              <Modal show={this.state.show_modal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Tasks created</Modal.Title>
                </Modal.Header>
                <Modal.Body> See your progress in active tasks</Modal.Body>
              </Modal>
            </Row>
	        </FormGroup>
        </Grid>
      </div>
    );
  }
}

export default NewTaskGroup;
