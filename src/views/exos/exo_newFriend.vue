<template>
  <div class="container ">
    <form  @submit.prevent="submitData">
 <div class="mb-3">
  <label for="" class="form-label">Input 1</label>
  <input 
    v-model="enteredName"
    type="text"
    class="form-control"
    name="Input 1"
    id="in1"
    aria-describedby="emailHelpId"
    placeholder="abc@mail.com"
  />
 </div>
 <div class="mb-3">
  <label for="" class="form-label">Input 2</label>
  <input
    v-model="enteredPhone"
    type="text"
    class="form-control"
    name="Input 2"
    id="in2"
    aria-describedby="emailHelpId"
    placeholder="abc@mail.com"
  />

 </div>
 <div class="mb-3">
  <label for="" class="form-label">Input 3</label>
  <input
    v-model="enteredMail"
    type="text"
    class="form-control"
    name="Input 3"
    id="in3"
    aria-describedby="emailHelpId"
    placeholder="abc@mail.com"
  />
  
 </div>
 <button  @submit.prevent="submitData" class="btn btn-primary">Envoyer</button>
    </form>
 </div>
</template>

<script setup lang='js'>
import {ref,defineEmits } from 'vue'
let enteredName = ref('')
let enteredPhone = ref('')
let enteredMail = ref('')
const emit = defineEmits(['add-ami']);

const submitData = () => {
  console.log({ enteredName, enteredPhone, enteredMail });
  // Émettre l'événement avec les valeurs entrées
  emit('add-ami', enteredName.value, enteredPhone.value, enteredMail.value);
}

</script>

<style scoped lang="css">
</style>