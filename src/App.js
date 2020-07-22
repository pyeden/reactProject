import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path='/home' />
          <Route component={Info} exact path='/info' />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App

