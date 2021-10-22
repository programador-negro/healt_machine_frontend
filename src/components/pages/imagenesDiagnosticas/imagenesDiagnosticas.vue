<template>
  <div>
    <h3>
      {{
        title
      }}
    </h3>
    <botones/>
  </div>
</template>

<script>

import botones from '../../botonesControlPagina.vue'

export default {
  name: "imagenesDiagnosticasView",
  components: {
    botones,
  },
  data() {
    return {
      title: 'imegenes diagnosticas'
    };
  },
  methods: {},
};
</script>

<style>
</style>