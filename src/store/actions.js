import axios from 'axios';
import { FETCH_RESTAURANTS, FETCHING_RESTAURANTS, FINISHED_FETCH_RESTAURANT, SET_PAGE_TOKEN, FETCH_MORE_RESTAURANTS, SET_RESPONSE_SEQUENCE } from './mutation-types';
import { SCG_ASSIGNMENT_API_HOST, SCG_ASSIGNMENT_API_PORT, RESTAURANTS_RESOURCE, SEQUENCE_RESOURCE } from '../utils/env';

export default {
  fetchRestaurants({ commit }, keyword) {
    commit(FETCHING_RESTAURANTS);
    axios.get(`${SCG_ASSIGNMENT_API_HOST}:${SCG_ASSIGNMENT_API_PORT}${RESTAURANTS_RESOURCE}/search`, {
      params: {
        keyword
      }
    }).then((response) => {
      commit(FETCH_RESTAURANTS, response.data.json.results);
      commit(FINISHED_FETCH_RESTAURANT);
      commit(SET_PAGE_TOKEN, response.data.json.next_page_token);
    });
  },

  moreRestaurants({ commit, state }) {
    commit(FETCHING_RESTAURANTS);
    axios.get(`${SCG_ASSIGNMENT_API_HOST}:${SCG_ASSIGNMENT_API_PORT}${RESTAURANTS_RESOURCE}/search/next-page`, {
      params: {
        pageToken: state.pageToken
      }
    }).then((response) => {
      commit(FETCH_MORE_RESTAURANTS, response.data.json.results);
      commit(FINISHED_FETCH_RESTAURANT);
      commit(SET_PAGE_TOKEN, response.data.json.next_page_token);
    });
  },

  calculateSequence({ commit }, seq) {
    const seqArr = seq.split(',').map(i => parseInt(i));
    axios.post(`${SCG_ASSIGNMENT_API_HOST}:${SCG_ASSIGNMENT_API_PORT}${SEQUENCE_RESOURCE}`, {
      seq: seqArr
    }).then((response) => {
      commit(SET_RESPONSE_SEQUENCE, response.data);
    });
  }
};
