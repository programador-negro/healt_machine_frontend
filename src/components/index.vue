<template>
  <div>
    <table>
      <tr>
        <td class="opcion1" v-on:click="OpcionAutorizaciones()">
          <router-link to="/autorizaciones">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Autorizaciones</h5>
            <p>
              Conoce aquí nuestros canales para consultar y gestionar tus
              autorizaciones.
            </p>

          </router-link>
        </td>
        <td>
          <router-link to="/medicamentos">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Medicamenteos</h5>
            <p>Conoce nuestro modelo de entrega de medicamentos</p>
          </router-link>
        </td>
        <td>
          <router-link to="/redAtencion">
            <figure>
              <img src="" alt="" />
            </figure>
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
          <router-link to="/citasMedicas">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Citas Médicas</h5>
            <p>
              Consulta como solictar tus citas de medicina general, pediatría,
              laboratorio y optometría
            </p>
          </router-link>
        </td>

        <td>
          <router-link to="/planPremium">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Plan Premium</h5>
            <p>
              Conoce como acceder a beneficios especiales y coberturas
              adicionales
            </p>
          </router-link>
        </td>

        <td>
          <router-link to="/laboratorios">
            <figure>
              <img src="" alt="" />
            </figure>
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
          <router-link to="/imagenesDiagnosticas">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Imágenes diagnosticas</h5>
            <p>
              Conoce como consultar el resultado de tus imágenes Diagnosticas
            </p>
          </router-link>
        </td>

        <td>
          <router-link to="/certificados">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Certificados</h5>
            <p>Conoce que certificados puedes solicitar por oficina virtual</p>
          </router-link>
        </td>

        <td>
          <router-link to="/canalesDeServicios">
            <figure>
              <img src="" alt="" />
            </figure>
            <h5>Canales de servicio</h5>
            <p>Conoce los canales de atención virtual</p>
          </router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link to="/administracionKiosco">
            Administracion del Kiosco
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";
// import autorizacionesView from './pages/autorizaciones.vue'

export default {
  name: "index",
  
  data() {
    return {
      counter: 0,
      msj: 'Hola mundo',

    }
  },
  methods: {
    OptionAutorizaciones() {
      console.log('autorizaciones')
      this.$router.push('/autorizaciones.vue');
    },
    counterFunction() {
      return this.counter += 1;
    }
  },
};
</script>

<style scoped>
</style>