import './assets/scss/_base.scss'
import VeeValidate from 'vee-validate';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';

Vue.use(VeeValidate);

export default new Vue({
  el: '#app',
  name: 'AppRoot',
  store,
  router,
  render: h => h(App),
});
