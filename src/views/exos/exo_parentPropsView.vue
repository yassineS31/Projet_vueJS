<template>
  <div >
    <newfriend
    @add-ami="ajouterAmi">
  </newfriend>
    <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
    <PropsOneFriendComp 
    v-for ="unAmi in lesAmis"
    :key="unAmi.id"
    :id="unAmi.id"
    :unAmiName="unAmi.name"
    :unAmiPhone="unAmi.phone"
    :unAmiMail="unAmi.email"
    :unAmiPremium="unAmi.premium"
    @mon-event-premium="reactionStatus(unAmi.id)"
    @delete-ami="supprimerAmi">
    ></PropsOneFriendComp>

    <!--<PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex" premium=""></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb" premium=""></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com" premium=""></PropsOneFriendComp> -->
  </div>
</template>



<script setup lang='js'>

import { defineAsyncComponent,ref } from 'vue'
const PropsOneFriendComp = defineAsyncComponent(() => import('./exo_oneFriend.vue'))
const newfriend= defineAsyncComponent(() => import ('./exo_newFriend.vue') )


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    }
    
]);

function reactionStatus(leIdDansUnAmi) {
    // alert(`Top délire : J'arrive à réagir dans le parent 
    // à l'event "mon-eventpremium" qui est déclenché par le composant ENFANT `);
    const unAmiIdentified = lesAmis.value.find(unAmiATrouver => unAmiATrouver.id === leIdDansUnAmi);
    console.log('amiIdentified : ', unAmiIdentified);
    unAmiIdentified.premium = !unAmiIdentified.premium;
    console.log('amiIdentified : ', unAmiIdentified);
}

function ajouterAmi(eventName, eventPhone, eventMail) {
    const newAmiContact = {
        id: new Date().toISOString(),
        name: eventName,
        phone: eventPhone,
        email: eventMail,
        premium: false,
    };
    lesAmis.value.push(newAmiContact);
    console.log(lesAmis.value);
}


function supprimerAmi(id){
  const index = lesAmis.value.findIndex((ami) => ami.id === id);

  lesAmis.value.splice(index,1)
  console.log(lesAmis)
}
</script>