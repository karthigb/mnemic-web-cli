import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class MnemicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              mnemic
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem onClick={this.props.onActiveTaskGroupsClick}>
              View active task groups
            </NavItem>
            <NavItem>
              View archived task groups
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MnemicNavbar;
