const { createProxyMiddleware} = require('http-proxy-middleware')


module.exports = function(app) {

    app.use(createProxyMiddleware([process.env.REACT_APP_API_PROXY_URL],{
        target: process.env.REACT_APP_BACKEND_URL,
        changeOrigin:true,
        pathRewrite: {
            //ES6语法
            //反引号引用字符串，换行不需要加号连接
            // 引入字符串，${变量名}，前后不需要加号连接
            [`^${process.env.REACT_APP_API_PROXY_URL}`]: "",   
        }
    }))

    app.use(createProxyMiddleware('/api',{
        target:"http://localhost:6000",
        changeOrigin:true
    }))
}