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

//3.使用全局配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// //2.axios发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:4
//   }
// })])
// //     .then(results => {
// //   console.log(results)
// // })
//     .then(axios.spread((res1,res2) => {
//       console.log(res1)
//       console.log(res2)
//     }))

//4.创建对应的axios实例(一个服务器可能不在一个ip地址当中)
const instance1 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})

instance1({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
})

instance1({
  url:'/home/data'
}).then(res => {
  console.log(res)
})

// const instance2 = axios.create({
//   baseURL:'http://222.207.32.32:8000',
//   timeout:10000,
//   //headers:{}
// })
