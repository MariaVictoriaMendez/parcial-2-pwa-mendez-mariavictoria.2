<template>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <img src="img/logo.png" alt="Logo" class="img-fluid mb-4">
        <form @submit.prevent="login" class="bg-light p-4 rounded">
          <div class="mb-3">
            <label for="username" class="form-label">Usuario:</label>
            <input type="text" id="username" v-model="username" class="form-control">
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="password" id="password" v-model="password" class="form-control">
          </div>

          <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLoggedIn: false
      };
    },
    methods: {
      login() {
    // Lógica de inicio de sesión simulada
    if (this.username === 'usuario' && this.password === 'contrasena') {
      this.isLoggedIn = true;
      // Redirigir a la página de inicio después del inicio de sesión
      this.$router.push({ name: 'home' });
    } else {
      this.isLoggedIn = true;
      // Redirigir a la página de inicio después del inicio de sesión
      this.$router.push({ name: 'home' });
    }
  }
  }};
  </script>
  