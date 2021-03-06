import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     var hits =[];
     for(var i=0; i < this.props.active_hits.length; i++) {
       hits.push(<ListGroup><h4> GROUP ID: {this.props.active_hits[i]['group_id']}</h4>
                   <ListGroupItem>TASK ID: {this.props.active_hits[i]['id']}</ListGroupItem>
                   <ListGroupItem>IMAGE: {this.props.active_hits[i]['url']}</ListGroupItem>
                 </ListGroup>);
     };

    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Active Task Groups</h1></Col>
          </Row>
          <Row>
            <Col><div>
              {hits}
            </div></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ActiveTaskGroups;
