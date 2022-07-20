<template>
  <div>
    <div class="chart">
      <div class="charsTal">
        <div id="box" style="width: 45%; height: 400px"></div>
        <div id="box2" style="width: 45%; height: 400px"></div>
      </div>
    </div>
        <!-- <div class="newList" style="margin-top: 50px">
      <div class="charTitle" style="margin-bottom: 50px">
        <h4>稿件详情</h4>
      </div>
      <el-table :data="newList" border style="width: 100%">
        <el-table-column label="稿件标题" align="center">
          <template slot-scope="scope">
            <router-link class="ell" to="">{{ scope.row.title }}</router-link>
          </template>
        </el-table-column>
        <el-table-column label="发稿来源" align="center">
          <template slot-scope="scope">
            <router-link to="/details">{{ scope.row.src }}</router-link>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" align="center">
          <template slot-scope="scope">
            <router-link to="/details">{{ scope.row.time }}</router-link>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="time" label="发布时间"></el-table-column>
        <el-table-column label="稿件相关企业" align="center">
          <template slot-scope="scope">
            <span class="firm"
              ><router-link to="/details">{{ scope.row.firm }}</router-link></span
            >
          </template>
        </el-table-column>
        <el-table-column label="稿件相关行业" align="center">
          <template slot-scope="scope">
            <el-tag v-for="i in scope.row.industry" :key="i">{{ i }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="情感标签" align="center">
          <template slot-scope="scope">
            <el-tag size="mini" v-for="i in scope.row.emotional" :key="i">{{
              i
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template>
            <el-button
              size="mini"
              style="color: #389afe; border: none; background: none"
              @click="dialogTableVisible = true"
              >编辑稿件标签</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 50px"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
      修改标签
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table>
          <el-table-column label="日期" width="150"></el-table-column>
          <el-table-column label="姓名" width="200"></el-table-column>
          <el-table-column label="地址"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      修改标签
    </div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      dialogTableVisible: false,
      newList: [
        {
          title: "京东大消息！50只A股新纳入，科创...",
          src: "the xx YHJ",
          time: "2021.12.21 09:05:00",
          firm: "京东股份有限公司",
          industry: ["电子商务", "大数据"],
          emotional: ["投资并购", "营收超预期", "裁员", "专利纠纷"],
        },
        {
          title: "京东大消息！50只A股新纳入，科创...",
          src: "the xx YHJ",
          time: "2021.12.21 09:05:00",
          firm: "京东股份有限公司",
          industry: ["电子商务", "大数据"],
          emotional: ["投资并购", "营收超预期", "裁员", "专利纠纷"],
        },
        {
          title: "京东大消息！50只A股新纳入，科创...",
          src: "the xx YHJ",
          time: "2021.12.21 09:05:00",
          firm: "京东股份有限公司",
          industry: ["电子商务", "大数据"],
          emotional: ["投资并购", "营收超预期", "裁员", "专利纠纷"],
        },
        {
          title: "京东大消息！50只A股新纳入，科创...",
          src: "the xx YHJ",
          time: "2021.12.21 09:05:00",
          firm: "京东股份有限公司",
          industry: ["电子商务", "大数据"],
          emotional: ["投资并购", "营收超预期", "裁员", "专利纠纷"],
        },
        {
          title: "京东大消息！50只A股新纳入，科创...",
          src: "the xx YHJ",
          time: "2021.12.21 09:05:00",
          firm: "京东股份有限公司",
          industry: ["电子商务", "大数据"],
          emotional: ["投资并购", "营收超预期", "裁员", "专利纠纷"],
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = echarts.init(document.getElementById("box"));
      myChart.setOption({
        title: [
          {
            text: "时间范围：2022.2.23-2022.3.7",
            right: 0,
            textStyle: {
              fontSize: 14,
              fontWeight: "normal",
              fontFamily: "Helvetica",
            },
          },
        ],
        color: ["#c23531", "#2f4554"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["正面标签", "负面标签"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: { show: false },
          },
        ],
        series: [
          {
            name: "正面标签",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 341, 374, 390, 450, 420],
          },
          {
            name: "负面标签",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "left",
            },
            emphasis: {
              focus: "series",
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
          },
        ],
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例，所以只能在mounted中调用
      let myChart = echarts.init(document.getElementById("box2"));
      myChart.setOption({
        title: {
          text: "时间范围：2022.2.23-2022.3.7",
          right: 0,
          textStyle: {
            fontSize: 14,
            fontWeight: "normal",
            fontFamily: "Helvetica",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
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
  /* border-bottom: 1px solid #d7d7d7; */
}
.charTitle {
  height: 50px;
  line-height: 50px;
  text-align: left;
}
.charTitle h4 {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #389afe;
}
.charTitle h4::after {
  display: inline-block;
  content: "";
  width: 87%;
  height: 12px;
  margin-left: 13px;
  border-top: 1px solid #ccc;
}
.charsTal {
  display: flex;
  justify-content: space-between;
}
.newList {
  width: 100%;
}
.newList table {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.newList table thead {
  width: 100%;
  height: 70px;
}
.newList table thead tr {
  width: 100%;
}
.newList table tbody tr {
  height: 60px;
  border-bottom: 1px solid #ccc;
}
.newList table tr td {
  font-size: 14px;
}
.cell {
  display: flex;
  flex-wrap: wrap;
}
.cell span {
  display: inline-block;
  margin: 0 3px;
  border-radius: 10px;
}
.firm {
  background: red;
  color: #fff;
  line-height: 16px;
  font-size: 12px;
  padding: 0 6px;
  cursor: pointer;
}
.newList table a {
  color: #343434;
}
.newList table span a{
  color: #fff;
}
.ell {
  display: inline-block;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>