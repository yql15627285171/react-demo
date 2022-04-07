/*
 * @Author: huangl
 * @Date: 2022-04-07 14:18:03
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 15:04:40
 * @Description: file content
 */
import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  return <div>Detail-{location.state ? location.state.usename : ""}</div>;
}
