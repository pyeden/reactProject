const { createProxyMiddleware} = require('http-proxy-middleware')


module.exports = function(app) {

    app.use(createProxyMiddleware('/devApi',{
        target:"http://localhost:5000/v1",
        changeOrigin:true,
        pathRewrite: {
            "^/devApi": "",
        }
    }))

    app.use(createProxyMiddleware('/api',{
        target:"http://localhost:6000",
        changeOrigin:true
    }))
}