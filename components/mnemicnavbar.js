import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class MnemicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <Nav onClick={this.props.onHomeClick}>mnemic</Nav>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem onClick={this.props.onActiveTaskGroupsClick}>
              View active task groups
            </NavItem>
            <NavItem onClick={this.props.onArchivedTaskGroupsClick}>
              View archived task groups
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MnemicNavbar;
