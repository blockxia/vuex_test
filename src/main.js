import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import './base.css'

new Vue({
  el:'#app',
  render:h=>h(App),
  store
})
