import React from 'react'
import {Navbar, Nav, NavItem, Button, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'
import Home from '../components/home'
import ActiveTaskGroups from '../components/activetaskgroups'
import Link from 'next/link'
import Head from 'next/head'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    state = {
      view: 'home'
    }
    this.onActiveTaskGroupsClick = this.onActiveTaskGroupsClick.bind(this);
  }

  onActiveTasksClick(e) {
    setState({view: 'activetaskgroups'})
  }

  render() {
    let component;
    switch(this.state.view){
      case 'activetaskgroups':
        component = <ActiveTaskGroups/>;
        break;
      default:
        component = <Home/>;
        break;
    }
    return (
      <div>
        <Head>
          <title>mnemic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        </Head>
        <MnemicNavbar onActiveTasksClick={this.onActiveTasksClick}/>
        <div>
          {component}
        </div>
      </div>
    )
  }
}
