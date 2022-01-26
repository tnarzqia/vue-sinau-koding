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
              <!-- <a class="btn" href="#">
                  <button>Join</button>
              </a> -->
          </nav>
        </header>
          <section>
            <div class="col1">
                <h2>WELCOME TO SINAU KODING ACADEMY</h2>
                <p>
                    Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat
                </p>
            </div>
            <div class="col2">
                <img src="./assets/img/flatdesign 1.png" alt="sinau koding">
            </div>
        </section>
        <footer>
            <p class="kiri">Sinau KODING ACADEMY 2021 ©</p>
            <p class="kanan">Join us</p>
            <img class="twitter" src="./assets/img/twitter.png" alt="">
        </footer>
      
    </body>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import url('./assets/css/style.css');
</style>
