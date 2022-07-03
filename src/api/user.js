import request from '../utils/request'

const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

const getUserManage = (data) => {
  return request({
    url: '/user-manage/list',
    method: 'get',
    data
  })
}

export default {
  login,
  getUserInfo,
  getUserManage
}
