import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class ArchivedTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var hits =[];
    for(var i=0; i < this.props.completed_hits.length; i++) {
      hits.push(<ListGroup><h4> GROUP ID: {this.props.completed_hits[i]['group_id']}</h4>
                  <ListGroupItem>TASK ID: {this.props.completed_hits[i]['id']}</ListGroupItem>
                  <ListGroupItem>IMAGE: {this.props.completed_hits[i]['url']}</ListGroupItem>
                  <ListGroupItem>LABALED DATA: {this.props.completed_hits[i]['value']}</ListGroupItem>
                </ListGroup>);
    };
    
    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>Completed Tasks</h1></Col>
          </Row>
          <Row>
            <Col>{hits}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ArchivedTaskGroups;
