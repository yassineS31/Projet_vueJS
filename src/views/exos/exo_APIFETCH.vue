<template>
  <div>
    <h3>Une simple requête HTTP GET</h3>
    <h4>Les Pokémon:</h4>
  </div>
</template>

<script setup lang='js'>
import { onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});



function fetchJokes() {
  try {
    const response =  fetch('https://jokes-api-by-api-ninja.p.rapidapi.com/v1/jokes');
    const jokes =  response.json();
  } catch (error) {
    console.error(error);
  }
}

function apiPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon/')
}


function apiMeteo(){
fetch(' https://prevision-meteo.ch/services/json/toulouse')
}


onMounted(() => {
  apiPokemon()
  apiMeteo()
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});

</script>

<style scoped lang="css">
</style>