<template>
  <div class="publicOpinion">
    <div class="companyAnalysisTop">
      <div class="analysisTitle">
        <p class="title">Public Opinion Activation</p>
        <i class="el-icon-download"></i>
      </div>
      <p class="describe">
        It refers to the trend analysis of overall overseas public opinions of a brand, through weighted calculation of
        the posts, likes, comments, emotion, and countries involved within a certain time frame (in past 30 days by
        default).
      </p>
      <div class="pickDate">
        <span>Select time</span>
        <el-date-picker
          v-model="selectedDate"
          type="daterange"
          range-separator="-"
          format="yyyy/MM/dd"
          start-placeholder="yyyy/mm/dd"
          end-placeholder="yyyy/mm/dd" @change="selectDate">
        </el-date-picker>
      </div>
    </div>

    <div id="publicOpinion" style="width: 100%; height: 300px"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: "publicOpinion",
    data() {
      return {
        chartDom: '',
        option: {
          xAxis: {
            type: 'category',
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: "axis",
          },
          series: [
            {
              type: 'line',
              smooth: true,
              showSymbol: false,

            }
          ]
        },
        selectedDate: ''
      }
    },
    mounted(){
      this.chartDom = echarts.init(document.getElementById('publicOpinion'));
      this.getData();
    },
    methods: {
      getData(){
        let xData = ['2022/11/11', '2022/11/13', '2022/11/15', '2022/11/17', '2022/11/19', '2022/11/21', '2022/11/23', '2022/11/25', '2022/11/27'];
        let yData = [820, 1932, 901, 1434, 1290, 2330, 1320, 2024, 3500];
        this.setChart(xData, yData);
      },
      selectDate(){
        if (this.selectedDate){
          let xData = ['2022/11/11', '2022/11/13', '2022/11/15', '2022/11/17', '2022/11/19', '2022/11/21', '2022/11/23', '2022/11/25', '2022/11/27'];
          let yData = [920, 1632, 1301, 2434, 1290, 2730, 1620, 3024, 3900];
          this.setChart(xData, yData);
        }

      },
      clickChange(){
        this.getData();
      },
      setChart(xData, yData){
        this.option.xAxis.data = xData;
        this.option.series[0].data = yData;
        this.chartDom.clear();
        this.chartDom.setOption(this.option);
      }
    }
  }
</script>

<style scoped>

  .publicOpinion .companyAnalysisTop .pickDate{
    font-size: 12px;
    font-weight: bold;
    margin-top: 16px;
    color: #7F7F7F;
  }
  .publicOpinion .companyAnalysisTop .pickDate span{
    margin-right: 20px;
  }
</style>
