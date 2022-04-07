/*
 * @Author: huangl
 * @Date: 2022-04-07 10:28:11
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 11:32:08
 * @Description: 入口文件
 */

import reducer from "./reducer"

import { createStore } from "redux"

const store = createStore(reducer)

export default store
