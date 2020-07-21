import React, { Component } from "react";
import { Button } from 'antd';

export default class LoginForm extends Component {



    constructor(props) {
        super(props);

        this.state = {
            type: "register",
        }       
    }
    render() {
        return (

            <div>
                登录
                <Button type="primary">Primary Button</Button>
            </div>
            
        )
    }
}