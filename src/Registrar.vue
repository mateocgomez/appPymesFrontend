<template>
     <div class="maintenance" >
                <div class="maintenance--error">
                    
                    <h1>{{msg}}</h1>


                  <form v-on:submit.prevent="registerEmpresa">
                  <label class="maintenance--label">NIT: </label>
                    <p>
                    
                    <input  type="number" class="maintenance--input" v-model="empresa.nit">
                    </p>
                    
                       <label class="maintenance--label">Contraseña: </label>
                    <p>
                   
                    <input type="password" value="1234" class="maintenance--input" v-model="empresa.contraseña">
                    </p>
                    
                    <label class="maintenance--label">Nombre Contacto: </label>
                    <p>
                    
                    <input  type="text" class="maintenance--input" v-model="empresa.nombre_contacto">
                    </p>
                    

                     <label class="maintenance--label">Nombre compañia </label>
                    <p>
                    
                    <input  type="text" class="maintenance--input" v-model="empresa.razon_social">
                    </p>
    

                    <input type="checkbox" name="vehicle1" v-model="empresa.mayorista" value="Bike"> <strong>Mayorista?</strong><br>

                    <br>

                    <label class="maintenance--label">Pagina web: </label>
                    <p>
                    
                    <input  type="text" class="maintenance--input" v-model="empresa.pagina_web">
                    </p>
                   



                   <input type="submit" value="Registrar" class="maintenance--button">
                    </input>
                    
                    </form>
                    

                    <p>Si ya tiene un usuario <router-link to="/">Ingresa AQUÍ</router-link> </p>
                </div>
            </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'register',

  mounted() {
   
  },

  data () {
    return {
      msg: 'Registrate!',
      empresa:{
        nit: '',
        contraseña: '1234',
        nombre_contacto: '',
        mayorista: 'false',
        pagina_web: '',
        razon_social: ''
      }
    }
  },
  methods:{
    registerEmpresa(){

      var router = this.$router;
      
      
      axios.post('http://localhost:3002/pyme/create',this.empresa)
        .then((res)=>{
            if(res.data.mensaje == 'pyme creada con exito'){
              console.log(res);
              router.push('/');
            }
        })
        .catch((err) =>{
          console.log(err);
        });
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