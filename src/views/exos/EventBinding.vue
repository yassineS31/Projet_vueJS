<template>
  <section id="container-plusmoins" class="d-flex justify-content-center mt-5 my-2">
    <button v-on:click="decrement(1)" type="button" id="decrement" class="btn btn-success text-center ">-</button>
    <p class="mx-3">le nombre est : {{ nombre }}</p>
    <button v-on:click=increment(1) type="button" id="increment" class="btn btn-danger" >+</button>
    <input v-on:input="capterInput($event)" type="text" >

    <h3 class="mx-3">{{uneString}}</h3>
  </section>
</template>

<script setup lang='js'>
import { ref } from 'vue'

let nombre=ref(0);

function increment(val){
  nombre.value+=val;
}
function decrement(val){
  nombre.value-=val;
}


const uneString = ref('Hello');

function capterInput(event) {
  console.log(event);

  uneString.value = event.target.value;
}

</script>

<style scoped lang="css">
input{
  height: 30px !important;
}
button{
  height: 30px;
  border-radius: 5px;
}
#container-plusmoins{
  display:flex;
  height: 60px;
}
</style>



<!-- correction 
 
<template>
  <h5>Event Binding Mode : Composition</h5>
  <div class="d-flex justify-content-center align-items-center my-2">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button v-on:click="reduire(44)" type="button" class="btn btn-danger">-</button>
      <h3 class="mx-3">le nombre : {{ leNombre }}</h3>
      <button v-on:click="augmenter(10)" type="button" class="btn btn-success">+</button>
    </div>
  </div>
  </template>

<script setup lang='js'>
import { ref } from 'vue'

const leNombre = ref(0);

function reduire(val) {
  leNombre.value -= val;
}

function augmenter(val) {
  leNombre.value += val;
}
</script>

-->