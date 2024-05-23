import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import createAutoImport from './auto-import'

export default function createVitePlugins() {
  return [vue(), UnoCSS(), ...createAutoImport()]
}
