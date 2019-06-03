import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const About = () => import('../components/About');
const Search = () => import('../components/Search');
const Sequence = () => import('../components/Sequence');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
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
  },
  {
    path: '/sequence',
    name: 'sequence',
    component: Sequence
  }
];

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
