<template>
  <div>{{ myfunction(randomNumber) }}</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

let randomNumber = ref(Math.random());
myfunction(randomNumber);
function myfunction(rn){
  if(rn>0.5){
    return "Le livre de Philippe Etchebest";
  }else{
    return "Ceci est une chaîne de caractère de type STRINGOOO"
  }
}

</script>

<style scoped lang="css">
</style>