/*
 * @Author: huangl
 * @Date: 2022-04-07 10:28:11
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-07 11:32:08
 * @Description: 入口文件
 */


import { createStore ,applyMiddleware } from "redux"
import reducers from './reducers';
import thunk from 'redux-thunk';

// 数据出持久化
import { persistStore, persistReducer } from 'redux-persist';
// sessionStorage
import storage from 'redux-persist/lib/storage/session'; // defaults to localStorage for web
// localStorage
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// 整个reducer放入黑白名单
const persistConfig = {
	key: 'count',
	storage,
    whitelist:['count'] //黑名单blacklist
};

// 将reducer中的某个属性放入黑白名单

const persistedReducer = persistReducer(persistConfig, reducers);
// 添加中间件，处理异步

export const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store);

