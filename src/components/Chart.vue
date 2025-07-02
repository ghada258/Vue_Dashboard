<template>
    <v-container class="d-flex flex-column align-center justify-center hight-full ">
      <div class="position-relative"style="width: 230px; height: 230px;">
        <Doughnut :data="chartData" :options="chartOptions" />
        <div
          class="position-absolute font-weight-bold text-h-5 text-primary"style=" top: 50%; left: 50%; transform: translate(-50%, -50%)"  >
  {{ Math.round((props.data[0] / (props.data[0] + props.data[1])) * 100) }}%
    </div>
      </div>
      <div class="text-center mt-4 font-weight-semibold text-h-5 text-primary" >
       {{title}}
      </div>
    </v-container>


  </template>
  
  <script setup>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'


  import { ref,computed } from 'vue' 
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement)
   const props=defineProps({
    data:{
        type:Array,
        required:true,
    },title:{
        type:String,
        required:true
    }
   })
  
 const chartData = computed(() => ({
  labels: ['Available', 'Unavailable'],
  datasets: [
    {
      backgroundColor: ['#005b99', '#f5f5f5'],
      data: props.data,
      cutout: '50%',
    },
  ],
}))

  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  })
  </script>
  