import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import "./index.scss"


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {

    return (
      <div className="form-wrap">
        <div>
          <div className="form-header">
            <h4 className="column">登 录</h4>
            <span>注 册</span>
          </div>
          <div className="form-body">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    )
  }
}
  
export default Login;