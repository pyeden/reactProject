import React, { Component } from "react";
import {Form, Input, Button} from "element-react";

export default class LoginForm extends Component {



    constructor(props) {
        super(props);

        this.state = {
            type: "register",
            form: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else {
                                if (this.state.form.checkPass !== '') {
                                    this.refs.form.validateField('checkPass');
                                }
                                callback();
                            }
                        }
                    }
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.state.form.pass) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }
                ],
                age: [
                    { required: true, message: '请填写年龄', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            var age = parseInt(value, 10);

                            setTimeout(() => {
                                if (!Number.isInteger(age)) {
                                    callback(new Error('请输入数字值'));
                                } else {
                                    if (age < 18) {
                                        callback(new Error('必须年满18岁'));
                                    } else {
                                        callback();
                                    }
                                }
                            }, 1000);
                        }, trigger: 'change'
                    }
                ]
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.refs.form.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();

        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render() {
        return (
            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                <Form.Item label="密码" prop="pass">
                    <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
                </Form.Item>
                <Form.Item label="确认密码" prop="checkPass">
                    <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
                </Form.Item>
                <Form.Item label="年龄" prop="age">
                    <Input value={this.state.form.age} onChange={this.onChange.bind(this, 'age')}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}