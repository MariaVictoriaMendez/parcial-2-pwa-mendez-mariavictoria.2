<template>
  <div class="container">
    <div class="form animate__animated animate__bounceIn">
      <form @submit.prevent="guardarReceta">
        <div class="form-group">
          <label>Título:</label>
          <input type="text" v-model.trim="form_data.title" placeholder="Título" required />
        </div>

        <div class="form-group">
          <label>Receta:</label>
          <textarea v-model="form_data.descripcion" rows="4"></textarea>
        </div>

        <div class="form-group">
          <label>¿Has hecho esta receta antes?</label>
          <div class="form-check">
            <input type="radio" id="seen" value="true" v-model="form_data.seenBefore" class="form-check-input">
            <label for="seen" class="form-check-label">Sí</label>
          </div>
          <div class="form-check mt-2">
            <input type="radio" id="notSeen" value="false" v-model="form_data.seenBefore" class="form-check-input">
            <label for="notSeen" class="form-check-label">No, es la primera vez</label>
          </div>
        </div>

        <div class="form-group">
          <label>Seleccionar:</label>
          <select v-model="form_data.selected" multiple required>
            <option>Receta salada</option>
            <option>Receta dulce</option>
            <option>Receta light</option>
            <option>Receta para navidad</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary mb-4">Agregar Receta</button>
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
      },
    };
  },
  methods: {
    guardarReceta() {
      this.form_data.fecha = new Date().getTime();

      let cachedData = JSON.parse(localStorage.getItem("dato")) || [];
      cachedData.push(this.form_data);
      localStorage.setItem("dato", JSON.stringify(cachedData));

      // Construye la cadena de consulta para los parámetros del formulario
      const queryParams = Object.keys(this.form_data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(this.form_data[key]))
        .join('&');

      // Redirige a la vista de lista con los parámetros en la URL
      this.$router.push({ path: '/lista', query: queryParams });
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