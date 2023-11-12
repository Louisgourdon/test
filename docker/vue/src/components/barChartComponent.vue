<script lang="ts" setup>
function init_chart()
{
    first_data.value = {
        labels:["first","second","third"],
        datasets:[{
            label:"Values",
            backgroundColor:"green",
            data:[0,0,0]
        }]
    }
}
function getRand()
{
    return Math.floor(Math.random() *100)
}
const clock = setInterval(()=>{
    first_data.value = {
        labels: [
            "first",
            "second",
            "third"
        ],
        datasets:[
            {
                label: "Values",
                backgroundColor:"green",
                data: [
                    getRand(),
                    getRand(),
                    getRand(),
                    getRand()
                ]
            }
        ]
    }
},500)
init_chart()
</script>
<script lang="ts">
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
import { Bar } from "vue-chartjs"
import {ref} from "vue"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const first_data = ref<ChartData<'bar'>>({
    datasets:[]
})
ChartJS.defaults.color="whitesmoke"
ChartJS.defaults.scale.grid.color="whitesmoke"
</script>


<template>
    <Bar :data="first_data" :options="options">
    </Bar>
</template>


<style>
#test
{
    /* width:50vw !important; */
    background: orange;
    /* margin-right: auto;
    margin-left: auto; */
    /* min-height: 500px; */
}
</style>