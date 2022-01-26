<template>
  <div>
      <div class="conten">
        <img class="sinau" src="../assets/img/Sinau Coding 1.png" alt="sinau koding">
        <!-- <form action=""> -->
            <div class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" placeholder="Enter Username">
            </div>
            
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Enter Password">
            </div>

            <div class="form-control">
                <label for="imei">Imei</label>
                <input type="text" id="imei" v-model="imei" placeholder="Enter Imei">
            </div>
            <button @click="Login()" class="login" type="button" value="">Login</button>
        <!-- </form> -->
    </div>
  </div>
</template>
<script>
import axios from "axios"

export default {
    name: 'APP',
    components: {

    },
    data: function(){
        return{
            username: '',
            password: '',
            imei: '',
            response: []
        }
    },
    methods: {
        Login: async function(){
            const params = {
                title: this.username,
                password: this.password,
                imei: this.imei
            };
            axios.post("http://192.168.0.253:8321/api/authentication/login", params).then(response => this.response = response.data);
            this.$router.push('/');               
            
            // console.log('username', this.username),
            // console.log('password', this.password),
            // console.log('imei', this.imei)
        }
    }
}
</script>
