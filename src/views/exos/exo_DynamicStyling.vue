<template>
<div v-on:click="click(1)" v-bind:style={backgroundColor:color_init_01,width:widthdiv,height:heightdiv}>Card title</div>
<div v-on:click="click(2)" v-bind:style={backgroundColor:color_init_02,width:widthdiv,height:heightdiv}>Card title</div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
let color_init_01= ref("blue");
let colorstock_01 = ref('')
let colorstock_02 = ref('')
let color_change_01 =ref("red")
let color_change_02=ref("green")
let color_init_02= ref("pink");
let widthdiv=ref('100px')
let heightdiv=ref('50px')
let color= "red"

function click(n){
  if(n==1){
    console.log('click')
    colorstock_01.value= color_init_01.value
    color_init_01.value=color_change_01.value
  }else if(n==2) {
    console.log('click div 2')
    colorstock_02.value= color_init_02.value
    color_init_02.value=color_change_02.value
  }
  color_change_01.value=colorstock_01.value
  color_change_02.value =colorstock_02.value
}

</script>

<style scoped lang="css">
div{
  margin: auto;
}
</style>