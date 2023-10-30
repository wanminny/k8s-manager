import axios from 'axios';
import { ElMessage } from 'element-plus'
import router from "@/router";

//1. 创建axios对象
const service = axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_API, // 如果后端开放了cors，就可以用这个替代上面一行
        timeout: 6000, // 设置超时时间1分钟
        header: {
            'Content-Type': 'application/json;charset=UTF-8', // 基础的请求头
        },
    }
);

//2. 请求拦截器
service.interceptors.request.use(config => {
    return config;
  }, error => {
    Promise.reject(error);
  });

  
// 3. 响应拦截器
service.interceptors.response.use(
response => {
  //判断code码
  if (response.code !== 200) {
    if (response.code === 11002 ) {
        ElMessage({
            message: '登录已过期，请重新登陆',
            type: 'warning',
        })
        localStorage.removeItem('token')
        router.push('/login')
        return
    }
    return response.data
}else {
    return response.data
}
},error => {
  return Promise.reject(error);
});


export default service;