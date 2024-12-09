<template>
  <div>
    <h3>List Rendering</h3>
    <h4>WatchList (Film à voir)</h4>
    <label for="input01"> Ajouter films : </label>
    <input type="text" name="input01" v-model="unfilm">
    <button class="btn btn-primary bg-success mt-3" @click="addFilm">Ajouter à votre liste</button>

    <ul class="list-group">
      <li v-bind:class="[isActive ? activeClass:'activeClass' ]"
        v-for="(film,unIndex) in films" :key="films.value" @click="supprimerFilm(index)">
        {{unIndex}} - {{film}}
      </li>
    </ul>
    <p v-if="films.length === 0" class="mt-3 alert alert-warning">
      Aucune film dans votre watchlist.
    </p>
    <button class="btn btn-primary bg-danger mt-3" @click="maskList" >{{ message }}</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';

let films = ref([]);
const unfilm = ref('');
let activeClass=ref('.activeClass')
let errorClass=ref(false)
let isActive = ref(true);
let message=ref('Masquer la liste')

// Ajouter un élément via l'input + button 'Ajouter à votre liste'
function addFilm() {
  films.value.push(unfilm.value);
  unfilm.value=''
}

// supprimé un éléments lors du  clique dessus :
function supprimerFilm(index){
  films.value.splice(index, 1);
}

// Masquer la liste via bouton Afficher liste/Masquer liste
function maskList() {

  if(message.value ==="Masquer la liste"){
    console.log('la liste est à présent masqué, cliquer pour afficher à nouveau.')
    isActive=!isActive
    message.value = "Afficher la liste";
  } else if (message.value="Masquer la liste") {
    console.log('la liste est à présent affiché, cliquer pour cacher à nouveau.')

    message.value = "Masquer la liste";
    isActive=!isActive
  }

}
</script>

<style>
.activeClass{
  visibility:hidden
}

.errorClass{
  visibility: visible;
}
</style>