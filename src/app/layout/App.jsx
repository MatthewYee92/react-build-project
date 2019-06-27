import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <h1>event.io</h1>
        <NavBar/>
      <Container className="main">
        <EventDashboard/>
      </Container>  
      </div>
    );
  }
}

export default App