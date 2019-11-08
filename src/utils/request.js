import axios from 'axios'
import { Toast } from 'vant'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// 创建一个axios实例
const service = axios.create({
  baseURL: 'http://47.94.141.42/mock/5dad7d4852016845d493a9ce/mimshop',
  timeout: 5000 //request timeout
})

service.interceptors.request.use(
  config => {
    // if(store.getters.token) {
    //     config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err', error)
    Toast.fail(error.message)
    return Promise.reject(error)
  }
)

export default service
