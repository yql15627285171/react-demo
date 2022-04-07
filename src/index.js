/*
 * @Author: huangl
 * @Date: 2022-04-02 16:05:05
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 14:34:24
 * @Description: file content
 */
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import App from './App14'
import Router from "./router/index.jsx"
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        {/* <App></App> */}
        <Router />
    </Provider>
    ,
    document.getElementById('root')
)

