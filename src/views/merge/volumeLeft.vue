<template>
  <div>
    <div class="targeta">
      <div class="targetaFir">
        <span class="seatar">Industry public opinion volume</span>
        <el-popover
          placement="bottom-end"
          width="450"
          trigger="click"
          v-model="visiblepopoverLeft"
          popper-class="popoverStyle"
        >
          <div class="popoverLine"></div>
          <div class="popoverSelectGroup">
            <span>Regional screening</span>
            <el-select
              v-model="valueLeft"
              filterable
              placeholder="please select"
              class="popoverSelect"
              size="mini"
            >
              <el-option
                v-for="item in optionsLeft"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="popoverSelectGroup">
            <span>Time interval</span>
            <el-date-picker
              v-model="value1Left"
              type="daterange"
              range-separator="——"
              start-placeholder="start date"
              end-placeholder="end date"
              class="popoverSelect"
              size="mini"
            >
            </el-date-picker>
          </div>
          <div class="popoverSelectGroup popoverSelectGroupVolume">
            <span>Volume interval</span>
          </div>
          <el-slider
            class="sliderStyle"
            v-model="valueVolume"
            :min="100"
            :max="600"
            :marks="marks"
          >
          </el-slider>
          <div style="text-align: right; margin-top: 40px">
            <el-button
              size="mini"
              type="info"
              icon="el-icon-close"
              @click="visiblepopoverLeft = false"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-check"
              size="mini"
              @click="addDataLeft"
            ></el-button>
          </div>
          <div class="btnsearch" slot="reference">
            <img src="../../assets/img/search.png" alt="" />
          </div>
        </el-popover>
      </div>

      <span class="seatar1"
        >TOP10 in industry public opinion volume (recent 7 days)</span
      >
    </div>
    <div class="targetaTable">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        align="center"
        header-cell-class-name="tableHeader"
        :cell-style="cellStyle"
        size="mini"
      >
        <el-table-column type="index" label="Ranking" width="80" align="center">
          <template slot-scope="scope">
            <i class="el-icon-star-on" v-if="scope.$index == 0"></i>
            <span :class="{ tdFir: scope.$index == 0 }">
              {{ scope.$index + 1 }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Industry name" align="center">
        </el-table-column>
        <el-table-column
          prop="heatvalue"
          label="Heat value"
          width="100"
          align="center"
        >
          <template slot-scope="scope">
            <img src="../../assets/img/fire.png" alt=""  v-if="scope.$index == 0" class="heatvalueImg"/>
            <span :class="{ heatvalueFir:scope.$index == 0 }">
              {{ scope.row.heatvalue }}</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueLeft: [],
      optionsLeft: [
        {
          value: "选项1",
          label: "bfdbdfg",
        },
        {
          value: "选项2",
          label: "ggggg",
        },
        {
          value: "选项3",
          label: "rtrtrrt",
        },
        {
          value: "选项4",
          label: "yttyty",
        },
        {
          value: "选项5",
          label: "rerer",
        },
      ],
      value1Left: "", //日期
      valueVolume: 300,
      marks: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
      },
      visiblepopoverLeft: false,
      tableData: [
        {
          name: "The electronic commerce",
          heatvalue: "45346",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "226",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "45346",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
        {
          name: "Bnnner bancorp",
          heatvalue: "5543",
        },
      ],
    };
  },
  methods: {
    addDataLeft() {
      this.visiblepopoverLeft = false;
    },
    // 表格的样式
    cellStyle(data) {
      if (data.columnIndex === 0 || data.columnIndex === 1) {
        if (data.columnIndex === 1 && data.rowIndex === 0) {
          return "  color: #d9001b;font-weight: 700;font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;";
        }
        return "  color: #7F7F7F;font-weight: 700;font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;";
      }
      if (data.columnIndex === 2) {
        return "  color: #549FEE;font-weight: 700;font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;";
      }
    },
  },
};
</script>

<style scoped>
.targeta {
  display: flex;
  align-items: flex-start;
  padding: 0 40px;
  flex-direction: column;
}
.targetaFir {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.seatar {
  font-weight: 700;
  font-size: 16px;
  color: #389afe;
}
.seatar1 {
  font-size: 13px;
  color: #ccc;
  margin-top: 10px;
}
.btnsearch {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.btnsearch img {
  width: 25px;
  height: 25px;
}
.popoverSelectGroup {
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 11px;
  margin-top: 20px;
}
.popoverSelect {
  width: 230px !important;
  margin-left: auto;
  border-radius: 15px;
  border: 1px solid #409eff;
}
.popoverSelectGroupVolume {
  margin-top: 30px;
}
.popoverSelect /deep/.el-input__inner {
  border-radius: 15px;
  border: none;
}
.popoverLine {
  width: 100%;
  height: 4px;
  background: #409eff;
  position: absolute;
  top: 0;
  left: 0;
}
.sliderStyle {
  width: 90%;
  margin: 20px auto 0;
  word-break: normal;
}
.targetaTable {
  padding: 0 25px;
  margin-top: 15px;
}
div/deep/.tableHeader {
  background-color: rgba(242, 242, 242, 1) !important;
  color: #333;
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
  font-weight: 700;
  padding: 2px 0;
}
div/deep/.el-table--striped
  .el-table__body
  tr.el-table__row--striped
  td.el-table__cell {
  background: rgba(237, 249, 254, 1);
}
.el-icon-star-on {
  color: #d9001b;
  font-size: 25px;
}
.tdFir {
  position: absolute;
  left: 36px;
  top: 7px;
  color: #fff;
}
.heatvalueImg {
     height: 15px;
     width: 15px;
}
.heatvalueFir {
    color: #d9001b;
}
</style>