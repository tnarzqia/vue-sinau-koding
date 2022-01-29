<template>
<div id="App">
  <b-navbar toggleable="lg" type="dark" class="nav">
    <div class="container">
      <b-navbar-brand>
        <router-link to="/">
          <img src="./assets/img/Sinau Coding 1.png" alt="Sinau Codding" class="my-3">        
        </router-link>
      </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="me-auto mx-5">
            <b-nav-item class="menu px-3">
              <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item class="menu px-3">
              <router-link to="/contact">Contact</router-link>
            </b-nav-item>
            <b-nav-item class="menu px-3">
              <router-link to="/about">About</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="d-flex">
            <b-button @click="showMe" class="rounded-pill px-5 shadow-lg btn" size="sm">Join</b-button>
          </b-navbar-nav>
        </b-collapse>
    </div>
  </b-navbar>

  <router-view :show="show"></router-view>

  <!-- footer -->
  <Footer/>

</div>
</template>

<script>
import Footer from "./components/Footer-bootstrap.vue";
export default {
  name: 'App',
  components: {
    Footer,
  },
  data(){
    return{
      show: true,
    };
  },
  methods: {
    showMe() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
@import url('./assets/css/Style_bootstrap.css');
</style>
