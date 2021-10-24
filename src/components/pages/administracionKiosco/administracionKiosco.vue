<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    
    <footer>
      <botones />
    </footer>
  </div>
</template>

<script>
import botones from "../../botonesControlPagina.vue";

export default {
  name: "administracion",
  components: {
    botones,
  },
  data() {
    return {
      title: "administracion del kiosco",
    };
  },
  methods: {},
};
</script>

<style scope>
/* .btn {
    border-radius: 10px;
    background-color: whitesmoke;
    color: darkslategray;
    padding: 13px;
    margin-left: 30px;
    margin-right: 30px;
} */
</style>