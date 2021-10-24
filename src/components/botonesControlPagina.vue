<template>
  <div>
    <a @click="$router.push('/')" class="btn-salir">Salir</a>
    <a @click="$router.back()" class="btn-regresar">Volver</a>
  </div>
</template>

<script>
export default {
  name: "botonesControlPagina",


};
</script>

<style scope>

.btn-salir, .btn-regresar {
    border-radius: 10px;
    background-color: cadetblue;
    color: white;
    padding: 13px;
    margin: 20px;
    font-size: 80px;

    
}
.btn-salir {
  position: absolute;
  left: 0;
    bottom:   0;

}
.btn-regresar {

  position: absolute;
  right: 0;
    bottom:   0;
}


</style>