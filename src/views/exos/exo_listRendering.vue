<template>
  <div>
    <h3>List Rendering</h3>
    <h4>WatchList (Film à voir)</h4>
    <label for="input01"> Ajouter films : </label>
    <input type="text" name="input01" v-model="unfilm">

    <ul class="list-group">
      <li 
        v-for="(film,unIndex) in films" :key="films.value">
        {{unIndex}} - {{film}}
      </li>
    </ul>
    <p v-if="films.length === 0" class="mt-3 alert alert-warning">
      Aucune film dans votre watchlist.
    </p>
    <button class="btn btn-primary mt-3" @click="addFilm">Ajouter à votre liste</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const films = ref([]);
const unfilm = ref('');

function addFilm() {
  films.value.push(unfilm.value);
  unfilm.value=''
}
</script>
