<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <List />
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import List from './List.vue'
  import Footer from './Footer.vue'

  export default { // 配置对象
    mounted(){
      this.$store.dispatch('readTodos')
    },
    components: {
      TodoHeader:Header,
      List,
      TodoFooter: Footer
    },
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
