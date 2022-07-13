<template>
  <div>
    <el-button @click="btnclick">try</el-button>
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
            }"
            @click="showLine(index)"
          ></div>
          <div class="lengendtext">
            <span class="lengendanme">{{ item.name }}</span>
            <span class="lengenddelete">x</span>
          </div>
        </li>
        <div style="clear: both"></div>
      </ul>
    </div>
    <div id="box" style="width: 100%; height: 400px"></div>
    <!-- <div class="details">
      <div class="titleBor">
        <h4>标签详情</h4>
      </div>
      <div class="detailsList">
        <table>
          <thead>
            <tr>
              <th>情感标签</th>
              <th>文章数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableData" :key="index">
              <td>
                <a href="">{{ item.date }}</a>
              </td>
              <td>
                <a href="">{{ item.num }}</a>
              </td>
              <td>
                <a href="">{{ item.address }}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </div> -->
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
        { name: "orangeorangeorangeorange" },
        { name: "yellow" },
        { name: "green" },
      ],
      currentPage4: 4,
      tableData: [
        {
          date: "投资并购/投资并购/投资并购",
          num: "11",
          address: "查看相关文章",
        },
        {
          date: "投资并购/投资并购/投资并购",
          num: "12",
          address: "查看相关文章",
        },
        {
          date: "投资并购/投资并购/投资并购",
          num: "13",
          address: "查看相关文章",
        },
        {
          date: "投资并购/投资并购/投资并购",
          num: "14",
          address: "查看相关文章",
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    showLine(index) {
      var option = echarts.init(document.getElementById("box")).getOption();
      let ifShow = option.legend[0].selected.dataTopFive[index].name
      if (ifShow) {
        let name = dataTopFive[index].name;
        option.legend[0].selected = { [name]: false };
        echarts.init(document.getElementById("box")).setOption(option);
      }
    },
    btnclick() {
      var option = echarts.init(document.getElementById("box")).getOption();
      option.legend[0].selected = { red: false };
      echarts.init(document.getElementById("box")).setOption(option);
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
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12",
          },
        },
        legend: {
          x: "40px",
          itemHeight: 18,
          itemGap: 20,
          textStyle: {
            fontSize: 12,
            color: "#333",
            padding: [0, 50, 0, 10], // 修改文字和图标距离
            lineHeight: 20,
            borderColor: "#ccc", // 文字块边框颜色。
            borderWidth: 1, // 文字块边框宽度。
            borderRadius: 10, // 文字块的圆角。
          },
          // data: ["正面标签", "负面标签"],
          data: [
            {
              name: "red",
              icon: "circle",
            },
            {
              name: "blue",
              icon: "circle",
            },
            {
              name: "orangeorangeorangeorange",
              icon: "circle",
            },
            {
              name: "yellow",
              icon: "circle",
            },
            {
              name: "green",
              icon: "circle",
            },
          ],
          formatter: function (name) {
            return name + "         x";
          },
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
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 分页
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
table {
  text-align: center; /*文本居中*/
  border-collapse: collapse; /*表格的边框合并，如果相邻，则共用一个边框*/
  border-spacing: 0; /*设置行与单元格边框的间距。当表格边框独立（即
    border-collapse:separate;）此属性才起作用*/
}

table td {
  word-break: break-all; /*允许在字内换行,即单词可分*/
  word-wrap: break-word; /*允许长单词或URL地址换行*/
  /* border-right: 1px solid #999; */
  border-bottom: 1px solid #d7d7d7;
}
.details {
  margin-top: 60px;
}
.titleBor {
  text-align: left;
  width: 100%;
}
.titleBor h4 {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #389afe;
}
.titleBor h4::after {
  display: inline-block;
  content: "";
  width: 90%;
  height: 2px;
  background: #ccc;
  margin-left: 18px;
}
.detailsList .has-gutter {
  height: 70px;
  background: pink;
}
.detailsList table {
  width: 100%;
  margin-top: 40px;
  border: none;
  background: #f2f2f2;
}
.detailsList table thead {
  width: 100%;
  height: 70px;
  background: #183c73;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.detailsList table thead tr {
  color: #fff;
  width: 100%;
  height: 70px;
  background: #183c73;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.detailsList table thead tr th {
  width: 33%;
}
.detailsList table tbody td {
  height: 70px;
}
.detailsList table tbody tr {
  border-bottom: 1px solid #d7d7d7;
  height: 70px;
}
.detailsList table tbody td:nth-child(1) a {
  font-size: 14px;
  color: #08b731;
  display: inline-block;
  width: 251px;
  height: 28px;
  line-height: 28px;
  background: #aff0b5;
  border-radius: 30px;
}
.detailsList table tbody td:nth-child(2) a {
  color: #666;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
}
.detailsList table tbody td:nth-child(3) a {
  color: #389afe;
  text-align: center;
  font-size: 14px;
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
}
.block .el-pagination__total {
  display: none;
}
</style>