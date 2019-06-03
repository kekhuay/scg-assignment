<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
      <b-navbar-brand to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/sequence">Sequence</b-nav-item>
          <b-nav-item to="/search">Search</b-nav-item>
          <b-nav-item to="/about">About Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

