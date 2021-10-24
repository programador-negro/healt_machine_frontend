<template>
  <div>
    <div class="principal">
      <div class="container">
        <h2>
          Ingrese su numero de cedula
        </h2>
        <hr>
        <div class="NumberShowPanel">
          {{ documento }}
        </div>

        <table class="item">
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
              <button class="DeleteButton" v-on:click="DeleteDocument()">
                Borrar
              </button>
            </td>
          </tr>
        </table>
        <br />
        <button type="button" class="SubmitButton" v-on:click="Ingresar()">
          Ingresar
        </button>
      </div>
    </div>

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
    Ingresar() {
      // funcion temporal
      console.log("LEGNTH DOC: ", this.documento);

      if (this.documento.length >= 10) {
        console.log("DOCUMENTO: OK");

        this.$router.push("/index");

        return true;
      }
      console.log("FUNCION INGRESAR");
    },
    NumberTyped(number) {
      console.log("TYPING...");
      if (this.documento.length < 15) {
        return (this.documento += number);
      }
    },
    DeleteDocument() {
      return (this.documento = this.documento.slice(
        0,
        this.documento.length - 1
      ));
    },
  },
};
</script>

<style>
.principal {
  /* border: 2px solid rgb(219, 87, 87); */
  background-image: url("../assets/img/medical-emblem.png");
  background-repeat: no-repeat;
  background-size:contain ;
  background-position:left ;
  width: 100%;
  height: 839px;
}
.NumerButton {
  width: 130px;
  height: 130px;
  background-color: transparent;
  border-radius: 10px;
  border-color: grey;
  color: black;
  font-size: x-large;
}
.NumerButton:hover {
  width: 130px;
  height: 130px;
  background-color: black;
  border-radius: 10px;
  border-color: black;
  color: white;
  font-size: x-large;
}
.DeleteButton {
  width: 130px;
  height: 130px;
  background-color: orange;
  border-radius: 10px;
  border-color: orange;
  color: white;
  font-size: x-large;
}
.SubmitButton {
  width: 390px;
  height: 100px;
  background-color: cadetblue;
  border-radius: 10px;
  border-color: cadetblue;
  color: white;
  font-size: xx-large;

}
.NumberShowPanel {
  width: 380px;
  height: 50px;
  border: 2px solid grey;
  border-radius: 15px;
  font-display: center;
  padding-top: 10px;
  font-size: 30px;
  margin: 10px;
}
.container {
  margin-right: 100px;
  margin-top: 100;
  position: absolute;
  right: 0;
}
.item {
  display: block;
}
</style>