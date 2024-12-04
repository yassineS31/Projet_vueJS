<template>
<div class="card my-4 mx-auto" style="width: 18rem;">
  <img v-bind:src=photo class="card-img-top" alt="Photo de Pietro Savastano">
  <div class="card-body">
    <h5 v-html="nom" class="card-title"></h5>
    <input type="text" v-bind:placeholder=nom>
    <p  class="card-text">{{ Printage }}</p>
    <p  class="card-text">{{ age10 }}</p>
    <p  class="card-text">{{ Fetiche }}</p>
  </div>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
// L'image :
const photo = ref("https://thispersondoesnotexist.com/")
// Le nom :
const nom = ref('Pietro Savastano')
// L'age initial
const ageInitial =45
// Affichage de l'age + string 'ans'
const Printage = ref(`${ageInitial} ans`)
// Age +10 
const age10 = ref(` age +10 : ${ageInitial+10} ans`)
// fonction qui génére le numéro fétiche :
function random(){
  return Math.random();
}
// Texte + retour de l' afonction random()
let Fetiche =`NB Fetiche `+ random()
</script>

<style scoped lang="css">
.card{
 height: auto !important;
}
</style>