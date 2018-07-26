import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.active_hits);
    var hits =[];
    for(var i=0; i < this.props.active_hits.length; i++) {
      hits.push(<ListGroupItem>{this.props.active_hits[i]['group_id']}</ListGroupItem>);
      hits.push(<ListGroupItem>{this.props.active_hits[i]['id']}</ListGroupItem>);
      hits.push(<ListGroupItem>{this.props.active_hits[i]['url']}</ListGroupItem>);
    });

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
