<template>
  <div class="pastilla">
  <div class="container mt-5">
    <div class="row">
      <div v-for="item in pastillasFiltradas" :key="item.titulo" class="col-md-4">
        <div class="card transparent-card text-center rounded-circle p-5" style="background-color: #ab85ce;">
          <img :src="item.img" :alt="item.titulo" class="card-img-top rounded-circle mx-auto d-block" style="width: 200px; height: 200px;">
          <h3 class="card-title" style="font-size: 22px; color: white;">{{ item.titulo }}</h3>
          <p class="card-text mb-1" style="font-size: 15px; color: white;">{{ item.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      pastillas: [
        {
          titulo: " Tiempo y Paciencia",
          descripcion: "Da tiempo a que los sabores se mezclen cocinando a fuego lento; la paciencia mejora el resultado.",
          img: "img/pastilla1.png",
          clase: true,
        }, 
        {
                    titulo:"Organización Eficiente" ,
                    descripcion: "Organiza los ingredientes antes de comenzar para agilizar la preparación y evitar olvidos.",
                    img: "img/pastilla2.png",
                    clase: true
                },
                {
                    titulo:"Innovación en Sabores",
                    descripcion:"Experimenta con hierbas y especias para dar un toque único y sorprendente a tus platillos." ,
                    img: "img/pastilla3.png",
                    clase: true
                },
                {
                    titulo:"Tiempo y Paciencia",
                    descripcion: "Da tiempo a que los sabores se mezclen cocinando a fuego lento; la paciencia mejora el resultado.",
                    img: "img/celu.png",
                    clase: false
                }
        
      ],
    };
  },
  computed: {
    pastillasFiltradas() {
      return this.pastillas.filter(item => item.clase);
    },
  },
};
</script>
<style scoped>
.pastilla{
  margin: 20px;
}

</style>