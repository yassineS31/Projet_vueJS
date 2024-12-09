<template>
  <div class="container p-3 my-2 bg-primary-subtle">
      <ul class="list-group">
          <h2 class="list-group-item">{{ unAmiName }} {{ prenium ==="abc" ? statusprenium: statusnonprenium}}</h2>
          <p>
            {{afficherPremiumTest()}}
          </p>
          <button @click="afficherDetails" class="btn btn-outline-dark">
              {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
          </button>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{ unAmiPhone }}</li>
              <li class="list-group-item">{{ unAmiMail }}</li>
          </ul>
      </ul>
  </div>
</template>

<script setup lang='js'>
import { ref,defineProps } from 'vue';
const statusprenium="Amis prenium"
const statusnonprenium="Amis null !"
const props = defineProps({
  unAmiName : {
    type:String,
    Required: true,
  },
  unAmiPhone:{
    type:String,
    Required: true,
  },
  unAmiMail:{
    type:String,
    Required: true,
  },
  prenium:{
    type:String,
    Required: false,
    default:0,
    validator:validatorfunction(value)
  }
});
const detailsVisibles = ref(false);

// method : 

function afficherPremiumTest(){
  props.prenium==="abc" ? props.prenium="xyz":props.prenium="abc" 
}
function validatorfunction(value){
   return value==="abc"   ;
}

function afficherDetails() {
  detailsVisibles.value = !detailsVisibles.value;
}
</script>