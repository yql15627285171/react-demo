/*
 * @Author: huangl
 * @Date: 2022-04-06 14:45:03
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 14:58:31
 * @Description: 父子组件传值
 */
import React, { useState } from 'react'

function Child(props) { 
    function changeValue() { 
        props.setNum(456)
    }
    return (
        <>
            <div>父子传值{props.num}</div>
            <button onClick={()=>changeValue()}>改变值</button>
        </>
        
    )
}

function Father(props) { 
    return <Child num={ props.num } setNum={ props.setNum }/>
}

export default function App8() {
    const [num,setNum] = useState(123)
    return (
        <Father num={num} setNum={ setNum }/>
    )
}

