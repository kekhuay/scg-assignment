<template>
  <div class="search-container">
    <b-jumbotron header="Restaurants" lead="Within Bangsue area" class="text-center"></b-jumbotron>
    <div class="text-center">
      <b-spinner variant="primary" label="Text Centered" style="width: 3rem; height: 3rem;" v-if="!finishedFetchRestaurants"></b-spinner>
    </div>
    <b-list-group>
      <b-list-group-item class="flex-column align-items-start restaurant-item" v-for="restaurant in restaurants" :key="restaurant.id">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ restaurant.name }}</h5>
          <small>Rating {{ restaurant.rating || 0 }}</small>
        </div>

        <p class="mb-1">
          {{ restaurant.vicinity }}
        </p>

      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Search',
  beforeMount: function() {
    this.fetchRestaurants();
  },
  methods: {
    ...mapActions(['fetchRestaurants'])
  },
  computed: mapState({
    restaurants: state => state.restaurants,
    finishedFetchRestaurants: state => state.finishedFetchRestaurants
  })
}
</script>

<style lang="sass" scoped>
  .search-container
    margin-top: 64px;
    margin-bottom: 64px;
  .restaurant-item
    background-color: aliceblue;
    &:hover
      background-color: antiquewhite;
</style>
