import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <div style={{"text-align":"center"}}>
                <h1>Start training your AI faster</h1>
              </div>
              </Col>
          </Row><br/>
          <Row>
            <Col md={8} mdOffset={2}>
              <h3>nmemic frees data scientists and AI developers from the tedium of labeling their training data by outsourcing it to the MTurk marketplace</h3>
            </Col>
          </Row><br/><br/>
          <Row>
            <Col>
              <div style={{"text-align":"center"}}>
                <Button bsStyle="primary" bsSize="lg" onClick={this.props.onNewTaskClick}>
                  Create new tasks
                </Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
