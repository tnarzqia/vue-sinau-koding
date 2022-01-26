<template>
  <div>
      <section>
            <div class="col1">
                <h2>WELCOME TO SINAU KODING ACADEMY</h2>
                <p>
                    Sinau Koding adalah Program Pelatihan Programer dengan materi yang relevan pada kebutuhan industri saat ini. Materi yang ditawarkan diantaranya pemrograman website dan android Lihat
                </p>
            </div>
            <div class="col2">
                <img v-if="show" src="../assets/img/flatdesign 1.png" alt="sinau koding">
                <Form v-else/>
            </div>
        </section>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
    components: { Form },
    props: {
        show: Boolean,
    },
};
</script>
