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
    name: 'redAtencionView',
  components: { botones },

    data() {
        return {
title:'red de atencion'
        }
    },
    methods: {

    }
}
</script>