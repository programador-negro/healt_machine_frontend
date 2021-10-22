
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
name: 'planPremiumView',
components:{
  botones,
},
data() {
    return {
title: 'plan premium'
    }
},
methods: {

}
}
</script>

<style>

</style>