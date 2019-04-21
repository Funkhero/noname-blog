import Router from 'vue-router';
import IndexPage from '../views/IndexPage.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
  ],
});
