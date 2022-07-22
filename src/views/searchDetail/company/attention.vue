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
      <div class="regional">
        <span class="text-label">Select area</span>
        <el-select
          v-model="regional"
          multiple
          collapse-tags
          filterable
          placeholder="Please select"
          @change="regionalInputConfirm">
          <el-option
            v-for="item in regionalTags"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-tag
          v-for="tag in regional"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="regionalClose(tag)">
          {{tag}}
        </el-tag>
      </div>
    </div>
    <div id="attention" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    name: "attention",
    data() {
      return {
        regional: [],
        regionalTags: [{
          value: 'Canada',
          label: 'Canada'
        }, {
          value: 'Mexico',
          label: 'Mexico'
        }, {
          value: 'Greenland',
          label: 'Greenland'
        }],
        chartDom: '',
        options: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: true
          },
          grid: {
            left: '1%',
            right: '1%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: []

        }
      }
    },
    mounted() {
      this.chartDom = echarts.init(document.getElementById("attention"));
      this.getData();
    },
    methods: {
      getData(){
        let xData = ['2022/11/11', '2022/11/13', '2022/11/15', '2022/11/17', '2022/11/19', '2022/11/21', '2022/11/23'];
        let yData = [
          {
            name: 'Email',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [920, 1632, 401, 2134, 3490, 3230, 2210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [2220, 1182, 3191, 1234, 2290, 2830, 3310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [150, 732, 301, 1154, 1190, 1530, 2410]
          },
          {
            name: 'Direct',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [1320, 332, 301, 334, 2390, 330, 1320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [820, 932, 901, 934, 1290, 1330, 1620]
          }
        ];
        this.setChart(xData, yData);
      },
      setChart(xData, yData){
        this.options.xAxis.data = xData;
        this.options.series = yData;
        this.chartDom.clear();
        this.chartDom.setOption(this.options)
      },
      regionalInputConfirm() {
        let inputValue = this.regional;
        this.getData();

      },
      regionalClose(tag) {
        this.regional.splice(this.regional.indexOf(tag), 1);
        this.getData();
      },


    },

  }
</script>

<style scoped>
  .regional{
    margin-top: 10px;
  }
  .regional .text-label{
    font-size: 14px;
    color: #7F7F7F;
    font-weight: bold;
    margin-right: 8px;
  }
  .regional .el-tag{
    line-height: 18px;
    height: 20px;
    background-color: #ffffff;
    color: #00000073;
    border: 1px solid #e0e0e0;
    margin-left: 6px;
    border-radius: 10px;
  }


</style>
