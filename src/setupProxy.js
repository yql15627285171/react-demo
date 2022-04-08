/*
 * @Author: huangl
 * @Date: 2022-04-08 16:28:12
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-08 18:36:11
 * @Description: file content
 */
const {
    createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://m.kugou.com?json=true',/*这里写自己的代理地址*/
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        },
    }));
};
