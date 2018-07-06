import {
  ADD_TOTO,
  DELETE_TODO,
  RECEIVE_TODOS,
  CLEAR_ALL_COMPLETED,
  SELECT_ALL
} from './mutation-types'


export default {
  [ADD_TOTO](state,{todo}){
    state.todos.unshift(todo)
  },
  [DELETE_TODO](state,{index}){
    state.todos.splice(index,1)
  },

  [SELECT_ALL](state,{check}){
    state.todos.forEach(todo=>todo.complete=check)
  },
  [CLEAR_ALL_COMPLETED](state){
    state.todos=state.todos.filter(todo=>!todo.complete)
  },
  [RECEIVE_TODOS](state,{todos}){
    state.todos=todos
  }
}
