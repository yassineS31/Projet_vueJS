 <template>
  <h2>v-on + fonction (PB ?)</h2>
  <section id="container-plusmoins" class="d-flex justify-content-center mt-5 my-2">
    <button v-on:click="decrement(1)" type="button" id="decrement" class="btn btn-success text-center ">-</button>
    <p class="mx-3">le nombre est : {{ nombre }}</p>
    <button v-on:click=increment(1) type="button" id="increment" class="btn btn-danger" >+</button>
    <p class="mx-3">{{df}}</p>
    <p class="mx-3">{{ userName }}</p>
  </section>
</template>

<script setup lang='js'>
import { ref,computed } from 'vue'

let nombre=ref(0);

function increment(val){
  nombre.value+=val;
}
function decrement(val){
  nombre.value-=val;
}

let userName = ref('');

const df = computed(function useUserName(){
  console.log('fonction éxécutée')
   if(userName.value ===''){  
    console.log("test")
    userName.value='Mario '

} else { 
  console.log('un autre test')
}
}
)




</script>

<style scoped lang="css">


button{
  height: 30px;
  border-radius: 5px;
}
#container-plusmoins{
  display:flex;
  height: 60px;
}
</style> -


<!-- correction 
 

-->