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
    name: 'canalesDeServicioView',
    components: {
      botones,
  },
    data () {
        return {
            title: 'Canales de Atencion'
        }
    },
    methods : {
        
    }

}
</script>

<style>

</style>