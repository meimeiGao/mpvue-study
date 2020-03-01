import Vue from 'vue'
import App from './index.vue'

//创建一个vue的实例
const app = new Vue(App)
//挂载当前的页面,在mpvue里边每一个组件都要配一个main.js,作为当前页面的入口
app.$mount()
