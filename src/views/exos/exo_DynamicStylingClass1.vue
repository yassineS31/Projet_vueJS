<!-- <template>
  <div v-on:click="clicked(1)" v-bind:class ="{class01:true,class02:false}">Card title</div>
  <div v-on:click="clicked(2)" v-bind:class="{class03:false,class04:true}">Card title</div>

  </template>

<script setup lang='js'>
import {ref } from 'vue'

let class01 = ref(false);
let class02 = ref(false);
function clicked(n){
  console.log('test')
  if(n == 1){
    class01=!class01;
    console.log(class02.value)
    class02.value=! class02.value;
    console.log(class02.value)
  }else if (n==2){
    console.log('test2')

  }
}

</script>

<style scoped lang="css">
.class01{
  background-color: brown;
}
.class02{
  background-color: rgb(106, 55, 202);
}
.class03{
  background-color: rgb(10, 104, 38);
}
.class04{
  background-color: rgb(14, 47, 139);
}
</style> -->

<template>
  <h3 class="text-center">Dynamic Styling (Class) Mode  : Composition</h3>

 <div class="container">
  <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
    <div class="col">
          <div
            class="card"@click="selectionCard(1)":class="{class1: selectCard1}">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            @click="selectionCard(2)"
            :class="{'class2': selectCard2}"
          >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);

function selectionCard(uneCard) {
  if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
  }
  if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
  }
}

</script>

<style scoped lang="css">
        .class1 {
        background-color: mediumslateblue;
        font-style: italic;
        }
        .class2 {
        background-color: rgb(19, 131, 97);
        font-size: large;
        }
</style>