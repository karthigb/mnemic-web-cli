import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var groups = Object.keys(this.props.active_task_groups).map(
      (group,i) => (
        <div>
          <ListGroup>{this.props.active_task_groups[group]['group_id']}</ListGroup>
          <div>
            <ListGroupItem>{this.props.active_task_groups[group]['id']}</ListGroupItem>
            <ListGroupItem>{this.props.active_task_groups[group]['url']}</ListGroupItem>
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
