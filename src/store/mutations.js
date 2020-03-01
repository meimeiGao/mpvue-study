import {
  RECEIVE_LIST,
  MOVIES_ARR
} from './mutationType'
export default {
  [RECEIVE_LIST](state,{listData}){
    state.listTemp = listData
  },
  [MOVIES_ARR](state,{moviesArr}){
    state.moviesArr = moviesArr
  },
}
