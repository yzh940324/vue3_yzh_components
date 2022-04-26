
/*
 * @Author: 俞志豪
 * @Date: 2022-04-10 21:53:09
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-10 22:51:17
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import proxy from './config/proxy'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名（路径缩写）配置
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    host: '0.0.0.0',
    port: 1113,
    proxy // 本地代理配置
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/main.scss";' // 全局saas引入
      }
    }
  },
})
