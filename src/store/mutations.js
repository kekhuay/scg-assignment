import { FETCH_RESTAURANTS, FETCHING_RESTAURANTS, FINISHED_FETCH_RESTAURANT, SET_PAGE_TOKEN, FETCH_MORE_RESTAURANTS, SET_RESPONSE_SEQUENCE } from './mutation-types';

export default {
  [FETCH_RESTAURANTS](state, payload) {
    state.restaurants = [...payload];
  },
  [FETCHING_RESTAURANTS](state) {
    state.finishedFetchRestaurants = false;
  },
  [FINISHED_FETCH_RESTAURANT](state) {
    state.finishedFetchRestaurants = true;
  },
  [SET_PAGE_TOKEN](state, payload) {
    state.pageToken = payload;
  },
  [FETCH_MORE_RESTAURANTS](state, payload) {
    state.restaurants = [...state.restaurants, ...payload];
  },
  [SET_RESPONSE_SEQUENCE](state, payload) {
    state.responseSequence = [...payload.nextThreeSequence];
    state.sequenceMsg = payload.msg;
  }
};
