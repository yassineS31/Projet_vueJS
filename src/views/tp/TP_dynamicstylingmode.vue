<template>
  <h1>TP: Dynamic Styling</h1>

<input  @keyup="selectionClass($event)":class="{'maClasseHello': classHello,'maClasseWorld':classWorld}" type="text">
<p>{{ Titre }}</p>

<input  v-model="color":style='{backgroundColor:color}' type="text">
<p>{{ color }}</p>

<button v-on:click="afficherTitre()" type="button" class="btn btn-success">Afficher le Titre</button>
</template>

<script setup lang='js'>
import {ref, watch } from 'vue'
let Titre = ref('')


const classHello = ref(false);
const classWorld = ref(true);
let color = ref('');

function selectionClass(event) {
  Titre.value = event.target.value;
  watch(Titre,(writed)=>{
    if(writed =="Hello"){
    console.log("Hello à été tapé par l'utilisateur. Activation de la classe Hello")
    classHello.value = true;
    }else if (writed=="World"){
      console.log("World à été tapé par l'utilisateur. Activation de la classe World")
      classHello.value = false;
      classWorld.value=true;
    }
  })
};


function selectionColor(event){
  color.value = event.target.value;
  watch(color,(writed)=>{
    if(writed=='blue'){
      console.log("blue à été tapé par l'utilisateur. Activation de la couleur bleu")
      color="blue"
    } else if(writed=="black"){
      color="black"
    }else if(writed=="red"){
      color="red"
    }else if(writed=="pink"){
      color="pink"
    }else if(writed=="green"){
      color="green"
    }else if(writed=="white"){
      color="white"
    }else if(writed=="indigo"){
      color="indigo"
    }
  })
}



</script>

<style scoped lang="css">
        .maClasseHello {
        background-color: mediumslateblue;
        font-style: italic;
        }
        .maclasseWorld {
        background-color: rgb(19, 131, 97);
        font-size: large;
        }
</style>