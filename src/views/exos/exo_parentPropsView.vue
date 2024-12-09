<template>
  <div >
    <h1 class="text-center">Ici c'est le composant parent ExoPropsView</h1>
    <PropsOneFriendComp unAmiName="Dr.Azerty" unAmiPhone="098765234" unAmiMail="a@a.aa" prenium="abc"></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Cortex22" unAmiPhone="30303003" unAmiMail="cortex@cortex.cortex" prenium="xyz"></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.Qwerty" unAmiPhone="098765234" unAmiMail="b@b.bb" prenium="abc"></PropsOneFriendComp>
    <PropsOneFriendComp unAmiName="Dr.aaaaa" unAmiPhone="5555555" unAmiMail="lol@lol.com" prenium="xyz"></PropsOneFriendComp>
  </div>
</template>


<script setup lang='js'>
import { defineAsyncComponent } from 'vue'
const PropsOneFriendComp = defineAsyncComponent(() => import('./exo_oneFriend.vue'))
</script>