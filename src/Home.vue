<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    
    <ul>
    <li><router-link to="/home">Home</router-link> </li>
      <li><router-link to="/home">Mi Perfil</router-link> </li>
      <li><router-link to="/empresas">Empresas</router-link></li>
    </ul>

    
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data () {
    return {
      msg: 'Bienvenido a B2B Social Network'
    }
  },
  methods:{
    actualizarEmpresa(){

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
