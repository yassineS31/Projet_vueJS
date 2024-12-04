
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
	    <div class="container-fluid">
	     <router-link to="/home"><a class="navbar-brand" href="#">Accueil</a></router-link>
	      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="navbar-toggler-icon"></span>
	      </button>
	    
	      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
	        <ul class="navbar-nav ms-auto ">
	          <li class="nav-item">
	            <router-link to="/home"><a class="nav-link mx-2 active" aria-current="page" href="#">Accueil</a></router-link>
	          </li>
	          <li class="nav-item">
	            <router-link to="/lessons-list"><a class="nav-link mx-2" href="#">Leçons</a></router-link>
	          </li>
	          <li class="nav-item">
	            <a class="nav-link mx-2" href="#">Exercices</a>
	          </li>
	          <li class="nav-item dropdown">
	            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	              Company
	            </a>
	            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	              <li><a class="dropdown-item" href="#">Blog</a></li>
	              <li><a class="dropdown-item" href="#">About Us</a></li>
	              <li><a class="dropdown-item" href="#">Contact us</a></li>
	            </ul>
	          </li>
	        </ul>
	      </div>
	    </div>
	    </nav>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
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