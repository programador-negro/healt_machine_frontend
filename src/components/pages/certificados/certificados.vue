<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <botones></botones>
  </div>
</template>

<script>
import botones from '../../botonesControlPagina.vue'
export default {
  name: "certificados",
  components: {
      botones,
  },
  created() {
    console.log("ROUTE PATH: ", this.$route.path);
  },
  data() {
    return {
      title: "Cetificados",
    };
  },
  methods: {},
};
</script>

<style>
</style>