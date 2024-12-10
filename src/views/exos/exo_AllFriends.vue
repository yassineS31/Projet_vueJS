<template>
    <PropsOneFriendComp unAmiName="Dr.Azerty" unAmiPhone="098765234" unAmiMail="a@a.aa" prenium=""></PropsOneFriendComp>
</template>

<script setup lang='js'>
import {props,ref } from 'vue'
import { defineAsyncComponent } from 'vue'
const PropsOneFriendComp = defineAsyncComponent(() => import('./exo_oneFriend.vue'))
</script>
<style scoped lang="css">
</style>