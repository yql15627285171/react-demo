/*
 * @Author: huangl
 * @Date: 2022-04-02 16:10:49
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-02 16:24:17
 * @Description: file content
 */
import React from "react";

const msg = '你好 React'
// 类组件
class App extends React.Component { 
    render() { 
        return (
            <div>
                <h2>{msg}</h2>
                <input type="text" />
            </div>
        )
    }
}

export default App 

/**
 * 1.文件名可以是jsx或者js,不影响代码运行
 * 2.组件名称必须是大写
 * 3.js中出现（），代表其想要写html
 * 4.html出现{}代表其中药写js
 * 5.export default可以写到class前面
 * 6.jsx的语法可以在vscode中配置
 */