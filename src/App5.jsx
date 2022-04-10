/*
 * @Author: huangl
 * @Date: 2022-04-06 11:00:24
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 11:30:52
 * @Description: 函数式组件
 */
// import React, { Component } from 'react'

// export default class App5 extends Component {
//   render() {
//     return (
//       <div>App 组件</div>
//     )
//   }
// }
export default function App() {
  return <h2>App</h2>;
}

/**
 * 1.函数式组件没有生命周期
 * 2.函数式组件没有this
 * 3.函数式组件没有state状态
 *
 * Hooks(钩子 - 生命周期钩子)
 *       - React官方提供hook
 *       - 开发人员自动以的hook
 */
