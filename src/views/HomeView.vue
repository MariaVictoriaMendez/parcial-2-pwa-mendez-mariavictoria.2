<template>
  <div class="home">
    <h2 class="animate__animated animate__backInDown">Tips para hacer las mejores recetas:</h2>
    <PastillasInfo />
    <DetallesComponent />
    
    <!-- Botón para descargar la API -->
    <button @click="descargarAPI" class="btn btn-primary">Descargar API</button>
  </div>
</template>

<script>
// @ is an alias to /src
import DetallesComponent from '@/components/DetallesComponent.vue'
import PastillasInfo from '@/components/PastillasInfo.vue';

export default {
  name: 'HomeView',
  components: {
    DetallesComponent,
    PastillasInfo
  },
  data() {
    return {
      instalacionPendiente: true,
      eventoDeInstalacion: null,
    };
  },
  methods: {
    instalarAplicacion() {
      if (this.eventoDeInstalacion != null) {
        this.eventoDeInstalacion.prompt()
          .then(({ outcome }) => {
            if (outcome === "accepted") {
              this.instalacionPendiente = false;
            } else {
              console.log("No se instaló");
            }
          });
      } else {
        console.log("No se puede instalar");
      }
    },
    descargarAPI() {
      // Llama a la función instalarAplicacion cuando se hace clic en el botón
      this.instalarAplicacion();
    },
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (event) => {
      this.eventoDeInstalacion = event;
      this.instalacionPendiente = true;
    });

    if (this.eventoDeInstalacion == null) {
      this.instalacionPendiente = false;
    } else {
      // Código adicional dentro del bloque mounted si es necesario
    }
  },
};
</script>
