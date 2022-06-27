import axios from 'axios'

import md5 from 'md5'

import loading from './loading'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    loading.open()

    // 在发送请求之前做些什么
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    return config
  },
  function (error) {
    loading.close()
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    loading.close()
    // 对响应数据做点什么
    return response
  },
  function (error) {
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default request
