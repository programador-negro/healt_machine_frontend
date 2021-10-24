<template>
  <div>
    <div class="NumberShowPanel">
      {{ documento }}
    </div>
    <table>
      <tr>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(1)">1</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(2)">2</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(3)">3</button>
        </td>
      </tr>
      <tr>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(4)">4</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(5)">5</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(6)">6</button>
        </td>
      </tr>
      <tr>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(7)">7</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(8)">8</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(9)">9</button>
        </td>
      </tr>
      <tr>
          <td></td>
        <td>
          <button class="NumerButton" v-on:click="NumberTyped(0)">0</button>
        </td>
        <td>
          <button class="NumerButton" v-on:click="DeleteDocument()">Borrar</button>
        </td>
      </tr>
    </table>
    <br />
    <button type="button" class="SubmitButton" v-on:click="Ingresar">
      Ingresar
    </button>
  </div>
</template>

<script>
export default {
  name: "login",
  created() {
    console.log("LOGIN");
  },
  data() {
    return {
      documento: "",
    };
  },
  methods: {
    Ingresar: () => {
      console.log("FUNCION INGRESAR");
    },
    NumberTyped(number) {
      console.log("TYPING...");
      if (this.documento.length < 15) {
          return this.documento += number;
      }
    },
    DeleteDocument() {
        return this.documento = this.documento.slice(0, this.documento.length - 1)
    }
  },
};
</script>

<style>
.NumerButton {
  width: 100px;
  height: 100px;
}

.SubmitButton {
  width: 180px;
  height: 80px;
}
.NumberShowPanel {
    width: 280px;
    height: 50px;
    border: 2px solid grey;
    border-radius: 15px;
    font-display: center;
    padding-top:10px;
    font-size: 30px;
}
</style>