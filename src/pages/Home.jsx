/*
 * @Author: huangl
 * @Date: 2022-04-07 14:17:28
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 14:58:10
 * @Description: file content
 */
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams] = useSearchParams();
  let id = searchParams.getAll("id")[0];
  return (
    <div>
      <h2>Home-{id}</h2>
    </div>
  );
}
