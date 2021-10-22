<template>
  <div>
<h3>
  {{title}}
</h3>
<botones/>
  </div>
</template>

<script>
import botones from '../../botonesControlPagina.vue'
export default {
name : 'laboratoriosVuew',
components: {
  botones,
},
data () {
    return {
title: 'laboratorios'
    }
},
methods: {
    
}
}
</script>

<style>

</style>