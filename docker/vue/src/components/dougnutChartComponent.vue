<script lang="ts" setup>
function init_chart()
{
    second_data.value = {
        labels:["first","second","third"],
        datasets:[{
            label:"Values",
            backgroundColor:["green","orange","pink"],
            data:[20,20,20],
            hoverOffset:50
        }]
    }
}

const second_data = ref<ChartData<'doughnut'>>({
    datasets:[]
})
init_chart()
</script>
<script lang="ts">
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
import { Doughnut } from 'vue-chartjs'
import {ref} from "vue"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
// ChartJS.defaults.
</script>


<template>
    <Doughnut :data="second_data" :options="options" />
</template>