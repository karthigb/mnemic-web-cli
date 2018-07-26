import React from 'react'
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap'

class MnemicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let badge;
    if(this.props.active_tasks!=[]){
      badge = <Badge>{this.props.num_groups}</Badge>;
    }
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
              Active task groups {badge}
            </NavItem>
            <NavItem onClick={this.props.onArchivedTaskGroupsClick}>
              Completed task groups
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MnemicNavbar;
