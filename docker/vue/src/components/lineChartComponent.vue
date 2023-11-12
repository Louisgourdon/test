<script lang="ts" setup>
// const clock = setInterval(()=>{
</script>
<script lang="ts">
function getRand()
{
    return Math.floor(Math.random() *10)
}
const DEFAULT_DATASET = {
    label: "Heures prévues",
    borderColor:"red",
    borderWidth:5,
    data:[
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    ]
}

export default {
        created(){
            this.data = {
            labels: [
            1,2,3,4,5,6,7,8,9,10
            ],
            datasets:[
            DEFAULT_DATASET,
            {
                label: "Utilisateur ciblé",
                backgroundColor:"rgba(0,128,0,0.5)",
                borderColor:"rgba(0,192,0,1)",
                pointBorderColor:"rgb(0,255,0)",
                borderWidth:3,
                fill:true,
                data: [
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand()
                ],
            },
            {
                label: "Moyenne globale",
                backgroundColor:"rgba(245,245,245,0.5)",
                borderColor:"rgba(245,245,245,1)",
                pointBorderColor:"whitesmoke",
                borderWidth:3,
                fill:true,
                data: [
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                getRand(),
                ],
            },
            ]
        }
    },
    props:["title","scale"],
    data(){
        return{
            data: ref<ChartData<'line'>>({
                datasets:[]
            }),
            chartOptions:{
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    title: {
                        display: true,
                        text: this.title
                    }
                },
                scales:{
                    y:{
                        min:0,
                        max:16,
                        title:{
                            text:"Nombre d'heures",
                            display:true
                        }
                    },
                    x:{
                        title:{
                            text:"Période",
                            display:true
                        }
                    }
                }
            }
        }
    }
}
import {ref} from "vue"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
Filler
)
ChartJS.defaults.color="whitesmoke"
ChartJS.defaults.scale.grid.color="whitesmoke"

</script>


<template>
    <h1>{{ title }} test</h1>
    <Line :data="data" :options="chartOptions">
    </Line>
</template>