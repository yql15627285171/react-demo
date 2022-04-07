/*
 * @Author: huangl
 * @Date: 2022-04-06 15:11:06
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 16:45:05
 * @Description: 使用Hook useContext 来进行跨组件传值
 */
import React, { useState, createContext, useContext } from "react";

// 创建上下文空间（provider提供器，Consumer消费者）
const NumContext = createContext();

function Child() {
  const { num, setNum } = useContext(NumContext);
  return (
    <>
      <div>父子传值{num}</div>
      <button onClick={() => setNum(456)}>改变值</button>
    </>
  );
}

const Father = () => <Child />;

export default function App10() {
  const [num, setNum] = useState(123);
  const [num2, setNum2] = useState(123);
  return (
    <NumContext.Provider value={{ num, setNum, num2, setNum2 }}>
      <Father />
    </NumContext.Provider>
  );
}
