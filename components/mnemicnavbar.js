import React from 'react'
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap'

class MnemicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let badge;
    if(this.props.active_tasks!=[]){
      badge = <Badge>{this.props.active_task_groups.length}</Badge>;
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
              View active task groups {badge}
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
