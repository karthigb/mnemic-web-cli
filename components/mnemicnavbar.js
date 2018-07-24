import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Link from 'next/link'

class MnemicNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
          <Link href="/index">
            <Navbar.Brand>
              mnemic
            </Navbar.Brand>
          </Link>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link href="/activetaskgroups">View active task groups</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link href="/completetaskgroups">View archived task groups</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MnemicNavbar;