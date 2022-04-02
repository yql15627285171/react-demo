/*
 * @Author: huangl
 * @Date: 2022-04-02 17:21:06
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-02 17:28:41
 * @Description: file content
 */
import React, { Component } from 'react'
import './App4.css'

export default class App4 extends Component {
  render() {
    return (
        <div className='box'>
            <button onClick={ this.addNum.bind(this,1)}>按钮1</button>
            <button onClick={ this.addNum.bind(this,2)}>按钮2</button>
        </div>
    )
    }
    addNum(num) { 
        console.log(num)
    }
}
