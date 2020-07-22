import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Button } from 'antd';
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
      <>
        <div className="test">
          <h1>haha</h1>
          <li>sss</li>
          <li>sss</li>
          <li>sss</li>
        </div>
        <Button type="primary">Primary Button</Button>
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path='/home' />
            <Route component={Info} exact path='/info' />
          </Switch>
        </BrowserRouter>
      </>
    )
  }

}

export default App

