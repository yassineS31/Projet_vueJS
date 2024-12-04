<template>
<h3>Text Interpolation Mode : Composition </h3>
 <div id="container-composition-mode">
  <p>{{ TitreLivre }}</p>
  <p>{{ !booleanTest }}</p>
  <p>{{ numb }}</p>
  <p>{{ContenuTab}}</p>
  <p>du texte</p>
  <p>{{ Objectj }}</p>
  <p>{{ Objectj.name }}</p>
  <p>{{ Objectj.name }}</p>

</div> 
</template>

<script setup lang='js'>
import { ref } from 'vue';

import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'


const TitreLivre= ref('Les mémoires de Steven Seagal');
let booleanTest=true;
const numb = 1234567890;
let ContenuTab = ['du texte',99];
let Objectj = ref({
  name :'COOL',
  tel: '060503030'
})


const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">

</style>