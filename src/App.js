import React, { Component } from 'react'
import { HashRouter , Route } from 'react-router-dom';
import Home from './Home';
import Monitor from './Monitor';
import Navbar from './Navbar'
import About from './About';

export class App extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
        <Navbar></Navbar>
          <Route path="/" exact component={Home}/>
          <Route path="/monitor" component={Monitor}/>
          <Route path="/about" component={About}/>
        </HashRouter>
      </div>
    )
  }
}

export default App
