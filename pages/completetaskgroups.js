import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import MnemicNavbar from '../components/mnemicnavbar'

export default class CompleteTaskGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <head>
          <title>mnemic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
        </head>
        <MnemicNavbar/>
        <h1>CompleteTaskGroups</h1>
        <div>Some stuff</div>
      </div>
    )
  }
}