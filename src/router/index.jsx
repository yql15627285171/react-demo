/*
 * @Author: huangl
 * @Date: 2022-04-07 14:21:50
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-09 15:52:48
 * @Description: file content
 */
/**
 * BrowserRouter(Histroy模式) HashRouter(Hash模式)
 */
import App from "../App14";
import routers from "./routers";
import Error from "../pages/Error";
import React, { Suspense, useEffect } from "react";
import Loading from "../pages/Loading";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={item.path}
              element={
                <Suspense fallback={<Loading />}>
                  <item.component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;
