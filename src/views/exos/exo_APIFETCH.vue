<template>
  <div>
    <h3>Une simple requête HTTP GET</h3>
    <h4>Les Pokémon:</h4>
    <p v-for="pokemon in pokeArray"
    :key="pokemon.name">{{ pokemon.name }}</p>
    <h5>Méteo Toulouse</h5>
    <p>Température min : {{ tmin }}°C</p>
    <p>Température max : {{ tmax }}°C</p>
    <p>Température actuelle : {{ tcurrent }}°C</p>
    <p>Condition méteo : {{ condition }}</p>
  </div>
</template>

<script setup lang='js'>
import { onMounted, onUpdated, onBeforeUnmount,ref } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});


let pokeArray =ref([])
let meteoArray =ref([])
let tmax=ref(null)
let tmin=ref(null)
let tcurrent=ref(null)
let condition=ref(null)

const fetchPokemon = async() => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(data => {
      pokeArray.value = data.results;
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des Pokémon :", error);
    });
};

const fetchMeteo = async () => {
  try {
    const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
    const data = await response.json();
    tmax.value = data.fcst_day_0.tmax;
    tmin.value = data.fcst_day_0.tmin;
    tcurrent.value = data.current_condition.tmp;
    condition.value = data.current_condition.condition;
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo :", error);
  }
};



onMounted(() => {
  console.log('A ce moment le composant est monté.');
  fetchMeteo();
  fetchPokemon();
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  console.log("Le composant est sur le point d'être démonté.");
});

</script>

<style scoped lang="css">
h5,h4 {
  font-weight: 500;
  color: rgb(89, 72, 161);
}
</style>