<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <a @click="$router.back()">Regresar</a>
    <a @click="$router.push('')">Salir</a>
  </div>
</template>
<script>
export default {
  name: "autorizaciones",
  data() {
    return {
      title: "Autorizaciones",
    };
  },
  // methods: {},
};
</script>