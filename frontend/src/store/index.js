import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth,
  },
  state: {
    loading: true,
  },
  mutations: {
    setItem(state, { item, value }) {
      state[item] = value;
    },
  },
});
