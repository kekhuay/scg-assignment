import axios from 'axios';
import { FETCH_RESTAURANTS, FETCHING_RESTAURANTS, FINISHED_FETCH_RESTAURANT } from './mutation-types';
import { SCG_ASSIGNMENT_API_HOST, SCG_ASSIGNMENT_API_PORT, RESTAURANTS_RESOURCE } from '../utils/env';

export default {
  fetchRestaurants({ commit }) {
    commit(FETCHING_RESTAURANTS);
    axios.get(`${SCG_ASSIGNMENT_API_HOST}:${SCG_ASSIGNMENT_API_PORT}${RESTAURANTS_RESOURCE}/search`).then((response) => {
      commit(FETCH_RESTAURANTS, {
        restaurants: response.data.json.results
      });
      commit(FINISHED_FETCH_RESTAURANT);
    });
  }
};
