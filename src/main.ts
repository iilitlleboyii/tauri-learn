import { createApp } from 'vue'
import App from './App.vue'

// 全局样式
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

import { invoke } from '@tauri-apps/api/tauri'

const app = createApp(App)

setTimeout(() => {
  app.mount('#app')

  invoke('close_splashscreen')
}, 1500)

document.addEventListener(
  'contextmenu',
  (event) => {
    event.preventDefault()
  },
  false
)
