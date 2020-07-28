import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
// import { PoweroffOutlined } from '@ant-design/icons';
// import { validate_password } from '../../utils/validate'
import "./index.scss";
//api
import { Login } from './api/account';
//组件
import Code from '../../components/code/index';

class LoginForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
          username: "",
          code_button_disable: true,
  
      };
    }

    //点击登录
    onFinish = (v) => {
        console.log(v)
        Login(v).then(response => {
            if (response.status === 200) {
                console.log(response)

            }
        }).catch(error => {
            console.log(error)
        })
    };

    //输入值处理
    inputChange = (e) => {
        console.log(e.target.value)
        let inputValue = e.target.value
        this.setState({
            username: inputValue
        })
    }
    render() {
      
      const {username, code_button_disable} = this.state
      //使用变量来存储this指向
      const _this = this
      return (
        <Fragment>
            <div className="form-header">
                <h4 className="column">登 录</h4>
                <span onClick={()=>{this.props.switchForm("register")}}>注 册</span>
            </div>
            <div className="form-body">
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}          //点击提交触发
                >

                    <Form.Item name="username" rules={
                        [
                            { required: true, message: '请输入用户名!' },
                            { type: "email", message: "用户名是邮箱"},
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (value) {
                                        //此处使用this，this指向为验证函数对象 RuleObject
                                        console.log(this)
                                        _this.setState({
                                            code_button_disable: false
                                        })
                                        return Promise.resolve()
                                    }
                                    _this.setState({
                                        code_button_disable: true
                                    })
                                    return Promise.reject("账户不能为空")
                                }
                            })
                        ]
                    }>
                    <Input 
                    value={username} 
                    onChange={this.inputChange} 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item 
                    name="password" 
                    rules={[
                            { required: true, message: '请输入密码!' },
                            { min: 6, message: '最少6位'},
                    ]}>
                        <Input 
                        prefix={<LockOutlined 
                        className="site-form-item-icon" />} 
                        type="password" 
                        placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item 
                    name="phonecode" 
                    rules={[{ required: true, message: '请输入验证码!' }]}>
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input 
                                prefix={<LockOutlined className="site-form-item-icon" />} 
                                placeholder="请输入验证码"/>
                            </Col>
                            <Col span={9}>
                                <Code username={username} code_button_disable={code_button_disable}></Code>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button" 
                        block>
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>
      
      )
    }
  
  }
  
  export default LoginForm;