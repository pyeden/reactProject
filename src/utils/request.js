import axios from 'axios';


const service = axios.create({
    baseURL: "devApi",
    timeout:5000,
})


//请求拦截
service.interceptors.request.use(function(config) {
    //发送请求之前做些什么
    console.log("开始发起ajax请求前--config:",config)
    return config;
    }, function(error) {
        //处理请求错误
        return Promise.reject(error);
    });


//响应拦截
service.interceptors.response.use(function(response) {
    //对响应数据做点什么
    console.log("返回ajax请求--response:",response)
    return response
    },function(error) {
        //处理请求错误
        return Promise.reject(error);
    });



export default service;