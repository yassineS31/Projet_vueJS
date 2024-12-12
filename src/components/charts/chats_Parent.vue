<template>
<BarChart></BarChart>
<DoughnutChart></DoughnutChart>
<radar></radar>
<polar></polar>
</template>

<script setup lang='js'>
import {defineAsyncComponent} from 'vue'

const BarChart = defineAsyncComponent(() => import('./BarChart.vue'))
const DoughnutChart= defineAsyncComponent(() => import ('./DoughnutChart.vue') )
const radar= defineAsyncComponent(() => import ('./radar.vue') )
const polar= defineAsyncComponent(() => import ('./polar.vue') )


</script>

<style scoped lang="css">
</style>