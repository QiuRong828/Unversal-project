import UserApi from '../../api/user'

import { getUserInfo } from '@/api/sys'

export default {
  namespaced: true,
  state: () => ({
    token: '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      localStorage.setItem('token', response.data.data.token)

      console.log(response)
    },
    async getUserInfo(content) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
