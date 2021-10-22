<template>
  <div>
    <h3>
      {{ title }}
    </h3>
<botones/>

  </div>
</template>

<script>
import botones from '../../botonesControlPagina.vue'
export default {
name: 'citasMedicasView',
components: {
  botones,
},
data () {
    return {
      title: 'citas medicas'

    }
}, methods : {
    
}
}
</script>

<style>

</style>