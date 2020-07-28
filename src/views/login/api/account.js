import service from '../../../utils/request';

/* 登录接口 */
export function Login(data) {
    return service.request({
        url: "/user/login",
        method: "POST",
        data:data  //get请求params:data， post请求data:data

    })
}

/* 验证码接口 */
export function GetCode(data) {
    return service.request({
        url: "/user/code",
        method: "POST",
        data: data
    })
} 