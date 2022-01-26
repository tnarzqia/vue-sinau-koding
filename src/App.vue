<template>
  <div id="app">
    <body>
      <header>
        <router-link to="/">
          <img class="logo" src="./assets/img/Sinau Coding 1.png" alt="sinau coding">
        </router-link>
          <nav>
              <ul>
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">Contact</router-link>
                  </li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li>
              </ul>
                <button class="btn" @click="showMe">Join us</button>
          </nav>
        </header>

          <router-view :show="show"></router-view>

        <Footer />
    </body>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer,
  },
  data() {
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
@import url('./assets/css/style.css');
</style>
