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
      view: 'home',
      active_task_groups : {},
      active_hits: [],
      num_groups:0
    }
    this.onActiveTaskGroupsClick = this.onActiveTaskGroupsClick.bind(this);
    this.onArchivedTaskGroupsClick = this.onArchivedTaskGroupsClick.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onNewTaskClick = this.onNewTaskClick.bind(this);
    this.getActiveHits = this.getActiveHits.bind(this);
    this.getActiveTaskGroups = this.getActiveTaskGroups.bind(this);
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
  }

  componentDidMount(){
    this.getActiveHits();
  }

  getActiveHits(){
      var url = 'https://mnemicmturk.azurewebsites.net/api/readFromCosmos';
      fetch(url,{
        method: 'GET',
        mode: 'cors'
      })
      .then( response => {
        console.log(response);
        if(response.status == 200) return response.json();
        else throw new Error('Something went wrong on api server!');
      })
      .then( response => {
        this.setState({active_hits:response['active_hits']});

        var groups = {}
        for(var i=0;i<response['active_hits'].length;i++){
          let hit = response['active_hits'][i];
          if(groups.hasOwnProperty(hit['group_id'])){
            groups[hit['group_id']].push(hit);
          } else {
            groups[hit['group_id']] = [hit];
            this.setState({
              num_groups: this.state.num_groups + 1
            });
          }
        }
        this.setState({active_task_groups:groups});
      })
      .catch(function(error) {
        console.log("ERROR: ", error);
      });
  }

  render() {
    let component;
    switch(this.state.view){
      case 'activetaskgroups':
        component = <ActiveTaskGroups active_task_groups={this.state.active_task_groups}
                                      getActiveTasks={this.getActiveHits}/>;
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
                      onHomeClick={this.onHomeClick}
                      num_groups={this.state.num_groups}/>
        <div>
          {component}
        </div>
      </div>
    )
  }
}
