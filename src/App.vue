<template>
  <div id="app" v-cloak>
    <nav id="nav" class="violet-background">
      <div class="navbar">
        <a class="navbar-brand text-white text-center" href="#">Parcial 2 - Mendez, María Victoria - PWA</a>
      </div>
      <ul>
        <li><router-link to="/">Peliculas</router-link></li>
        <li><router-link to="/formulario">formulario</router-link></li>
        <li><router-link to="/lista">lista</router-link></li>
      </ul>
    </nav>
<img src="img/banner.jpg" alt="Banner de Disney" class="img-fluid mb-4">
    <header class="my-4">
      <h1 class="animate__animated animate__backInDown" id="peliculas">Películas de Disney</h1>
    </header>

    <router-view/>
 <footer class="violet-background">
        <ul>
            <li><details>
                <summary><span>&copy; Copyright 2023</span></summary>
                <div>
                    <p class="text-white">Todos los derechos reservados a María Victoria Méndez, alumna de la carrera de Diseño y Programación Web de la Escuela Da Vinci.</p>
                </div>
                </details></li>
        </ul>
    </footer>
   
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #FFEEEE;  
    background: -webkit-linear-gradient(to right, #9b8ed6, #FFEEEE);  
    background: linear-gradient(to right, #9b8ed6, #FFEEEE); 
    color: #333333;
}





.violet-background {
  background-color: #9400D3;
  width: 100%;
  padding: 10px;
  border: none; 
  margin: 0; 
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #FFEEEE;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: pink;
  color: white;
}

ul {
  list-style: none;
  border: none; /* Elimina el borde */
}

ul li {
  display: inline-block;
  padding: 10px;
  margin-left: 10px;
  font-size: 1em;
  color: #FFEEEE;
}

footer {
  margin-bottom: 0px;
  margin-top: 50px;
  font-size: 20px;
  font-style: italic;
  color: #FFEEEE;
  bottom: 0;

}

</style>