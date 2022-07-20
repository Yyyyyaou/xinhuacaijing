<template>
  <div>
    <div class="lengends">
      <ul>
        <li v-for="(item, index) in dataTopFive" :key="index">
          <div
            class="lengendicon"
            :class="{
              redcolor: index == 0,
              bluecolor: index == 1,
              orangecolor: index == 2,
              yellowcolor: index == 3,
              greencolor: index == 4,
              graycolor: dataSelect[index] == false,
            }"
            @click="showLine(index)"
          ></div>
          <div class="lengendtext">
            <span
              class="lengendanme"
              @click="showLine(index)"
              :class="{ graycolortext: dataSelect[index] == false }"
              >{{ item.name }}</span
            >
            <span class="lengenddelete" @click="deleteLine(index)"><i class="el-icon-close"></i></span>
          </div>
        </li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div id="box" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      dataTopFive: [
        { name: "red" },
        { name: "blue" },
        { name: "orangeorangorangeorang" },
        { name: "yellow" },
        { name: "green" },
      ],
      dataSelect: [true, true, true, true, true],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    showLine(index) {
      this.dataSelect[index] = !this.dataSelect[index];
      var temparr = this.dataTopFive;
      this.dataTopFive = [];
      this.dataTopFive = temparr;
      var option = echarts.init(document.getElementById("box")).getOption();
      let ifShow = option.legend[0].selected;
      if (JSON.stringify(ifShow) === "{}") {
        let name = this.dataTopFive[index].name;
        option.legend[0].selected = { [name]: false };
        echarts.init(document.getElementById("box")).setOption(option);
      } else {
        let name = this.dataTopFive[index].name;
        if (typeof ifShow[name] == "undefined") {
          option.legend[0].selected = { [name]: false };
          echarts.init(document.getElementById("box")).setOption(option);
        } else {
          if (ifShow[name]) {
            option.legend[0].selected = { [name]: false };
            echarts.init(document.getElementById("box")).setOption(option);
          } else {
            option.legend[0].selected = { [name]: true };
            echarts.init(document.getElementById("box")).setOption(option);
          }
        }
      }
    },
    btnclick() {
      if (this.dataTopFive.length < 5) {
        this.dataTopFive.push({ name: "black" });
        var myChartNew = echarts.init(document.getElementById("box"));
        var option = myChartNew.getOption();
        option.series.push({
          name: "black",
          data: [35000, 35000, 35000, 35000, 35000, 35000, 35000],
          type: "line",
          smooth: true,
          symbol: "none",
        });
        myChartNew.clear();
        myChartNew.setOption(option);
      }
    },
    deleteLine(index) {
      var myChartNew = echarts.init(document.getElementById("box"));
      this.dataTopFive.splice(index, 1);
      var option = myChartNew.getOption();
      option.series.splice(index, 1);
      myChartNew.clear();
      myChartNew.setOption(option);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = echarts.init(document.getElementById("box"));
      myChart.setOption({
        // title: {
        //   text: "全站正负面标签量走势",
        //   textStyle: {
        //     //文字颜色
        //     color: "#389AFE",
        //     //字体风格,'normal','italic','oblique'
        //     fontStyle: "normal",
        //     //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        //     fontWeight: "bold",
        //     //字体系列
        //     fontFamily: "sans-serif",
        //     //字体大小
        //     fontSize: 18,
        //   },
        // },
        color: ["#c23531", "#389AFE", "#FFA500", "#FFFF00", "#238E68"],
        tooltip: {
          trigger: "axis",
          textStyle: {
            // 文字提示样式
            fontSize: "14",
          },
          formatter: function (params) {
            var res = "" + params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              if (i == 0) {
                res +=
                  '<br/><span style="color:#c23531;float: left;">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="margin-left:20px;float: right;">' +
                  params[i].value +
                  "</span>";
              } else if (i == 1) {
                res +=
                  '<br/><span style="color:#389AFE;float: left;">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="margin-left:20px;float: right;">' +
                  params[i].value +
                  "</span>";
              } else if (i == 2) {
                res +=
                  '<br/><span style="color:#FFA500;float: left;">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="margin-left:20px;float: right;">' +
                  params[i].value +
                  "</span>";
              } else if (i == 3) {
                res +=
                  '<br/><span style="color:#FFFF00;float: left;">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="margin-left:20px;float: right;">' +
                  params[i].value +
                  "</span>";
              } else if (i == 4) {
                res +=
                  '<br/><span style="color:#238E68;float: left;">' +
                  params[i].seriesName +
                  "</span>" +
                  '<span style="margin-left:20px;float: right;">' +
                  params[i].value +
                  "</span>";
              }
            }
            return res;
          },
        },
        legend: {
          show: false,
          // x: "40px",
          // itemHeight: 18,
          // itemGap: 20,
          // textStyle: {
          //   fontSize: 12,
          //   color: "#333",
          //   padding: [0, 50, 0, 10], // 修改文字和图标距离
          //   lineHeight: 20,
          //   borderColor: "#ccc", // 文字块边框颜色。
          //   borderWidth: 1, // 文字块边框宽度。
          //   borderRadius: 10, // 文字块的圆角。
          // },
          // // data: ["正面标签", "负面标签"],
          // data: [
          //   {
          //     name: "red",
          //     icon: "circle",
          //   },
          //   {
          //     name: "blue",
          //     icon: "circle",
          //   },
          //   {
          //     name: "orangeorangeorangeorange",
          //     icon: "circle",
          //   },
          //   {
          //     name: "yellow",
          //     icon: "circle",
          //   },
          //   {
          //     name: "green",
          //     icon: "circle",
          //   },
          // ],
          // formatter: function (name) {
          //   return name + "         x";
          // },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "2022/11/11",
            "2022/11/13",
            "2022/11/15",
            "2022/11/17",
            "2022/11/19",
            "2022/11/21",
            "2022/12/11",
          ],
          axisTick: {
            show: false,
          },
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: this.dataTopFive[0].name,
            data: [40000, 20000, 30000, 15000, 24000, 30000, 24000],
            type: "line",
            smooth: true,
            symbol: "none",
          },
          {
            name: this.dataTopFive[1].name,
            data: [20000, 25000, 18000, 20000, 26000, 20000, 30000],
            type: "line",
            smooth: true,
            symbol: "none",
          },
          {
            name: this.dataTopFive[2].name,
            data: [15000, 15000, 38000, 21000, 19000, 16000, 2000],
            type: "line",
            smooth: true,
            symbol: "none",
          },
          {
            name: this.dataTopFive[3].name,
            data: [1000, 22000, 22000, 25000, 26000, 32000, 10000],
            type: "line",
            smooth: true,
            symbol: "none",
          },
          {
            name: this.dataTopFive[4].name,
            data: [10000, 35000, 28000, 20000, 26000, 6000, 20000],
            type: "line",
            smooth: true,
            symbol: "none",
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.lengends ul li {
  float: left;
  display: flex;
  margin-right: 40px;
  cursor: pointer;
  align-items: center;
}
.lengends ul {
  margin-left: 45px;
}
.lengendicon {
  height: 18px;
  width: 18px;
  border-radius: 50%;
}
.redcolor {
  background: #c23531;
}
.bluecolor {
  background: #389afe;
}
.orangecolor {
  background: #ffa500;
}
.yellowcolor {
  background: #ffff00;
}
.greencolor {
  background: #238e68;
}
.graycolor {
  background: #ccc;
}
.graycolortext {
  color: #ccc;
}
.lengendtext {
  font-size: 12px;
  margin-left: 20px;
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
</style>