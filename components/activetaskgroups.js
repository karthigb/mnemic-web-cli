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
        for(var k=0; i < this.props.active_task_groups[group].length; i++) {
          <ListGroupItem>{this.props.active_task_groups[group][i]['group_id']}</ListGroupItem>
          <ListGroupItem>{this.props.active_task_groups[group][i]['id']}</ListGroupItem>
          <ListGroupItem>{this.props.active_task_groups[group][i]['url']}</ListGroupItem>
        }
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
