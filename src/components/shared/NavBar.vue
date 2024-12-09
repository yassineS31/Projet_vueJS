
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
	          	<li class="nav-item dropdown">
	            	<a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	              	Leçons
	            	</a>
	            	<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<li><a class="dropdown-item" href="#">Liste des leçons</a></li>
					<li><a class="dropdown-item" href="#">Présentation</a></li>
					<li><a class="dropdown-item" href="#">introduction Vue</a></li>
					<li><a class="dropdown-item" href="#">Setup Vue</a></li>
					<li><a class="dropdown-item" href="#">Installer et utiliser des librairies</a></li>
					<li><a class="dropdown-item" href="#">Text interpolation</a></li>
					<li><a class="dropdown-item" href="#">Methods & Functions</a></li>
					<li><a class="dropdown-item" href="#">Directive V-HTML (inline Templating)</a></li>
					<li><a class="dropdown-item" href="#">Système de composant</a></li>
					<li><a class="dropdown-item" href="#">Conditional Rendering (v-if)</a></li>
					<li><a class="dropdown-item" href="#">Création des composants</a></li>
					<li><a class="dropdown-item" href="#">Comp Comm PROPS</a></li>
					<li><a class="dropdown-item" href="#">Comp Comm Emits</a></li>
					<li><a class="dropdown-item" href="#">Librairies</a></li>
					<li><a class="dropdown-item" href="#">Counter (Pinia)</a></li>
					<li><a class="dropdown-item" href="#">Axios & Pinia</a></li>
					<li><a class="dropdown-item" href="#">Text Editor (Markdown & Pinia)</a></li>
					<li><a class="dropdown-item" href="#">Cypress (testing Framework)</a></li>
					</ul>
				</li>
	          	<li class="nav-item dropdown">
	            	<a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	              	Exercices
	            	</a>
	            	<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<li><a class="dropdown-item" href="#">Liste exercices</a></li>
					<li>
						<router-link class="dropdown-item" to="/EXO_TextInterpolation">Test interpolation</router-link>
					</li>
					<li>
						<router-link class="dropdown-item" to="/Lesson_inline-templating">inline Templating(v-html)

						</router-link>
					</li>
					<li>
						<router-link class="dropdown-item" to="/AttributeBinding">Attribute Binding (v-bind)</router-link>
					</li>
					<li><a class="dropdown-item" href="#">Event Binding (v-on)</a></li>
					<li><a class="dropdown-item" href="#">Two Way Data Binding (v-model)</a></li>
					<li><a class="dropdown-item" href="#">Computed Properties</a></li>
					<li><a class="dropdown-item" href="#">Watchers</a></li>
					<li><a class="dropdown-item" href="#">Dynamic Styling</a></li>
					<li><a class="dropdown-item" href="#">Conditional Rendering (v-if)</a></li>
					<li><a class="dropdown-item" href="#">List Rendering (v-for)</a></li>
					<li><a class="dropdown-item" href="#">Props</a></li>
					<li><a class="dropdown-item" href="#">Props ultra Opti (v-bind des props + v-for)+ Emit</a></li>
					<li><a class="dropdown-item" href="#">API Fetch</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</li>
	          	<li class="nav-item dropdown">
	            	<a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	              	TP
	            	</a>
	            	<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	              		<li>Liste des TP</li>
	              		<li>
							<router-link class="dropdown-item" to="/tpdatabinding">TP-Databinding</router-link>
						</li>

	              		<li><a class="dropdown-item" href="#">TP-Reactivity</a></li>
	              		<li><a class="dropdown-item" href="#">TP-Dynamic Styling</a></li>
	              		<li>
							<router-link class="dropdown-item" to="/tp_conditionalrendring">TP-Conditional & List Rendering</router-link>

							</li>
						<li><a class="dropdown-item" href="#">TP-Pokemon Game</a></li>
	              		<li><a class="dropdown-item" href="#">TP-Component Communication</a></li>
	              		<li><a class="dropdown-item" href="#">Something else here</a></li>
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