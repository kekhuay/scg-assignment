import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  restaurants: [],
  birthDate: '1989-04-03',
  finishedFetchRestaurants: false,
  pageToken: null
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});
