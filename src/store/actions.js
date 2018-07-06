import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_FAIL
} from './mutation-types'
export default {
   search({commit},searchName){
     commit(REQUESTING)
     axios.get(`https://api.github.com/search/users?q=${searchName}`)
       .then(response=>{
         const users=response.data.items.map(item=>{
           return{
             url: item.html_url,
             name: item.login,
             avatar_url: item.avatar_url
           }
         })
         commit(REQ_SUCCESS,{users})
       })
       .catch(error=>{
        commit(REQ_FAIL)
       })
   }


}
