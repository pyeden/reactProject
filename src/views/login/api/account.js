import service from '../../../utils/request';

/* 登录接口 */
export function Login(data) {
    return service.request({
        url: "/user/login",
        method: "get",
        params: data  //get请求params:data， post请求data:data

    })
}