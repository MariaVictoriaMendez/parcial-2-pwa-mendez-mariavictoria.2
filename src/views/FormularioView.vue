<template>
  <div class="container">
    <div class="form">

    <form class="animate__animated animate__bounceIn" @submit.prevent="guardarPelicula(form_data)">
      <div class="form-group">
        <label>Título:</label>
        <input type="text" v-model.trim="form_data.title" placeholder="Titulo" required />
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea class="form-control" id="descripcion" v-model="form_data.descripcion" rows="4"></textarea>
      </div>

      <div class="form-group">
          <label>¿Has visto esta película antes?</label>
          <div class="form-check">
            <input type="radio" id="seen" value="true" v-model="form_data.seleccionado" class="form-check-input">
            <label for="seen" class="form-check-label">Sí, la he visto</label>
          </div>
          <div class="form-check mt-2">
            <input type="radio" id="notSeen" value="false" v-model="form_data.seleccionado" class="form-check-input">
            <label for="notSeen" class="form-check-label">No, es la primera vez</label>
          </div>
        </div>

      <div class="form-group">
        <label for="selec">Seleccionar géneros:</label>
        <select v-model="form_data.selected" multiple required id="selec">
          <option>Terror</option>
          <option>Animación</option>
          <option>Ciencia Ficción</option>
          <option>Drama</option>
          <option>Otro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="estreno">Estreno:</label>
        <input v-model="form_data.estreno" type="number" required>
      </div>

      <button type="submit" class="btn btn-primary mb-4">Agregar Película</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioView',
  data() {
    return {
      form_data: {
        title: '',
        descripcion: '',
        seenBefore: false,
        selected: [],
        estreno: '',
      },
    };
  },
  methods: {
    guardarPelicula(form_data) {
      // Agregar la fecha directamente al formulario
      form_data.fecha = new Date().getTime();
      console.log(form_data);

      // Obtener datos existentes de la caché
      let cachedData = JSON.parse(localStorage.getItem("dato")) || [];

      // Agregar el nuevo dato a la lista
      cachedData.push(form_data);

      // Guardar en la caché
      localStorage.setItem("dato", JSON.stringify(cachedData));

      this.$router.push('/lista');
    },
  },
};
</script>
<style>

.form {
  width: 950px;
  background: #c29ed1;
  font-family: 'verdana', sans-serif;
  font-size: 20px;
  text-shadow: 2px 3px 5px grey;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-bottom: 20px;
}

.form h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  width: 100%;
  margin-bottom : 20px;
}

label,
input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  display: block;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

input[type="text"] {
  color: grey;
}

button {
  width: 100%;
  display: block;
  padding: 10px;
  margin: 30px 0;
  background: white;
  font-family: 'verdana', sans-serif;
  font-size: 18px;
  text-align: center;
  color: green;
  border: solid 1px grey;
  border-radius: 5px;
  cursor: pointer;
}

select {
  width: 100%;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

select option:checked {
  color: #9400d3;
  background: grey;
}
.center {
  text-align: center;
}
</style>