<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div @click="$router.push('/')" class="btn">
      ¿Cómo solicitar las autorizaciones por canales no presenciales?
    </div>
    <br />
    <div @click="$router.push('/')" class="btn">
      Conoce y consultar el estado de la autorización
    </div>

    <br />
      <boton class="boton" />
  </div>
</template>
<script>
import boton from "../../botonesControlPagina.vue";
export default {
  name: "autorizaciones",
  components: {
    boton,
  },
  data() {
    return {
      title: "Autorizaciones",
    };
  },
  // methods: {},
};
</script>
<style scoped>
@import '../../../../src/assets/css/autorizaciones.css';


</style>