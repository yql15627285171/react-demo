/*
 * @Author: huangl
 * @Date: 2022-04-06 15:25:21
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 11:32:07
 * @Description: 使用memo和useCallBack 让子组件不受父组件更新而强制重新更新。但是如果子组件存在父组件可变参数时，还是会更新
 */

import React, { useState, memo, useCallback, useMemo } from "react";

const Child = memo((props) => {
  // console.log(props.num)
  return <button onClick={() => props.doSth()}>累加</button>;
});

export default function App12() {
  const [num, setNum] = useState(1);

  /**
   * setNum(newValue) 使用新值强行覆盖初始值
   * setNum((num)=>num+1) 不断使用新值覆盖旧值
   */

  const doSth = useCallback(() => {
    setNum((num) => num + 1);
  }, []);

  // useMemo与useCallBack的区别是需要return一个函数
  // const doSth = useMemo(() => {
  //   return ()=> setNum((num) => num + 1);
  // }, []);

  return (
    <div>
      <h3>数字为:{num}</h3>
      <Child doSth={doSth}></Child>
    </div>
  );
}
