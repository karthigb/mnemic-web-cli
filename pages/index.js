import React from 'react'
import {Navbar, Nav, NavItem, Button, Grid, Row, Col} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'
import Home from '../components/home'
import ActiveTaskGroups from '../components/activetaskgroups'
import ArchivedTaskGroups from '../components/archivedtaskgroups'
import NewTaskGroup from '../components/newtaskgroup'
import Link from 'next/link'
import Head from 'next/head'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
    this.onActiveTaskGroupsClick = this.onActiveTaskGroupsClick.bind(this);
    this.onArchivedTaskGroupsClick = this.onArchivedTaskGroupsClick.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onNewTaskClick = this.onNewTaskClick.bind(this);
  }

  onActiveTaskGroupsClick(e) {
    this.setState({view: 'activetaskgroups'});
  }

  onArchivedTaskGroupsClick(e) {
    this.setState({view: 'archivedtaskgroups'});
  }

  onHomeClick(e) {
    this.setState({view: 'home'});
  }

  onNewTaskClick(e){
    this.setState({view: 'newtaskgroup'});

    var url = 'https://mnemicmturk.azurewebsites.net/api/GetActiveHits';
    fetch(url,{
      method: 'GET',
      mode: 'no-cors'
    })
    .then( response => {
      console.log(response);
      if(response.status == 200) return response.json();
      else throw new Error('Something went wrong on api server!');
    })
    .then( response => {
      console.log("b: ",response);
    })
    .catch(function(error) {
      console.log("Firebase AC getPhotos catch: ", error);
    });

    // fetch('https://mnemicmturk.azurewebsites.net/api/UpdateMturkCosmos', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     "url": "www.google.com"
    //   })
    // })
    // .then( response => {
    //   console.log(response);
    // })
    // .catch( error => {
    //   console.log("Error in Firebase AC: ", error);
    // });


  }

  render() {
    let component;
    switch(this.state.view){
      case 'activetaskgroups':
        component = <ActiveTaskGroups/>;
        break;
      case 'archivedtaskgroups':
        component = <ArchivedTaskGroups/>;
        break;
      case 'newtaskgroup':
        component = <NewTaskGroup/>;
        break;
      default:
        component = <Home onNewTaskClick={this.onNewTaskClick}/>;
        break;
    }
    return (
      <div>
        <Head>
          <title>mnemic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        </Head>
        <MnemicNavbar onActiveTaskGroupsClick={this.onActiveTaskGroupsClick}
                      onArchivedTaskGroupsClick={this.onArchivedTaskGroupsClick}
                      onHomeClick={this.onHomeClick}/>
        <div>
          {component}
        </div>
      </div>
    )
  }
}
