/*
 * @Author: huangl
 * @Date: 2022-04-02 17:06:58
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 14:25:56
 * @Description: file content
 */
import React, { Component } from 'react'

export default class App3 extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            num:1
        }
        // this.addNum = this.addNum.bind(this)
    }
    componentDidMount() { 
        console.log("挂载完成")
    }
    render() {
        return (
        <div>
                <h2>数字为：{ this.state.num }</h2>
                <button onClick={() => this.setState({num:this.state.num+1})}>累加</button>
                <button onClick={this.addNum.bind(this)}>按钮2-累加</button>
                {/* <button onClick={this.addNum}>按钮3-累加</button> */}
                <button onClick={()=>this.addNum()}>按钮4-累加</button>
        </div>
        )
    }

    addNum(aaa) { 
        this.setState({num:this.state.num + 1})
    }
}

// class Person { 
//     constructor(name) { 
//         this.name = name
//     }
//     sayName() { 
//         console.log(this.name)
//     }
// }