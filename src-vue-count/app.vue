<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrodd}}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count:0
      }
    },
    computed:{
      evenOrodd(){
      return this.count%2===1? '奇数':'偶数'
       }
    },
    methods:{
      increment(){
        this.count++
      }
    }
  }
</script>

<style>

</style>
