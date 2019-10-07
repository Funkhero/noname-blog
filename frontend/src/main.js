import './assets/scss/_base.scss'

import SvgIcon from 'vue-svgicon';
import VeeValidate from 'vee-validate';

import TableSorter from './plugins/tableSorter';

import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';

import '@/plugins/icons';

Vue.use(SvgIcon);
Vue.use(VeeValidate);
Vue.use(TableSorter);

export default new Vue({
  el: '#app',
  name: 'AppRoot',
  store,
  router,
  render: h => h(App),
});
