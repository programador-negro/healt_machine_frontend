<template>
  <div>
<h3>
  {{title}}
</h3>
<footer>
  <botones/>
</footer>
  </div>
</template>

<script>
import botones from '../../botonesControlPagina.vue'

export default {
    name: 'administracion',
    components: {
      botones,
    },
    data () {
        return {
          title:'administracion del kiosco'
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>