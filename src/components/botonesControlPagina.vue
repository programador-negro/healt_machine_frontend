<template>
  <div class="bodyComponent">
    <a @click="$router.push('/')" class="btn-salir">Salir</a>
    <a @click="$router.back()" class="btn-regresar">Volver</a>
  </div>
</template>

<script>
export default {
  name: "botonesControlPagina",
};
</script>

<style scoped>
/* .bodyComponent {
  border: 1px solid red;
  margin: 0;
} */
.btn-salir,
.btn-regresar {
  border-radius: 10px;
  background-color: black;
  color: white;
  padding: 13px;
  margin: 20px;
  font-size: 60px;
  animation-name: btn-animation;
  animation-delay: 3s;
}
.btn-salir {
  padding-right: 60px;
  border-radius: 0rem 10rem 5rem 0rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
.btn-regresar {
  padding-left: 60px;
  border-radius: 10rem 0rem 0rem 5rem;
  position: absolute;
  right: 0;
  bottom: 0;
}

@keyframes btn-animation {
  from {
    background-color: white;
  }

  to {
    background-color: black;
  }
}
</style>