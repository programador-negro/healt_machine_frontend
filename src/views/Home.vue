<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <index />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import index from './components/index.vue'

export default {
  name: 'Home',
  components: {
    index
  }
}
</script>
