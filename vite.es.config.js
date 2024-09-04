// es packging file
import { fileURLToPath, URL } from 'node:url'
import { resolve,dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname=dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir:'empty',
  build:{
    outDir:'dist/es',
    lib:{
        //入口文件
        entry:resolve(__dirname,'src/bundle.js'),
        name:'AlUI',
        fileName:'al-ui',
        formats:['es']
    },
    //vite内部使用rollup打包
    tollupOptions:{
        //不需要打包的依赖
        external:[
            'vue',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome',
            '@popperjs.core',
            'lodash-es'
        ]
    }
  }
})