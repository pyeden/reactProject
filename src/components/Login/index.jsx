import React, { Component } from "react";
import './index.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default class LoginIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loginType: "login"
    }

  }

  switchForm = (value) => {
    this.setState ={
      loginType:value
    }
  }

  render() {

    return (
      <div className="form-wrap">
          <div>
            <div className="form-login-header">
                <h4 className="column">登录</h4>
                <span>注册</span>

            </div>

          </div>
        {this.state.loginType === "login"} 
        ? <LoginForm switchForm={this.switchForm}></LoginForm> 
        : <RegisterForm switchForm={this.switchForm}></RegisterForm>
  
      </div>
    )
  }
}