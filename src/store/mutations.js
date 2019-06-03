import { FETCH_RESTAURANTS, FETCHING_RESTAURANTS, FINISHED_FETCH_RESTAURANT } from './mutation-types'

export default {
  [FETCH_RESTAURANTS](state, payload) {
    state.restaurants = [...payload.restaurants];
  },
  [FETCHING_RESTAURANTS](state) {
    state.finishedFetchRestaurants = false;
  },
  [FINISHED_FETCH_RESTAURANT](state) {
    state.finishedFetchRestaurants = true;
  }
};
