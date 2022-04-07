/*
 * @Author: huangl
 * @Date: 2022-04-06 11:44:54
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 14:16:43
 * @Description: 组件式函数生命周期
 */
import {useState,useEffect} from 'react'

export default function App7() {
    const [num1, setNUm1] = useState(1)
    const [num2, setNUm2] = useState(1)
    
    // 模拟mounted，在这个位置做数据请求
    // useEffect(() => { 
    //     console.log("挂载完成")
    // })
    
    // 模拟updated
    // 检测数据更新,检测那个数据更新，就把这个变量写到数字中
    // 检测所有数据的更新，可以写上所有变量，或者直接删除数组
    // 当不想检测任何数据的更新，可以给个空数组
    // useEffect(() => { 
    //     console.log("挂载完成")
    // },[])
    
    // 模拟beforeDestroy，在这个阶段进行垃圾回收
    useEffect(() => {
        return () => { 
            console.log('销毁阶段')
        }
    })

    return (
        <>
            <h2>数字为{num1}</h2>
            <button onClick={() => setNUm1(num1 + 1)}>累加1</button>
            <hr />
            <h2>数字为{num2}</h2>
            <button onClick={() => setNUm2(num2 + 1)}>累加1</button>
        </>
    )
}

/**
 * (vue生命周期) mounted updated beforeDestroy
 * 
 * 请求数据 监测数据更新 垃圾回收
 */
