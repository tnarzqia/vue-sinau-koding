<template>
  <div data="data">
      <div class="table table-bordered">
          <tr v-for="item in response" v-bind:key="item.id">
              <td>{{item.id}}</td>
          </tr>
      </div>
  </div>
</template>

<script>
// import func from 'vue-editor-bridge'
export default {
    data: function(){
        return{
            response: [],
        }
    },
    methods: {
        getData: async function(){
            const response = await fetch("http://192.168.0.253:8321/api/mastersupport/getdata");
            const res = await response.json();
            console.log(this.response)
            this.response=res.data;
        },
    },
    mounted(){
        this.getData()
    }
}
</script>
