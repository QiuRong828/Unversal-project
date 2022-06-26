import requset from '@/utils/request'
import md5 from 'md5'

// 登录
export const login = (model) => {
  model.password = md5(model.password)
  return requset({
    url: '/sys/login',
    method: 'POST'
  })
}
