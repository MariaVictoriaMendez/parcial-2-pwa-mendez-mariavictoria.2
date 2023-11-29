<template>
  <div class="home">
    <h2 class="animate__animated animate__backInDown">Tips para hacer las mejores recetas:</h2>
       <PastillasInfo/>
       <DetallesComponent/>
    <!--componente-->
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
}
}
</script>
