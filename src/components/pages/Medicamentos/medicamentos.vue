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
    name: 'medicamentosView',
    components:{
      botones,
    },
    data () {
        return {
              title: 'medicamentos'
        }
    },
    methods : {

    }

}
</script>

<style>

</style>