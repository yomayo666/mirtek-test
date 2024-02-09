<template>
    <div class="chart-container">
        <div>
            <h2 class="text-textMain font-bold text-bold">Sales</h2>
      <img :src="chartImage" alt="Chart Pie Image" class="chart-image">
        </div>
      <canvas id="speedChart"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'ChartBar',
    setup() {
      const chartData = ref(null);
      const chartImage = require('@/assets/solid/exclamation.png');
  
      onMounted(() => {
        const speedCanvas = document.getElementById("speedChart");
        Chart.defaults.font.size = 18;
  
        chartData.value = {
          labels: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr", "07 Apr"],
          datasets: [{
            label: "Sales",
            data: [20, 10, 80, 120, 160, 120, 120],
            borderColor: 'rgb(14, 159, 110)',
            borderWidth: 2,
            tension: 0.4
          }]
        };
  
        const maxDataValue = Math.max(...chartData.value.datasets[0].data);
        const minDataValue = 0;
  
        const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // Убираем отображение легенды
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return "Sales: "+ "$" + context.parsed.y + "k";
                }
              },
              // Стилизация текста внутри точки
              bodyFontColor: 'black'
            }
          },
          scales: {
            y: {
              min: minDataValue,
              max: maxDataValue + 20,
              ticks: {
                callback: function(value) {
                  return value + "k";
                }
              }
            }
          }
        };
  
        new Chart(speedCanvas, {
          type: 'line',
          data: chartData.value,
          options: chartOptions
        });
      });
  
      return {
        chartData,
        chartImage
      };
    }
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    padding: 32px;
  }
  .chart-container div{
    display: flex;
    align-items: center;
  }
  
  .chart-image {
    width: 16px; /* Adjust as needed */
    height: 16px;
    margin-left: 15px;
  }
  #speedChart{
    margin-top: 16px;
  }
  </style>