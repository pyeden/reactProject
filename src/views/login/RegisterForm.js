import React, { Component, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import './index.scss';


class RegisterForm extends Component {

    constructor(props) {
      super(props)
      this.state = {
  
      };
    }

    
    onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  
    render() {
  
      return (
        <Fragment>
            <div className="form-header">
                <h4 className="column" onClick={()=>{this.props.switchForm("login")}}>登 录</h4>
                <span >注 册</span>
            </div>
            <div className="form-body">
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={() => this.onFinish}
                >

                    <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码"/>
                    </Form.Item>

                    <Form.Item name="password2" rules={
                        [
                            { required: true, message: '请输入确认密码!' },
                            ({getFieldValue}) => ({        //es6解构获取到getFieldValue属性对象,获取多个值使用逗号隔开
                                validator(rule, value) {   //value是当前标签的值
                                    if(!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("两次密码不匹配")
                                }
                            })
                        ]
                    }>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入确认密码"/>
                    </Form.Item>

                    <Form.Item name="phonecode" rules={[{ required: true, message: '请输入验证码!' }]}>
                    <Row gutter={13}>
                        <Col span={15}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入验证码"/>
                        </Col>
                        <Col span={9}>
                        <Button type="primary" htmlType="submit" danger>
                            获取验证码
                        </Button>
                        </Col>
                    </Row>
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                        登 录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </Fragment>

      )
    }
  
  }
  
  export default RegisterForm;