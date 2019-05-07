<template>
     <div class="maintenance" >
                <div class="maintenance--error">
                    
                    <h1>{{msg}}</h1>


                  <form v-on:submit.prevent="loginEmpresa">
                  <label class="maintenance--label">NIT: </label>
                    <p>
                    
                    <input  type="number" class="maintenance--input" v-model="empresa.nit">
                    </p>
                    
                       <label class="maintenance--label">Contraseña: </label>
                    <p>
                   
                    <input type="password" value="1234" class="maintenance--input" v-model="empresa.contraseña">
                    </p>
                    <input type="submit" value="Login" class="maintenance--button">
                    </input>
                    </form>
                    

                    <p>Eres nuevo? <router-link to="/registrar">Registrate AQUÍ</router-link> </p>
                </div>
            </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'login',

  mounted() {
   
  },

  data () {
    return {
      msg: 'Ingrese su nit y su contraseña',
      empresa:{
        
        nit: '',
        contraseña: '1234'
      }
    }
  },
  methods:{
    loginEmpresa(){
      var router = this.$router;
      router.push('/home');
    }
  }
}
</script>

<style lang="scss">


h1{
    
        font-family: ProximaNova !important;
        

  font-weight:bold;
    
}

.maintenance{
    display: flex;
	justify-items: center;
	align-items: center;
	height: 100vh;
    width: 100vw;
    color: #4a4a4a;
    background-color: #f1f1f1 !important;


   
  &--label{
   
  font-size:20px;
  font-weight:bold;
  }

  &--input{
    border-radius: 20px;
  }

  &--button{
    border-radius: 25px;
    color: white;
    background: black;
    height: 48px;
    font-weight: bold;
  }
    
    
}

.maintenance--error{
    margin: 0 auto;
		text-align: center;
		background-color: #ffffff;
		border-radius: 4px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
		width: 570px;
		min-height: 328px;
		padding: 55px;
}



</style>