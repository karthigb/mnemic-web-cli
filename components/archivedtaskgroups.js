import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class ArchivedTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
