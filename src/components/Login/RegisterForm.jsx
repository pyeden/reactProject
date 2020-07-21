import React, { Component } from "react";

export default class RegisterForm extends Component {



    constructor(props) {
        super(props);

        this.state = {
            type: "login",
            
        };
    }


    render() {
        return (
           <div>
               注册

           </div>
        )
    }
}