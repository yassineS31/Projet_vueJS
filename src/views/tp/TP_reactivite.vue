<template>
    <button v-on:click="increment(1)" type="button" id="icrement" class="btn btn-success text-center ">+ 1</button>
    <button v-on:click=increment(5) type="button" id="increment" class="btn btn-danger" >+ 5</button>
    <p>le nombre est : {{ nombre }}</p>
    <p>{{ message }}</p>

</template>

<script setup lang='js'>
import {ref,watch } from 'vue'
let nombre =ref(0)
let message = ref('')
function increment(val){
  nombre.value+=val;
}

watch(nombre,(newvalue)=>{
  if(newvalue <7 ){
    message="ESSAIE ENCORE !"
  }else if(newvalue== 7){
    message=" Tu as trouvé le nombre mystère"
  } else if(newvalue >7){ 
    message="Tu as dépassé le nombre mystère"
  }
})



watch(nombre,(newvalue)=>{
 if(newvalue>30){
      setTimeout(() => {
        nombre.value=0;
  }, 3000);
 }


})
</script>

<style scoped lang="css">
</style>