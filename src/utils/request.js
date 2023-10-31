// file config axios sau đó, tại các nơi sử dụng thì gọi vào thay cho axios mặc định
import axios from 'axios'
import { authStore } from '../stores/authStore'
import { toRefs } from 'vue'
// import { toast } from 'vue3-toastify';
import { getActivePinia } from "pinia"
import router from '../router'

// create an axios instance
const baseUrl = import.meta.env.VITE_API_BASE_URL
const service = axios.create({
  baseURL: baseUrl,
  timeout: 400000
})
service.interceptors.request.use(
  config => {
    const auth = toRefs(authStore());

    if (auth.token?.value) {
      config.headers['Authorization'] = 'Bearer ' + auth.token?.value
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response
    
    if (response?.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    if (error) {
      if (error.response?.status == 422) {
        return error.response.data
      }
    //   else if(error.response?.status == 401) {
    //     getActivePinia()._s.forEach(store => store.$reset());
    //   } 
         // toast.error(error.message, {autoClose: 2000})
    }
    
    return Promise.reject(error)
  }
)

export default service
