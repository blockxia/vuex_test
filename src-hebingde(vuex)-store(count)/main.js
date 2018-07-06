import Vue from 'vue'
import app from './app.vue'
import store from './store'
new Vue({
  el:'#app',
  components:{
    app
  },
  template:'<app/>',
  store
})
