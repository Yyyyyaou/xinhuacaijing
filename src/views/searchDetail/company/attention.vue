<template>
  <div class="attention">
    <div class="companyAnalysisTop">
      <div class="analysisTitle">
        <p class="title">Trend of User's Attention</p>
        <i class="el-icon-download"></i>
      </div>
      <p class="describe">
        It is an analysis of the trend in which users of this site have become the focus of the enterprise over a
        certain period of time (default is the past 30 days).
      </p>
    </div>
    <div id="box" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    name: "attention",
    data() {
      return {

      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
        let myChart = echarts.init(document.getElementById("box"));
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: true
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              smooth: true,
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              smooth: true,
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Video Ads',
              type: 'line',
              smooth: true,
              data: [150, 732, 301, 1154, 2190, 1530, 2410]
            },
            {
              name: 'Direct',
              type: 'line',
              smooth: true,
              data: [320, 332, 301, 334, 2390, 330, 1320]
            },
            {
              name: 'Search Engine',
              type: 'line',
              smooth: true,
              data: [820, 932, 901, 934, 1290, 1330, 1620]
            }
          ]

        })
      }

    },

  }
</script>

<style scoped>

</style>
