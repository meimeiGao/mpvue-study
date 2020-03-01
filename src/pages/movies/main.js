import Vue from 'vue'
import Movies from './movies.vue'

//创建当前movies的实例
const movies = new Vue(Movies)

//挂载movies的实例
movies.$mount()




/*
import Vue from 'vue'
import List from './list.vue'
const list = new Vue(List)
list.$mount()*/
