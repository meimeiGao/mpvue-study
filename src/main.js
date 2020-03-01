import Vue from 'vue'
import App from './App'
import store from './store/store'
import Fly from 'flyio/dist/npm/wx'

//设置vue的提示功能关闭
Vue.config.productionTip = false

//声明当前组件的类型
App.mpType = 'app' //指的是整个应用

//将store对象放置Vue的原型上,为的是每个实例都可以使用
Vue.prototype.$store = store

//创建fly实例
let fly = new Fly
//把fly挂载在vue的原型上
Vue.prototype.$fly = fly


//生成应用的实例
const app = new Vue(App)





//挂载整个应用
app.$mount()
