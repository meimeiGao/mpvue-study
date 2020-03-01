import {
  RECEIVE_LIST,
  MOVIES_ARR
} from './mutationType.js'
import listData from '../datas/list-datas'
export default {
  getList({commit}) {
    //触发对应的mutation
    //commit(mutationType,data)
    commit(RECEIVE_LIST,{listData})
  },
  getMoviesArr({ commit },moviesArr) {
    commit(MOVIES_ARR,{moviesArr})

  }
}
