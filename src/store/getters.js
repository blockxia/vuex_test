export default {
  totalCount(state){
    return state.todos.length
  },
  completeCount(state){
    return state.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
  },
//是否已经全部选中
  isAllComplete(state,getters){
    return getters.totalCount===getters.completeCount &&getters.totalCount>0
  }
}
