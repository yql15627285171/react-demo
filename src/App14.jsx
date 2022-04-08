/*
 * @Author: huangl
 * @Date: 2022-04-07 14:21:15
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-08 11:36:28
 * @Description: 路由
 */
import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
// import "./App.css";
// import { Button } from "antd";

export default function App14() {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/detail", {
      state: { usename: "张三" },
    });
  };

  return (
    <>
      {/* <Button type="primary">Button</Button> */}
      <ul>
        <li>
          <Link to="/home?id=456">首页</Link>
        </li>
        <li>
          <Link to="/list/123">列表页</Link>
        </li>
        <li>
          <Link to="/detail">详情页</Link>
        </li>
      </ul>
      <button onClick={() => goDetail()}>跳转详情页</button>
      <hr />
      <Outlet />
    </>
  );
}
