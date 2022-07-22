<template>
    <div class="analysis">
        <div class="companyAnalysisTop">
            <div class="analysisTitle">
                <p class="title">Enterprise manuscript trend analysis</p>
                <i class="el-icon-download"></i>
            </div>

            <p class="describe">
                Refers to the amount of enterprise manuscripts published by foreign media monitored by the system within a certain time range (default: since data collection). Double-click the chart to drill down on the data.
            </p>
            <ul class="clearBoth">
                <li v-for="(item, index) in btn" :class="index === selectedBtn ? 'on' : ''"><el-button type="primary" plain size="mini" @click="selectDate(item.value, index)">{{item.name}}</el-button></li>
                <li :class="[selectedBtn === -1 ? 'on' : '', 'datePicker']">
                    <el-button type="primary" plain size="mini" @click="selectDate('', -1)">Customize</el-button>
                    <el-date-picker
                        v-if="selectedBtn === -1"
                        v-model="pickDate"
                        type="daterange"
                        range-separator="-"
                        format="yyyy/MM/dd"
                        start-placeholder="yyyy/mm/dd"
                        end-placeholder="yyyy/mm/dd" @change="clickChange">
                    </el-date-picker>
                </li>
            </ul>
        </div>

        <div id="analysis" style="width: 100%; height: 300px"></div>

    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name: "analysis",
        data(){
            return{
                btn: [
                    {
                        name: 'All',
                        value: 'All'
                    },{
                        name: '7 days',
                        value: '7 days'
                    },{
                        name: '30 days',
                        value: '30 days'
                    },{
                        name: 'Half a year',
                        value: 'Half a year'
                    }
                ],
                selectedDate: '',
                selectedBtn: 0,
                pickDate: '',
                chartDom: '',
                option: {
                    xAxis: {
                        type: 'category',
                    },
                    yAxis: {
                        type: 'value'
                    },
                    tooltip:{
                        trigger: "axis",
                    },
                    series: [
                        {
                            type: 'line',
                            smooth: true,
                            showSymbol: false,

                        }
                    ]
                }
            }
        },
        mounted(){
            this.chartDom = echarts.init(document.getElementById('analysis'));
            this.getData();
        },
        methods: {
            getData(){
                let xData = ['2022/11/11', '2022/11/13', '2022/11/15', '2022/11/17', '2022/11/19', '2022/11/21', '2022/11/23', '2022/11/25', '2022/11/27'];
                let yData = [820, 1932, 901, 1434, 1290, 2330, 1320, 2024, 3500];
                this.setChart(xData, yData);
            },
            selectDate(value, index){
                this.selectedDate = value;
                this.selectedBtn = index;
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
  .analysis .companyAnalysisTop ul{
    margin-top: 10px;
  }
  .analysis .companyAnalysisTop ul li{
    float: left;
    margin-right: 20px;
  }
  .analysis .companyAnalysisTop .datePicker{
      background: rgba(47, 142, 255, 1);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 10px;

  }
  .clearBoth:after{
    content: '';
    display: block;
    clear: both;
  }
</style>
