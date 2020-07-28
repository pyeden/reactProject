import React, { Component } from 'react';
import { Button, message } from 'antd';
import { GetCode } from '../../views/login/api/account'

class Code extends Component {

    constructor(props) {
      super(props)   //props初始化默认值
      this.state = {
          username: props.username,
          code_text:"获取验证码",
          code_button_disable: props.code_button_disable,
          code_button_loding: false
  
      };
    }
    //到计时函数
    countDown = () => {
        let sed = 60
        this.setState({
            code_button_loding:false,
            code_button_disable:true,
            code_text: `${sed}s`,
        })
        // setInterval  clearInterval  不间断定时器
        // setTimeout  clearTimeout   只执行一次
        let timer = setInterval(() => {
            sed--
            if(sed<=0){
                clearInterval(timer)
                this.setState({
                    code_text:"重新发送",
                    code_button_disable:false
                })
                return false
            }
            this.setState({
                code_text:`${sed}s`
            })
        }, 1000);                         //1000=1秒

    }
    //监听父组件值变化, 可以避免this.props每次去初始化获取，提升性能
    UNSAFE_componentWillReceiveProps (value) {
        this.setState({
            username:value.username,
            code_button_disable:value.code_button_disable
        })
    }
    //点击获取验证码
    getCode = () => {
        if(!this.state.username) {
            message.warning("用户名不能为空", 1)
            return false
        }
        this.setState({
            code_button_loding: true,
            code_text:"发送中"
        })
        const requestData = {
            username:this.state.username,
            module:"login"
        }

        GetCode(requestData).then(response => {
            if(response.status === 200) {
                console.log(response)
                this.setState({
                    code_text:"发送成功",
                    code_button_loding: false,
                    code_button_disable: true
                })
            }
            //执行倒计时
            this.countDown()
        }).catch(error => {
            message.error("发送失败", 2)
            this.setState({
                code_text:"重新发送",
                code_button_loding: false,
                code_button_disable: false,
            })
            console.log(error)
        })
    }

    render() {
      
      const {code_button_disable, code_button_loding, code_text} = this.state
      //使用变量来存储this指向
      return (
        <Button 
        type="primary" 
        // icon={<PoweroffOutlined/>}
        loading={code_button_loding} 
        disabled={code_button_disable} 
        onClick={this.getCode}  
        danger 
        block>                        {/*htmlType="submit"会自动触发onFinish表单提交方法 */}
            {code_text}
        </Button>
      )
    }
  
  }
  
  export default Code;