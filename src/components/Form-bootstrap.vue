<template>
  <div>
    <b-card
        style="max-width: 30rem; background: #292D32; border-radius: 12px;"
        class="shadow-lg my-2 mx-5 border-radius"
    >
        <div class="d-flex justify-content-center py-3">
            <img src="./assets/img/Sinau Coding 1.png" alt="">
        </div>

        <b-card-text>
            <div class="container py-3">
            <b-form @submit.stop.prevent>
                <label class="py-3 input" for="text-email">Email</label>
                <b-form-input class="inputs" type="email" id="text-email"></b-form-input>

                <label class="py-3 input" for="text-password">Password</label>
                <b-form-input type="password" id="text-password"></b-form-input>

                <label class="py-3 input" for="text-imei">Imei</label>
                <b-form-input type="text" id="text-imei"></b-form-input>
            
                <div class="d-grid gap-2">
                <b-button class="join my-3">Join</b-button>
                </div>
            </b-form> 
            </div>
        </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
    
}
</script>
