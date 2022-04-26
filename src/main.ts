/*
 * @Author: 俞志豪
 * @Date: 2022-04-10 21:53:09
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-20 16:31:25
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')
