import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './Home';
import Monitor from './Monitor';
import Navbar from './Navbar'
import About from './About';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
          <Route path="/" exact component={Home}/>
          <Route path="/monitor" component={Monitor}/>
          <Route path="/about" component={About}/>
        </Router>
      </div>
    )
  }
}

export default App
