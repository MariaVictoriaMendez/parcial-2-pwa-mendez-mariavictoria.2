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
          titulo: "Ambientación perfecta",
          descripcion: "Asegúrate de tener una habitación oscura, usa cortinas opacas y luces tenues para recrear el ambiente del cine en casa.",
          img: "img/pastilla1.png",
          clase: true,
        }, 
        {
                    titulo:"Sonido envolvente" ,
                    descripcion: "Utiliza un sistema de sonido de calidad. Si es posible, opta por un sistema surround para que el audio te envuelva por completo.",
                    img: "img/pastilla2.png",
                    clase: true
                },
                {
                    titulo:"Snacks listos",
                    descripcion:"Prepara tus snacks favoritos: palomitas de maíz, nachos o cualquier delicia que te guste para acompañar tu película." ,
                    img: "img/pastilla3.png",
                    clase: true
                },
                {
                    titulo:"Evita distracciones del celu",
                    descripcion: "Pone el celular en modo avion, así podes aprovechar y disfrutar la pelicula como corresponde sin distracciones",
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