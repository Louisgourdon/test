<script setup>
import BarChart from "../components/barChartComponent.vue"
import DoughnutChart from "../components/dougnutChartComponent.vue"
import LineChart from "../components/lineChartComponent.vue"
// fetch("http://localhost:8080").then((res)=>{
//     print(res)
// })
</script>

<template>
    <main>
        <!-- Insert three chart -->
        <h1>Chart manager</h1>
        <section id="chartManagerSection" class="layoutHorizontal">
            <div class="chart">
                <LineChart title="Daily"/>
            </div>
            
            <div class="chart">
                <LineChart title="Weekly"/>
            </div>
            <div class="chart">
                <LineChart title="Annual"/>
            </div>
        </section>
    </main>
</template>


<style>
#chartManagerSection {
    width: 100%;
    padding:10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.chart
{
    width:30%;
    height:50vh;
    margin:0px 10px;
}
</style>