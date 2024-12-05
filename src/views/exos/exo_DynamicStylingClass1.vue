<template>
  <div v-on:click ="clicked(1)" :style="{backgroundColor: class01 ? 'blue':'red' }">Card title</div>
  <div  v-on:click="clicked(2)" :style="{backgroundColor: class02 ? 'violet':'green' }">Card title</div>

  </template>

<script setup lang='js'>
import {ref } from 'vue'

let class01 = ref(true);
let class02 = ref(false);
function clicked(n){
  if(n == 1){
    class01.value=!class01.value;
  }else if (n==2){
    class02.value= !class02.value;
  }
}

</script>

<style scoped lang="css">

</style>