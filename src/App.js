import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Home from './Home';
import Monitor from './Monitor';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/monitor" component={Monitor}/>
        </Router>
      </div>
    )
  }
}

export default App
