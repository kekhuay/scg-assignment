import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const Search = () => import('../components/Search');

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
