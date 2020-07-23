import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './views/login/index';


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
          <Route component={Login} exact path='/' />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App

