import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class ActiveTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("This is our complted hits");
    console.log(this.props.completed_hits);
    // var hits =[];
    // for(var i=0; i < this.props.completed_hits.length; i++) {
    //   hits.push(<ListGroup>
    //     <ListGroupItem>{this.props.completed_hits[i]['group_id']}</ListGroupItem>);
    //     <ListGroupItem>{this.props.completed_hits[i]['id']}</ListGroupItem>
    //     <ListGroupItem>{this.props.completed_hits[i]['url']}</ListGroupItem>
    //     </ListGroup>);
    // };

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
