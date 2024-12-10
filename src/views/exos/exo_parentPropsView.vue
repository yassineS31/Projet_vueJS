<template>
  <div >
    <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
    <PropsOneFriendComp 
    v-for ="unAmi in lesAmis"
    :key="unAmi.id"
    :id="unAmi.id"
    :unAmiName="unAmi.name"
    :unAmiPhone="unAmi.phone"
    :unAmiMail="unAmi.email"
    :unAmiPremium="unAmi.premium"
    @mon-event-premium="reactionStatus"
    ></PropsOneFriendComp>

    <!--<PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex" premium=""></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb" premium=""></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com" premium=""></PropsOneFriendComp> -->
  </div>
</template>


<script setup lang='js'>
const reactionStatus= ()=>{
  alert('H4CK3D')
}
const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    }
]);

import { defineAsyncComponent,ref } from 'vue'
const PropsOneFriendComp = defineAsyncComponent(() => import('./exo_oneFriend.vue'))
</script>