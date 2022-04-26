/*
 * @Author: 俞志豪
 * @Date: 2022-04-10 22:05:20
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-10 22:47:16
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
 */
import { createRouter,createWebHistory,RouteRecordRaw  } from 'vue-router'
import BaseRoutes from './BaseRoutes'

const routes:Array<RouteRecordRaw> = [
    ...BaseRoutes
]

export default createRouter({
    history: createWebHistory(),
    routes
})