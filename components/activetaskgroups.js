import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var groups = Object.keys(this.props.active_task_groups).map(
      (group,i) => (
        <ListGroupItem>{this.props.active_task_groups[group]}</ListGroupItem>
      )
    );

    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Active Task Groups</h1></Col>
          </Row>
          <Row>
            <Col><ListGroup>
              {groups}
            </ListGroup></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ActiveTaskGroups;
