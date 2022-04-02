/*
 * @Author: huangl
 * @Date: 2022-04-02 16:59:19
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-02 17:06:18
 * @Description: file content
 */
import React, { Component } from 'react'

export default class App2 extends Component {
    state = {
        num: 1
    }
    render() {
        return (
        <div>
                <h2>数字为：{ this.state.num }</h2>
                <button onClick={() => this.setState({num:this.state.num+1})}>累加</button>
        </div>
        )
    }
}

/**
 * state - >setState
 * data -> setData
 */