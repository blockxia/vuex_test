<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrodd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapActions,mapGetters}from 'vuex'
  export default {

    computed:{
      ...mapState(['count']),
      ...mapGetters(['evenOrodd'])
    },
    methods:{

      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
     /* ...mapActions({
        increment:'increment2',
        decrement:'decrement',
        incrementIfOdd:'incrementIfOdd',
        incrementAsync:'incrementAsync'
      })*/
    }
  }
</script>

<style>

</style>
