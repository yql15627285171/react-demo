/*
 * @Author: huangl
 * @Date: 2022-04-07 14:21:50
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 15:10:27
 * @Description: file content
 */
/**
 * BrowserRouter(Histroy模式) HashRouter(Hash模式)
 */
import App from "../App14";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list/:id" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
export default baseRouter;
