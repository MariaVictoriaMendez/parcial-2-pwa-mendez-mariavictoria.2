<template>
  <div class="container">
    <div class="row">
      <div v-for="(receta, index) in recetas" :key="index" class="col-md-4 mb-3">
        <div class="card h-100 d-flex flex-column">
          <img :src="receta.img" :alt="receta.titulo" class="card-img-top">
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ receta.titulo }}</h3>
            <!-- Mostrar instrucciones solo en el modal -->
            <button @click="mostrarModal(receta)" class="ver boton">
              {{ receta.clase === 'nover' ? 'Ver esta receta ❤' : 'No quiero ver esta receta 💔' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->

    
    <div class="modal" :class="{ 'modal-show': recetaSeleccionada !== null }">
      <div class="modal-content">
        <div class="row">
        <span class="cerrar" @click="cerrarModal">&times;</span>
        <h2>{{ recetaSeleccionada ? recetaSeleccionada.titulo : '' }}</h2>
        <p>{{ recetaSeleccionada ? recetaSeleccionada.instrucciones : '' }}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recetas: [],
      recetaSeleccionada: null, // Guardar la receta seleccionada para mostrar en el modal
    };
  },
  mounted() {
    this.obtenerRecetas();
  },
  methods: {
    async obtenerRecetas() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        this.recetas = response.data.meals.map((receta) => ({
          titulo: receta.strMeal,
          img: receta.strMealThumb,
          instrucciones: receta.strInstructions,
          categoria: receta.strCategory,
          area: receta.strArea,
          clase: 'nover',
        }));
      } catch (error) {
        console.error('Error al obtener recetas:', error);
      }
    },
    mostrarModal(receta) {
      this.recetaSeleccionada = receta;
    },
    cerrarModal() {
      this.recetaSeleccionada = null;
    },
  },
};
</script>

<style scoped>
/* Agregar estilos para el modal */
.modal {
  display: none; /* Ocultar el modal por defecto */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.modal-show {
  display: flex; /* Mostrar el modal cuando se activa */
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
}

.cerrar {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.cerrar:hover {
  color: black;
}
</style>
