import axios from '@/http/axios.js'

/*
 *  支付模块
 */

//  发送请求给分页数据给后台
export const pay = data => {
  return axios({
    url:  'http://localhost:8080/paluginPage.json',
    method: 'post',
    data,
    dataType:'jsonp',
    jsonp: 'jsonpCallback'
  })
}



//  更新数据的请求
export const updata = data => {
  return axios({
    url:  'http://localhost:8080/pluginUpdata.json',
    method: 'post',
    data,
    dataType:'jsonp',
    jsonp: 'jsonpCallback'
  })
}

// 获取后台参数
export const payone = () => {
  return axios({
    url: 'http://localhost:8080/palugin.json',
    method: 'get'
  })
}

// 增加内容
export const payIsert = data => {
  return axios({
    url: 'http://localhost:8080/paluginPageAdd',
    method: 'get'
  })
}
