/*
 * @Author: huangl
 * @Date: 2022-04-07 14:17:53
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 14:51:42
 * @Description: file content
 */
import React from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const { id } = useParams();
  return (
    <div>
      <h2>list-{id}</h2>
    </div>
  );
}
