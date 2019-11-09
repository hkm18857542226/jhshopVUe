import axios from '@/http/axios.js'

/*
 *  支付模块
 */

//  发送请求给分页数据给后台
export const page = data => {
  return axios({
    url:  'http://localhost:8080/userMember.json',
    method: 'post',
    data,
    dataType:'jsonp',
    jsonp: 'jsonpCallback'
  })
}




// 获取后台参数
export const one = () => {
  return axios({
    url: 'http://localhost:8080/userMember.json',
    method: 'get'
  })
}

// 根据输入的内容查找
export const find = data => {
  return axios({
    url: 'http://localhost:8080/userMemberFind',
    method: 'post',
    data
  })
}
