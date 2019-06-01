import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import Search from '../components/Search';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
];

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
