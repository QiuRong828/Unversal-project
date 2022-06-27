import UserApi from '../../api/user'

export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      localStorage.setItem('token', response.data.data.token)

      console.log(response)
    }
  }
}
