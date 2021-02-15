import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })

//2.axios发送并发请求
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:4
  }
})])
//     .then(results => {
//   console.log(results)
// })
    .then(axios.spread((res1,res2) => {
      console.log(res1)
      console.log(res2)
    }))
