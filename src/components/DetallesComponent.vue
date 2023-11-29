 <div class="detalles">
      <ol reversed>

        <li v-for="item in pelis" :key="item.id">{{item.titulo}}
          <router-link :to="'/editar/' + item.title + '/' + item.descripcion + '/' + item.selected + '/' + item.estreno + '/' + item.fecha"
  class="editar boton" > Ver Detalle </router-link>
        </li>
      </ol> 
  </div><template>

        


  <div class="container">
    <div class="row">
      <div v-for="(item, index) in peliculas" :key="index" class="col-md-4 mb-3">
        <div class="card h-100 d-flex flex-column">
          <img :src="item.img" :alt="item.titulo" class="card-img-top">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ item.titulo | capitalize }}</h3>
            <p class="card-text mb-auto">{{ item.descripcion }}</p>
            <p class="card-text mb-auto"><strong>Año: {{ item.anio }}</strong></p>

            <button :class="item.clase" @click="cambiarClase(index)">
              {{ item.clase == 'nover' ? 'Ver esta película ❤' : 'No quiero ver esta película 💔' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      peliculas: [
        {
                titulo : "hercules",
                img : "img/hercules.jpg",
                descripcion : "Un legendario hombre, dotado de una fuerza descomunal, combate contra el malvado Hades mientras lucha por tomar su lugar entre los dioses. Fue el propio Hades quien, siendo él niño, lo secuestró de entre los dioses y lo envío al mundo de los mortales, privándole de sus derechos. Ahora que es adolescente, peleará por volver a estar entre los suyos.",
                anio: 1997,
                clase: 'nover'
            },
            {
                titulo: "Aladin",
                img: "img/aladin.jpg",
                descripcion: "Aladdin es un adorable pilluelo que conoce a la princesa Jasmine y a un genio poderoso, bromista y grandioso. Después de hacerse amigos, el trío pronto debe unir fuerzas para evitar que el malvado hechicero Jafar se haga cargo del reino de Jasmine..",
                anio: 1992,
                clase: 'nover'
            },
            {
                titulo : "101 Dalmatas",
                img: "img/101.jpg",
                descripcion : "Una pareja de dálmatas, Pongo y Perdita, tienen hermosos cachorros después de casarse e independizarse gracias a sus dueños Anita y Roger. Pero la malvada Cruella De Vil, amiga de Anita, los quiere comprar, al no permitírselo manda a dos matones para que los secuestren.",
                anio: 1961,
                clase: 'nover'
            },
            {
                titulo : "Lilo y Stich",
                img : "img/lilo.jpg",
                descripcion : "Lilo es una niña hawaiana que se siente sola y decide adoptar un perro muy feo al que llama Stitch. Este sería la mascota perfecta si no fuera en realidad un experimento genético que ha escapado de un planeta alienígena y que ha llegado a la Tierra por casualidad.",
                anio:2002,
                clase: 'nover'
            },
            {
                titulo : "Mary Poppins",
                img : "img/mary_poppins.jpg",
                descripcion : "La vida de dos niños rebeldes que pretenden llamar la atención de sus padres haciendo la vida imposible a todas las niñeras, se verá alterada con la llegada de Mary Poppins, una institutriz que baja de las nubes usando su paraguas como paracaídas.",
                anio: 1964,
                clase: 'nover'
            },
            {

                titulo : "Peter Pan",
                img : "img/peter_pan.jpg",
                descripcion : "Peter y Campanita llevan a tres niños al país de Nunca Jamás para ver a los niños perdidos, a los indios, al capitán Garfio y a sus piratas", 
                anio:2003  ,
                clase: 'nover'       
            },
            {

                titulo : "El rey leon",
                img : "img/leon.jpg",
                descripcion : "Tras la muerte de su padre, Simba deberá enfrentarse a su tío para recuperar el trono de Rey de la Selva. Timón y Pumba le acompañarán en su misión.", 
                anio:2001  ,
                clase: 'nover'       
            },
            {

                titulo : "Alicia en el pais de las maravillas",
                img : "img/alicia.jpg",
                descripcion : "La historia cuenta cómo una niña llamada Alicia cae por un agujero, encontrándose en un mundo peculiar y extraño, poblado por humanos y criaturas antropomórficas.", 
                anio:1998  ,
                clase: 'nover'       
            },
            {

                titulo : "Los inbreibles",
                img : "img/increibles.jpg",
                descripcion : "Un súper héroe retirado lucha contra el aburrimiento en un suburbio y junto con su familia tiene la oportunidad de salvar al mundo.", 
                anio:2005  ,
                clase: 'nover'       
            }
      ],
    };
  },
  methods: {
    cambiarClase: function (index) {
      this.peliculas[index].clase = this.peliculas[index].clase === 'nover' ? 'ver' : 'nover';
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};




</script>

<style scoped>



.nover {
    
    color: #FFFFFF;
    background-color:green;
    padding: 10px 20px;  
    border: none;  
    border-radius: 25px;  
    font-size: 16px;  
    cursor: pointer;  
    transition: transform 0.3s, box-shadow 0.3s;  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  
    outline: none; 
}

.ver:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.nover:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
.ver {
  
    color: #fbfbfb; 
 background-color:red;
    padding: 10px 20px;  
    border: none;  
    border-radius: 25px;  
    font-size: 16px;  
    cursor: pointer;  
    transition: transform 0.3s, box-shadow 0.3s;  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  
    outline: none; 
}


.ver:active {
    transform: scale(1);  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  
}



</style>
