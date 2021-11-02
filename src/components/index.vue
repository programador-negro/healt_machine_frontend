<template>
  <div class="bodyComponent">
    <table>
      <tr>
        <td class="opcion1">
          <router-link class="nonstyle" to="/citas">
            <img src="../../src/assets/img/citas-icon.png" alt="" />
            <h5>Citas</h5>
            <p>
              Conoce aquí nuestros canales para consultar y gestionar tus
              citas.
            </p>
          </router-link>
        </td>
        <td>
          <router-link class="nonstyle" to="/medicamentos">
            <img src="../../src/assets/img/medicamentos-icon.png" alt="" />
            <h5>Medicamentos</h5>
            <p>Conoce nuestro modelo de entrega de medicamentos</p>
          </router-link>
        </td>
        <td>
          <router-link class="nonstyle" to="/reclamos">
            <img src="../../src/assets/img/reclamos-icon.png" alt="" />
            <h5>Reclamos</h5>
            <p>
              Haz saber tus reclamos.
            </p>
          </router-link>
        </td>
      </tr>
      <br>
      <br>
      <tr>
        <td></td>
        <td>
          <router-link class="nonstyle" to="/administracionKiosco">
            <img src="../../src/assets/img/admin-icon.png" alt="" />
            <h5>
            Administracion del Kiosco
            </h5>
          </router-link>
        </td>
      </tr>
    </table>
    <botones/>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";
// import autorizacionesView from './pages/autorizaciones.vue'
import botones from '../components/botonesControlPagina.vue'
export default {
  name: "index",
  components: {
    botones
  },
  created() {
    console.log(this.urlBackend)
      // this.$axios.post(this.urlBackend + 'getBasicData/' , {}).then(response => {
      //     // console.log('SUCCESS', response)
      //   }).catch(error => {
      //     // console.log('ERROR', error)
      //     this.$libs.createAlert('negative', error.response.data, 'close', 'top', 4000)
      //   })
  },
  data() {
    return {
      counter: 0,
      msj: "Hola mundo",
    };
  },
  methods: {
    OptionAutorizaciones() {
      console.log("autorizaciones");
      this.$router.push("/autorizaciones.vue");
    },
    counterFunction() {
      return (this.counter += 1);
    },
  },
};
</script>

<style scoped>
/* .bodyComponent {
  border: 1px solid red;
  margin: 0;
} */

img {
  width: 100px;
  height: 100px;
}

.nonstyle {
  text-decoration: none; 
  color: inherit;
}
table {
  margin: 5% 25% ;
}

td {
  width: 7%;
  padding: 0% 5%;
  /* border: 1px solid black; */
}
p, h5 {
  font-size: large;
}


</style>