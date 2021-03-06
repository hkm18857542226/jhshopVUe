import axios from '@/http/axios.js'

/* 
 * 系统登录模块
 */

// 登录
export const login = data => {
    return axios({
        url: 'http://localhost:8080/login',
        method: 'post',
        data
    })
}

// 登出
export const logout = () => {
    return axios({
        url: 'logout',
        method: 'get'
    })
}

