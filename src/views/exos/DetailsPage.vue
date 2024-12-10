<template>
  <div class="d-flex flex-column align-items-center mt-5">
    <h1 class="mt-4">Page détails</h1>
    <div  class="card mt-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID :{{id}} </h6>
        <p class="card-text">Ceci est une page de détail pour l'élément avec l'identifiant <strong>{{ id }}</strong>.</p>
        
        <router-link to="/test-lesson-router">
          <button class="btn btn-primary ">Retour page principale</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>

import { RouterLink } from 'vue-router';

// Récupération des props depuis la route

const props = defineProps(['id','itemName']);

</script>

<style scoped lang="css">

</style>