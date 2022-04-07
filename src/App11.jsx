/*
 * @Author: huangl
 * @Date: 2022-04-06 15:25:21
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 15:56:51
 * @Description: 受控组件和不受控组件
 */
import React, { useState,useRef } from 'react'

export default function App11() {
    const [value, setValue] = useState('')
    const element = useRef(null)
  return (
    <div>
      <h3>受控组件</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => console.log(value)}>获取input的值</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>获取input的值</button>
    </div>
  );
}
/**
 * 受控组件和不受控组件
 * 受控组件和不受控组件只存在于表单元素
 * 所谓受控组件就是表单元素的value需要通过state(或者，useState)来定义
 * 不受控组件以为这表单元素的value无法通过state获取，只能使用ref或者（useRef）来获取
 */