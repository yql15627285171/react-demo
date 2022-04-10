/*
 * @Author: huangl
 * @Date: 2022-04-06 11:32:09
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-06 16:51:05
 * @Description: 带Hook的函数组件
 */

// let msg = "你好世界"

// 改变视图
import { useState } from "react";
export default function App() {
  // Hook只能用在组件函数中的最顶层
  const [msg, setMsg] = useState("你好世界");

  // const fn = () =>
  //     setMsg("hello world")

  return (
    <>
      <h2>{msg}</h2>
      <button onClick={() => setMsg("hello world")}>修改</button>
    </>
  );
}
