<template>
  <div id="app">
    <b-container fluid>
      <TopBar />
      <router-view />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import router from './router/index'
import TopBar from './components/TopBar';
import Footer from './components/Footer';

export default {
  name: 'app',
  router,
  components: {
    'TopBar': TopBar,
    'Footer': Footer
  }
}
</script>

<style lang="sass" scoped>
</style>

