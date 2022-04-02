/*
 * @Author: huangl
 * @Date: 2022-04-02 16:35:47
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-02 16:58:40
 * @Description: file content
 */
import React from "react";

const msg = "你好世界"
const flag = false
// const myStyle = {backgroundColor:"red"}
let arr = ['刘备','张飞','关于']

export default class App1 extends React.Component { 
    render() { 
        return (
            <>
                <h2>{msg}</h2>
                {/*  */}
                <hr />
                <label htmlFor="username"></label>
                <input type="text" id="usename" />
                <hr />
                <div className="box">盒子</div>
                <hr />
                <div style={{ backgroundColor: flag ? "blue" : "red" }}>内容内容</div>
                <hr />
                <ul>
                    {
                        // React中的列表循环有且只有map可以使用
                        // 只有map才有返回值，forEach没有
                        arr.map((item, index) => { 
                            return <li key={ index }>{ item }</li>
                        })
                    }
                </ul>
            </>
        )
    }
}