<template>
  <div>
        <section>
            <b-container class="section py-5 px-5">
            <b-row class="d-flex align-items-center">
                <b-col class="mb-3">
                    <h3>WELCOME to Sinau ACADEMY</h3>
                    <p>
                            Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat
                    </p>

                </b-col>
                <b-col md="auto">
                    <img v-if="show" src="../assets/img/flatdesign 1.png" class="img-fluid" alt="">
                    <Form v-else/>
                </b-col>
            </b-row>
            </b-container>
        </section>
  </div>
</template>

<script>
import Form from "../components/Form-bootstrap.vue";
export default {
    components: { Form },
    props: {
        show: Boolean,
    },
};
</script>


