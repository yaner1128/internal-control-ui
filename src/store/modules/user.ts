const user = {
  state: {
    user: {
      name: '内控办经办岗',
      agencyName: '财政监督股'
    }
  },

  mutations: {
    SET_TOKEN: (state: { token: any }, token: any) => {
      state.token = token
    }
  },

  actions: {

  }
}

export default user
