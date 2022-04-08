/*
 * @Author: huangl
 * @Date: 2022-04-02 16:05:05
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-08 14:55:20
 * @Description: file content
 */
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './App13'
import Router from "./router/index.jsx"
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        {/* <Router /> */}
        <App />
    </Provider>
    // <App />
    ,
    document.getElementById('root')
)

