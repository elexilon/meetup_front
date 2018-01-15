import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopicsList from './topics/TopicsList'
import RsvpList from './rsvps/RsvpList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="col-sm-6 sidenav">
            <TopicsList  />
          </div>
          <div className="col-sm-6 sidenav">
            <RsvpList  />
          </div>
        </div>

    );
  }
}

export default App;
