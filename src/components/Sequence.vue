<template>
  <div class="sequence-container">
    <b-alert show>Please enter sequence of number separated by comma. ex. 3,5,9,15</b-alert>
    <b-input-group class="mt-3">
      <b-form-input v-model="requestSequence"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="calculateSequence(requestSequence)">Find next 3 sequence</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-alert variant="success" show>Next three sequence number is {{ nextThreeSequence }}</b-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapCacheActions } from 'vuex-cache';

export default {
  name: 'Sequence',
  data() {
    return {
      requestSequence: null
    };
  },
  methods: {...mapCacheActions(['calculateSequence'])},
  computed: mapState({
    nextThreeSequence: state => state.responseSequence
  })
}
</script>

<style lang="sass" scoped>
  .sequence-container
    margin-top: 64px;
    margin-bottom: 64px;
</style>

