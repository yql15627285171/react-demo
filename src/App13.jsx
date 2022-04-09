/*
 * @Author: huangl
 * @Date: 2022-04-07 11:20:01
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-09 15:52:45
 * @Description: 使用react-redux
 */
import React from "react";
import { connect } from "react-redux";

function App13(props) {
  return (
    <div>
      <h2>数字为：{props.num}</h2>
      <button onClick={() => props.leijia()}>累加</button>
    </div>
  );
}

// 状态映射：将reducer中的state映射成props.让开发者可以在组件中使用props.num去调用state中的num
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

// 映射事件到props
const mapDispatchToProps = (dispatch) => {
  return {
    leijia() {
      const action = { type: "addNum", value: 2 };
      dispatch(action);
    },
  };
};

// connect(state映射，dispatch映射)(当前组件名)
export default connect(mapStateToProps, mapDispatchToProps)(App13);
