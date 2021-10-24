<template>
  <div >
    <!-- <div v-if="$route.path != '' ">
        <a @click="$router.push('')">Salir</a>
        <a @click="$router.back()">Regresar</a>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    created(){
        console.log('ROUTE PATH: ',this.$route.path)
    }
}
</script>

<style>

</style>