Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    loading: true,
  },
  mutations: {
    setItem(state, { item, value }) {
      state[item] = value;
    },
  },
  actions: {
  },
  getters: {
  },
});
