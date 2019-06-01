<template>
  <div id="app">
    <b-container fluid>
      <TopBar />
      <router-view />
    </b-container>
  </div>
</template>

<script>
import router from './router/index'
import TopBar from './components/TopBar';

export default {
  name: 'app',
  router,
  components: {
    'TopBar': TopBar
  }
}
</script>

<style>
</style>
