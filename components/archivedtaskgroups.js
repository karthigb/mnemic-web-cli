import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class ArchivedTaskGroups extends React.Component {
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
    };
    
    return (
      <div>
        <Grid>
          <Row>
            <Col><h1>CompleteTaskGroups</h1></Col>
          </Row>
          <Row>
            <Col>See HITS in group</Col>
          </Row>
          <Row>
            <Col>See output</Col>
          </Row>
          <Row>
            <Col>See input</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ArchivedTaskGroups;
