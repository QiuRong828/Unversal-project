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

const getUserRole = () => {
  return request({
    url: '/role/list',
    method: 'get'
  })
}

const getUserPermission = () => {
  return request({
    url: '/permission/list',
    method: 'get'
  })
}
export default {
  login,
  getUserInfo,
  getUserManage,
  getUserRole,
  getUserPermission
}
