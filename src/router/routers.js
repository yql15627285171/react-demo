/*
 * @Author: huangl
 * @Date: 2022-04-09 11:56:29
 * @LastEditors: YQL
 * @LastEditTime: 2022-04-09 14:56:22
 * @Description: file content
 */
import { lazy } from "react"
const router = [
    // {
    //     name: '/',
    //     path: '/',
    //     component: App
    // },
    {
        name: 'Home',
        path: '/home',
        component:lazy(()=>import('@/pages/Home'))
    },
    {
        name: 'List',
        path: '/list/:id',
        component: lazy(()=>import('@/pages/List'))
    },
    {
        name: 'Detail',
        path: '/detail',
        component: lazy(()=>import('@/pages/Detail'))
    },
]
export default router