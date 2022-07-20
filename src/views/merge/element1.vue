<template>
  <div>
    <div class="chart">
      <div class="lengends" style="width: 65%">
        <ul>
          <li v-for="(item, index) in dataTopTen" :key="index">
            <div class="lengendtext">
              <span class="lengendanme">{{ item.name }}</span>
              <span class="lengenddelete" @click="deleteLine1(index)"
                ><i class="el-icon-close"></i
              ></span>
            </div>
          </li>
        </ul>
      </div>
      <div style="clear: both"></div>
      <div class="charsTal">
        <div id="box1" style="width: 60%; height: 400px"></div>
        <div id="box2" style="width: 35%; height: 400px"></div>
        <div class="box2LeftBottom"> {{ dataTopTenName[0] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      dataTopTen: [
        { name: "Mon" },
        { name: "Tue" },
        { name: "Wed" },
        { name: "Thu" },
        { name: "Fri" },
        { name: "Sat" },
        { name: "Sun" },
        { name: "sasd" },
        { name: "ffr" },
        { name: "rhh" },
      ],
      dataTopTenName: [],
    };
  },
  mounted() {
    this.dataTopTen.forEach((element) => {
      this.dataTopTenName.push(element.name);
    });
    this.drawLine();
    this.drawLine2();
  },
  methods: {
    deleteLine1(index) {
      var myChartNew = echarts.init(document.getElementById("box1"));
      this.dataTopTen.splice(index, 1);
      this.dataTopTenName.splice(index, 1);
      var option = myChartNew.getOption();
      option.xAxis[0].data.splice(index, 1);
      option.series[0].data.splice(index, 1);
      myChartNew.clear();
      myChartNew.setOption(option);
    },
    btnclicksec() {
      if (this.dataTopTen.length < 10) {
        this.dataTopTen.push({ name: "black" });
        this.dataTopTenName.push("black");
        var myChartNew = echarts.init(document.getElementById("box1"));
        var option = myChartNew.getOption();
        option.xAxis[0].data.push("black");
        option.series[0].data.push(111);
        debugger;
        myChartNew.clear();
        myChartNew.setOption(option);
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = echarts.init(document.getElementById("box1"));
      myChart.setOption({
        color: ["#409eff"],
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: this.dataTopTenName,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 30, 430, 10],
            type: "bar",
          },
        ],
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = echarts.init(document.getElementById("box2"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.charsTal {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.lengends ul li {
  float: left;
  display: flex;
  margin-right: 5px;
  cursor: pointer;
  align-items: center;
}
.lengends ul {
  margin-left: 45px;
}
.lengendtext {
  font-size: 12px;
  margin-top: 5px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}
.lengendtext .lengenddelete {
  font-size: 18px;
}
.lengendtext .lengenddelete {
  margin-left: 40px;
}
.box2LeftBottom {
  width: 100px;
  height: 35px;
  line-height: 35px;
  background: #409eff;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  right: 0;
  bottom: 30px;
 }
</style>