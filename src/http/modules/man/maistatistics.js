import axios from '@/http/axios.js'

/*
 *  支付模块
 */

// 获取后台参数
export const mainshuju = () => {
  return axios({
    url: 'http://localhost:8080/main.json',
    method: 'get'
  })
}
