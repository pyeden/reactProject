import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Info from './views/info';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {

    return (
      <HashRouter>
        <Switch>
          <Route component={Home} exact path='/home' />
          <Route component={Info} exact path='/info' />
        </Switch>
      </HashRouter>
    )
  }

}

export default App

