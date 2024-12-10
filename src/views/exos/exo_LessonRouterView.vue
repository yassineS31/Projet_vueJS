<template>
  <div>
    <div class="container py-5">
      <ul class="list-group ">
        <li class="d-flex justify-content-between border" v-for="item in items"
        :key="item.id"
        >
          <p>{{ item.name }}</p>
          <router-link
          :to="{ name: 'details', params: { id: item.id, itemName: item.name }}"
          class="btn btn-primary btn-sm"
        >
          Voir les détails
        </router-link>
        </li>
      </ul>
    </div>    
  </div>
</template>

<script setup lang='js'>


const items = [
  { id: 1, name: 'Élément 1' },
  { id: 2, name: 'Élément 2' },
  { id: 3, name: 'Élément 3' },
  { id: 44, name: 'Élément 44' }
];




</script>

<style scoped lang="css">
</style>