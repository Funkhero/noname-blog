import Router from 'vue-router';

const MainPage = () => import(/* webpackChunkName: "mainPage" */ '../views/MainPage.vue');
const AuthPage = () => import(/* webpackChunkName: "authPage" */ '../views/AuthPage.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: AuthPage,
    },
  ],
});
