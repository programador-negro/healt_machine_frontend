<template>
  <div >
    <table>
      <tr>
        <td class="opcion1">
          <router-link class="nonstyle" to="/autorizaciones">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />
            <h5>Autorizaciones</h5>
            <p>
              Conoce aquí nuestros canales para consultar y gestionar tus
              autorizaciones.
            </p>
          </router-link>
        </td>
        <td>
          <router-link class="nonstyle" to="/medicamentos">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />
            <h5>Medicamenteos</h5>
            <p>Conoce nuestro modelo de entrega de medicamentos</p>
          </router-link>
        </td>
        <td>
          <router-link class="nonstyle" to="/redAtencion">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />
            <h5>Red de atención</h5>
            <p>
              Accede a la información de nuestros centros médicos, oficinas y
              droguerías de cruz verde.
            </p>
          </router-link>
        </td>
      </tr>

      <tr>
        <td>
          <router-link class="nonstyle" to="/citasMedicas">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Citas Médicas</h5>
            <p>
              Consulta como solictar tus citas de medicina general, pediatría,
              laboratorio y optometría
            </p>
          </router-link>
        </td>

        <td>
          <router-link class="nonstyle" to="/planPremium">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Plan Premium</h5>
            <p>
              Conoce como acceder a beneficios especiales y coberturas
              adicionales
            </p>
          </router-link>
        </td>

        <td>
          <router-link class="nonstyle" to="/laboratorios">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Laboratorios</h5>
            <p>
              Conoce como consultar los resultados de los laboratorios tomados
              en la infraestructura propia
            </p>
          </router-link>
        </td>
      </tr>

      <tr>
        <td>
          <router-link class="nonstyle" to="/imagenesDiagnosticas">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Imágenes diagnosticas</h5>
            <p>
              Conoce como consultar el resultado de tus imágenes Diagnosticas
            </p>
          </router-link>
        </td>

        <td>
          <router-link  class="nonstyle"  to="/certificados">
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Certificados</h5>
            <p>Conoce que certificados puedes solicitar por oficina virtual</p>
          </router-link>
        </td>

        <td>
          <router-link class="nonstyle" to="/canalesDeServicios" >
            <img src="../../src/assets/img/finger-print.jpg" alt="" />

            <h5>Canales de servicio</h5>
            <p>Conoce los canales de atención virtual</p>
          </router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link class="nonstyle" to="/administracionKiosco">
            Administracion del Kiosco
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


img {
  width: 100px;
  height: 100px;
}

.nonstyle {
  text-decoration: none; 
  color: inherit;
}


</style>