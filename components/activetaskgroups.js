import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.active_task_groups)
    var groups = Object.keys(this.props.active_task_groups).map(
      (group,i) => (
        <div>
          <ListGroup>{this.props.active_task_groups[group][0]}</ListGroup>
          <div>
            <ListGroupItem>{this.props.active_task_groups[group][1]}</ListGroupItem>
            <ListGroupItem>{this.props.active_task_groups[group][2]}</ListGroupItem>
          </div>
        </div>
      )
    );

    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Active Task Groups</h1></Col>
          </Row>
          <Row>
            <Col><div>
              {groups}
            </div></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ActiveTaskGroups;
