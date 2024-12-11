<template>

  <div class="container my-1">
      <ul class="list-group">
          <h2 class="list-group-item">{{unAmiName}} {{premiumData ? '(Ami premium)':'(Ami nul)'}}</h2> 
          <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="afficherDetails" type="button" class="m-1 btn btn-outline-secondary">👁 {{detailsVisibles? 'Masquer': 'Afficher'}} Détails</button>
              <button @click="afficherPremium"  type="button" class=" m-1 btn btn-outline-success">⭐️ Premium</button>
              <button @click="supprimerAmi" type="button" class=" m-1 btn btn-outline-danger">🗑 Suppr.</button>
          </div>
          <ul v-if="detailsVisibles" class="list-group">
              <li class="list-group-item">{{unAmiPhone}}</li>
              <li class="list-group-item">{{unAmiMail}}</li>
          </ul>
      </ul>
  </div> 

</template>

<script setup lang='js'>
import { ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
  unAmiName: {
      type: String,
      required: true
  },
  unAmiPhone: {
      type: String,
      required: true
  },
  unAmiMail: {
      type: String,
      required: true
  },
  premium:{
    type:Boolean,
    Required: false,
    default:false,
      // validator: function(value){return value==='abc' || value==='xyz'}
  },
  id:{
    type:String,
    Required:true,
  }

});

const detailsVisibles = ref(false);
const premiumData = ref(props.premium);

const emit = defineEmits({
  'mon-event-premium':(param)=>{
    if(param){
      console.log("true")
      return true
    }else{
      console.error("Absence d'id (false)")
      console.warn(`ça sent pas bon toussa`)
      return false
    }
  },
  'delete-ami':(param)=>{
    if(param){
      console.log("true")
      return true
    }else{
      console.error("Absence d'id (false)")
      console.warn(`ça sent pas bon toussa`)
      return false
    }
  }
}
);

const afficherDetails = () => {
  detailsVisibles.value = !detailsVisibles.value;
};

const afficherPremium = () => {
  premiumData.value = !premiumData.value;
  emit('mon-event-premium');
};

const supprimerAmi=()=>{
 emit('delete-ami',props.id)
}


</script>