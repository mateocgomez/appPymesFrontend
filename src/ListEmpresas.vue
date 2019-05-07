<template>
    <div>
    <h1 id="empresas-title">{{registro}}</h1>
       <ul id="empresas-list" v-if="empresas != null" >
          <li v-for="empresa in empresas" >
            <strong>Nombre de la empresa: </strong><p>{{empresa.razon_social}}</p>
            <strong>Nombre de contacto: </strong><p>{{empresa.nombre_contacto}}</p>
          </li>
       </ul>
       <span v-else>Cargando empresas.....</span>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'listado',
  mounted() {
    this.getEmpresas();
    
  },
  data () {
    return {
      registro: 'Listado de empresas',
      empresas: null
    }
  },
  methods: {
    getEmpresas(){
      axios.get('http://localhost:3002/pyme')
        .then((res) =>{
        this.empresas = res.data.pymes;
         console.log(this.empresas)
      });
      
    }
   
  },  
}
</script>

<style lang="scss">
    #empresas{
      &-title{
          color: #42b983;
          text-align: center;
          font-size: 43px;
        }

        &-list{
        padding: 5px;
        li{
          margin-top: 10px;
          width: 30%;
          height: 120px;
          border: 1px solid #ddd;
          background: #eee;
          padding: 20px;
          overflow: hidden;
        }

        
    }
    }
    

    
</style>