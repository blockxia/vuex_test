import storageUtil from '../until/storageUtil'
import {
  ADD_TOTO,
  DELETE_TODO,
  SELECT_ALL,
  CLEAR_ALL_COMPLETED,
  RECEIVE_TODOS
} from './mutation-types'

export default {
  addTodo({commit},todo){
    commit(ADD_TOTO,{todo})
  },
  deleteTodo({commit},index){
    commit(DELETE_TODO,{index})
  },
  selectAll({commit},check){
    commit(SELECT_ALL,{check})
  },
  clearAllCompleted({commit}){
    commit(CLEAR_ALL_COMPLETED)
  },
  // 从localStorge中读取保存的todos
  readTodos({commit}){
    setTimeout(()=>{
      const todos=storageUtil.readTodos()
      commit(RECEIVE_TODOS,{todos})
    },1000)
  }
}
