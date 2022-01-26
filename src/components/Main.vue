<template>
    <div id="app">
        <body>
             <header>
                <img class="logo" src="../assets/img/Sinau Coding 1.png" alt="sinau coding">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                    <a class="btn" href="#">
                        <button>Join</button>
                    </a>
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
                    <img src="../assets/img/flatdesign 1.png" alt="sinau koding">
                </div>
            </section>
            <footer>
                <p class="kiri">Sinau KODING ACADEMY 2021 ©</p>
                <p class="kanan">Join us</p>
                <img class="twitter" src="../assets/img/twitter.png" alt="">
            </footer>
        </body>
            
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap');
body{
    /* background-color: #292D32; */
    background-color: #076ae2;

    width: 100%;
}
header{
    position: absolute;
    width: 100%;
    height: 66px;
    background: linear-gradient(315deg, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #292D32;
    background-blend-mode: soft-light, normal;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 1;
}
.logo{
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
}
ul{
    margin-left: 0px;
    padding: 10px;
}
ul li{
    display: inline;
    list-style: none;
}
ul li a{
    position: relative;
    top: 0px;
    color: #D7D7D7;
    text-decoration: none;
    padding-left: 50px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}
button{
    position: relative;
    float: right;
    top: -55px;
    right: 50px;
    width: 150px;
    height: 28px;
    background: #292D32;
    mix-blend-mode: normal;
    box-shadow: -2px -2px 8px #474C54, 2px 2px 8px #17191C;
    border-radius: 12px;
    color: #D7D7D7;
    cursor: pointer;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

/* conten */
section{
    /* position: absolute; */
    display: flex;
    align-items: center;
    /* margin-top: 100px; */
    /* margin: 50px 80px; */
    background-color: #292D32;
    width: 1350px;
}
.col1{
    padding-right: 30px;
    width: 50%;
}
.col1, h2{
    color: #D7D7D7;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    /* or 133% */
    letter-spacing: 0.08em;
}
.col1, p{
    color: #D7D7D7;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
}
.col2{
    position: relative;
    float: right;
    text-align: center;
}
.col2 img{
    width: 500px;
    height: 500px;
    left: 730px;
    top: 72px;
}

/* footer */
footer{
    position: absolute;
    width: 100%;
    height: 66px;
    left: 0px;
    bottom: 0px;
    
    background: linear-gradient(315deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.6) 100%), #292D32;
    background-blend-mode: soft-light, normal;
}
footer p.kiri{
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    padding-left: 40px;
    padding-top: 5px;
    text-align: left;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #D7D7D7;

}
footer p.kanan{
    position: relative;
    float: right;
    top: -47px;
    right: 50px;
    padding-right: 50px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    padding-top: 5px;
    text-align: lect;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #D7D7D7;
}
img.twitter{
    position: relative;
    float: right;
    top: -30px;
    right: -20px;
    border: 2px solid #D7D7D7;
    box-sizing: border-box;
    border-radius: 50px;
    width: 20px;
}
</style>