/*
 * @Author: huangl
 * @Date: 2022-04-06 14:59:46
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 15:21:53
 * @Description: 利用上下文context来进行跨组件传值
 */
import React, { useState, createContext } from 'react'

// 创建上下文空间（provider提供器，Consumer消费者）
const NumContext = createContext()

function Child() { 
    return (
        <NumContext.Consumer>
            {
                ({num,setNum}) => (
                    <>
                        <div>父子传值{num}</div>
                        <button onClick={()=>setNum(456)}>改变值</button>
                    </>
                )
            }
        </NumContext.Consumer>
        
        
    )
}

const Father = ()=> <Child />

export default function App9() {
    const [num,setNum] = useState(123)
    return (
        <NumContext.Provider value={{ num, setNum } }>
            <Father />
        </NumContext.Provider>
    )
}