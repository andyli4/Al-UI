// umd packging file
import { fileURLToPath, URL } from 'node:url'
import { resolve,dirname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const __dirname=dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir:'empty',
  build:{
    outDir:'dist/umd',
    lib:{
        //入口文件
        entry:resolve(__dirname,'src/bundle.js'),
        name:'AlUI',
        fileName:'al-ui',
        formats:['umd']
    },
    //vite内部使用rollup打包
    rollupOptions:{
        //不需要打包的依赖
        external:[
            'vue'
        ],
        output:{
            exports:'named',
            //对应external中的依赖
            //指令了通过什么名字去全局引入这个依赖
            globals:{
                vue:'Vue'
            }
        }
    }
  }
})