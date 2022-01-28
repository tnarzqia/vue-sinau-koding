<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="nav">
    <div class="container">
      <b-navbar-brand href="#">
        <img src="./assets/img/Sinau Coding 1.png" alt="Sinau Codding" class="my-3">
      </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="me-auto mx-5">
            <b-nav-item class="menu px-3" href="#">Home</b-nav-item>
            <b-nav-item class="menu px-3" href="#">Contact</b-nav-item>
            <b-nav-item class="menu px-3" href="#">About</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="d-flex">
            <b-button class="rounded-pill px-5 shadow btn" variant="danger" size="sm">Join</b-button>
          </b-navbar-nav>
        </b-collapse>
    </div>
  </b-navbar>
  <section>
    <b-container>
      <b-row class="py-3">
        <b-col class="align-self-center" cols="6">
          <h3>WELCOME TO SINAU KODING ACADEMY</h3>
          <p>
             Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat
          </p>
        </b-col>
        <b-col cols="6">
          <img class="img-fluid" src="./assets/img/flatdesign 1.png" alt="">
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- footer -->
  <div>
    <b-navbar class="footer" type="dark" variant="dark">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#"></b-nav-item>

          <!-- Navbar dropdowns -->
          <b-navbar-nav class="me-auto">
            <b-nav-item class="menu px-3" href="#"><p>Sinau KODING ACADEMY 2021 ©</p></b-nav-item>
          </b-navbar-nav>
          
          <b-nav-item class="d-flex">
            <p>Join Us</p>
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
.nav{
    background: linear-gradient(315deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #292D32;
}
.menu{
  text-transform: uppercase;
  color: rgb(196, 240, 0);
  font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
}
.btn{
  text-transform: uppercase;

}
section{
    background-color: #292D32;
}
h3{
    color: #D7D7D7;
    font-size: 14px;
    line-height: 34px;
    /* or 133% */
    letter-spacing: 0.08em;  
}
p{
    color: #D7D7D7;
}
</style>
