import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./index.scss"


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formType: "login"

    };
  }
  switchForm = (v) => {
    this.setState({
      formType:v
    })
  }
  render() {

    return (
      <div className="form-wrap">
        <div>
          {
            this.state.formType==='login'
            ? <LoginForm switchForm={this.switchForm}></LoginForm>
            : <RegisterForm switchForm={this.switchForm}></RegisterForm>
          }
        </div>
      </div>
    )
  }
}
  
export default Login;