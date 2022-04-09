/*
 * @Author: huangl
 * @Date: 2022-04-09 10:42:17
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-09 10:43:56
 * @Description: file content
 */
import Axios from 'axios'
// import {HashRouter} from 'react-router-dom'

Axios.interceptors.request.use(function (config) {
  let token = window.localStorage.token;
  if (token) {
    config.headers.Authorization = `token ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error);
});

Axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
//   const router = new HashRouter()
  //路由跳转
//   router.history.push('/')
  return Promise.reject(error);
});
