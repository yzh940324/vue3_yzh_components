import DefaultTheme from 'vitepress/theme'
import Demo from '../../components/demo.vue'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('Demo',Demo)
    }
  }
