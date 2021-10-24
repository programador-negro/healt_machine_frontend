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
    background-color: black;
    color: white;
    padding: 13px;
    margin: 20px;
    font-size: 80px;

    
}
.btn-salir {
  padding-right: 60px;
  border-radius: 0rem 5rem 5rem 0rem;
  position: absolute;
  left: 0;
    bottom:   0;

}
.btn-regresar {
  padding-left: 60px;
  border-radius: 5rem 0rem 0rem 5rem;
  position: absolute;
  right: 0;
    bottom:   0;
}


</style>