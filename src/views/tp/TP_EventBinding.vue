<template>
<div class="container mt-5">
  <input v-on:input="capterInput($event)" type="text">
  <p>{{premierInput}}</p>
  <input v-on:keyup.esc.input="capterInputEsc($event)" type="text">
  <p>{{uneString}}</p>
  <button  v-on:click="createAlert" type="button" class="btn btn-success">Alerte</button>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
const uneString = ref('Hello');
const premierInput = ref('Hello1');

function capterInputEsc(event){
  console.log(event)
  uneString.value= event.target.value
}
function capterInput(event) {
  console.log(event);

  premierInput.value = event.target.value;
}

function createAlert(){
  alert('H4ck3D !')
}
</script>

<style scoped lang="css">
</style>