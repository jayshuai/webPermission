import axios from "axios";
import {getToken} from "@/utils/setToken.js";
import {ElMessage} from "element-plus";

const service = axios.create({
    baseURL: '/api',//baseUrl会自动加在请求地址上
    timeout: 3000//请求超时毫秒数
})
//添加请求拦截器
service.interceptors.request.use((config) => {
    config.headers['token'] = getToken('token')
    //请求之前做些什么（获取并设置token）
    return config
}, (error) => {
    return Promise.reject(error)
})

//添加响应拦截器

service.interceptors.response.use((response) => {
    //对响应数据做些什么
    let {status, message} = response.data
    if (status !== 200) {
        ElMessage({message:message||'error',type:'warning'})
    }
}, (error) => {
    return Promise.reject(error)
})

export default service