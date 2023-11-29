<template>
  <div class="container">
    <div class="">
      <h2 v-show="local.length > 0">Deliciosas Aventuras en la Cocina: Explora, Cocina y Disfruta con Nuestras Irresistibles Recetas</h2>

      <div class="row">
        <div class="col-md-4" v-for="item in local" :key="item.fecha">
          <div class="card d-flex flex-column">
            <img src="img/form.jpg" class="card-img-top" alt="Imagen de comida">
            <h3 class="card-title"><span>{{ item.title }}</span></h3>
            <p class="card-text mb-auto"><span>Descripcion: {{ item.descripcion }}</span></p>
            <p class="card-text mb-auto"><span>Tipo de receta: </span>
              <span class="normal" v-for="(x, index) in item.selected" :key="index">{{ x }}</span>
            </p>
            

            <p><span>¿Has hecho esta receta ntes? </span>
              <span v-if="item.seenBefore">Sí</span>
<span v-else>No, es la primera vez</span>
            </p>

            <div class="center">
              <button class="borrar boton" @click="borrar(item)">Borrar</button>
            </div>
          </div>
        </div>
      </div>

      <p>{{ sin_datos }}</p>
    </div>
  </div>
</template>



<script>
export default {
  name: 'VerView',
  data:function(){
      return {
        local:[],
        sin_datos: ""
      }
  },


      
mounted:function(){
    console.log("se monto")
    this.ver_local();
  },

  
  methods:{
   
  
    ver_local: function () {
    // Obtener datos existentes de la caché
    if (localStorage.dato) {
      this.local = JSON.parse(localStorage.getItem("dato"));
    }

    if (this.local.length === 0) {
      this.sin_datos = "Carga todas las recetas que quieras hacer! ❤";
    }
  },    borrar:function(item){
              
      this.local= JSON.parse(localStorage.getItem ("dato"))

  for (var i=0; i < this.local.length; i++){
  
      if (this.local[i].fecha == item.fecha ) {
          var rta=confirm("Estas seguro que queres borrar " + this.local[i].titulo +"?" )
            if (rta==true){
              this.local.splice(i, 1);
            }
          
            
          }
      }
  

    localStorage.setItem("dato", JSON.stringify(this.local))

    this.ver_local(); 
    }
}
}
</script>

<style scoped>
  .boton {
    display: inline-block;
    width: calc(50% - 5px); /* Calcula el 50% del ancho con un margen de 5px entre ellos */
    padding: 10px;
    margin: 5px;
    color: white;
    background-color: #9400D3;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-size: 20px; /* Tamaño de texto de 12px */
  }
  
  .borrar {
    background-color: #dc3545;
  }
  
  .boton:hover {
    background-color: #bdc7c0;
    
  }
  p{
    font-size: 20px;
  }
  

</style>
