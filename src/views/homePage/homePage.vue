<template>
  <div>
    <div class="content"><searchHead></searchHead></div>
    <div class="content contentexceptfir"><mapFocus></mapFocus></div>
    <div class="contentsecPart">
      <div
        class="content contentexceptfir"
        v-if="volumeLeftshow"
        :class="{
          volumeLeftshow: volumeLeftshow,
          volumeLeftRight: volumeLeftRight,
        }"
      >
        <volumeLeft></volumeLeft>
      </div>
      <div
        class="content contentexceptfir"
        v-if="volumeRightshow"
        :class="{
          volumeRightshow: volumeRightshow,
          volumeRightLeft: volumeRightLeft,
        }"
      >
        <volumeRight></volumeRight>
      </div>
    </div>
    <div class="content contentexceptfir">
      <div class="elementhead">
        <div class="targeta">
          <span class="seatar">Industry public opinion trend</span>
          <span class="seatar1"
            >TOP5 industry public opinion trends (recent 30 days)</span
          >
          <div class="switch">
            <i
              class="el-icon-picture-outline"
              :class="{ switchselected: visible == 1 }"
              @click="swichchange(1)"
            ></i>
            <i
              class="el-icon-s-grid"
              :class="{ switchselected: visible == 2 }"
              @click="swichchange(2)"
            ></i>
            <i class="el-icon-download"></i>
            <el-popover
              placement="bottom-end"
              width="450"
              trigger="click"
              v-model="visiblepopover"
              popper-class="popoverStyle"
            >
              <div class="popoverLine"></div>
              <div class="popoverSelectGroup">
                <span>Regional screening</span>
                <el-select
                  v-model="value"
                  filterable
                  placeholder="please select"
                  class="popoverSelect"
                  size="mini"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="popoverSelectGroup">
                <span>Industry screening</span>
                <el-select
                  v-model="value"
                  filterable
                  placeholder="please select"
                  class="popoverSelect"
                  size="mini"
                >
                  <el-option
                    v-for="item in options"
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
                  v-model="value1"
                  type="daterange"
                  range-separator="——"
                  start-placeholder="start date"
                  end-placeholder="end date"
                  class="popoverSelect"
                  size="mini"
                >
                </el-date-picker>
              </div>
              <div style="text-align: right; margin-top: 40px">
                <el-button
                  size="mini"
                  type="info"
                  icon="el-icon-close"
                  @click="visiblepopover = false"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-check"
                  size="mini"
                  @click="addData"
                ></el-button>
              </div>
              <div class="btnsearch" slot="reference">
                <img src="../../assets/img/search.png" alt="" />
              </div>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="switchcon">
        <elementview v-if="visible == 1" ref="elementviewchild"></elementview>
        <manuScriptview v-if="visible == 2"></manuScriptview>
      </div>
    </div>
    <!-- echarts第二部分 -->
    <div class="content contentexceptfir contentlast">
      <div class="elementhead">
        <div class="targeta">
          <span class="seatar">Industry dynamism</span>
          <span class="seatar1"
            >TOP10 of national industry dynamism (recent 7 days)</span
          >
          <div class="switch">
            <i
              class="el-icon-picture-outline"
              :class="{ switchselected: visiblesec == 1 }"
              @click="swichchangesec(1)"
            ></i>
            <i
              class="el-icon-s-grid"
              :class="{ switchselected: visiblesec == 2 }"
              @click="swichchangesec(2)"
            ></i>
            <i class="el-icon-download"></i>
            <el-popover
              placement="bottom-end"
              width="450"
              trigger="click"
              v-model="visiblepopoversec"
              popper-class="popoverStyle"
            >
              <div class="popoverLine"></div>
              <div class="popoverSelectGroup">
                <span>Regional screening</span>
                <el-select
                  v-model="valuesec"
                  filterable
                  placeholder="please select"
                  class="popoverSelect"
                  size="mini"
                >
                  <el-option
                    v-for="item in optionssec"
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
                  v-model="value1sec"
                  type="daterange"
                  range-separator="——"
                  start-placeholder="start date"
                  end-placeholder="end date"
                  class="popoverSelect"
                  size="mini"
                >
                </el-date-picker>
              </div>
              <div style="text-align: right; margin-top: 40px">
                <el-button
                  size="mini"
                  type="info"
                  icon="el-icon-close"
                  @click="visiblepopoversec = false"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-check"
                  size="mini"
                  @click="addDatasec"
                ></el-button>
              </div>
              <div class="btnsearch" slot="reference">
                <img src="../../assets/img/search.png" alt="" />
              </div>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="switchcon">
        <elementview1
          v-if="visiblesec == 1"
          ref="elementview1child"
        ></elementview1>
        <manuScriptview1 v-if="visiblesec == 2"></manuScriptview1>
      </div>
    </div>
  </div>
</template>

<script>
import searchHead from "../../views/merge/searchHead.vue";
import elementview from "../../views/merge/element.vue"; //折线
import manuScriptview from "../../views/merge/manuScript.vue"; //折线表格
import elementview1 from "../../views/merge/element1.vue"; //柱状图
import manuScriptview1 from "../../views/merge/manuScript1.vue"; //柱状图表格
import volumeLeft from "../../views/merge/volumeLeft.vue";
import volumeRight from "../../views/merge/volumeRight.vue";
import mapFocus from "../../views/merge/mapFocus.vue";
export default {
  components: {
    searchHead,
    elementview,
    manuScriptview,
    elementview1,
    manuScriptview1,
    volumeLeft,
    volumeRight,
    mapFocus,
  },
  data() {
    return {
      volumeLeftshow: true,
      volumeRightshow: true,
      volumeLeftRight: true,
      volumeRightLeft: true,
      visible: 1,
      visiblesec: 1,
      visiblepopover: false,
      visiblepopoversec: false,
      // 输入内容
      valuetext: "",
      // 条目
      value: [],
      valuesec: [],
      options: [
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
      optionssec: [
        {
          value: "选项1",
          label: "111111",
        },
        {
          value: "选项2",
          label: "111111",
        },
        {
          value: "选项3",
          label: "111111",
        },
        {
          value: "选项4",
          label: "111111",
        },
      ],
      value1: "", //日期
      value1sec: "", //日期
    };
  },
  methods: {
    swichchange(num) {
      this.visible = num;
    },
    swichchangesec(num) {
      this.visiblesec = num;
    },
    addData() {
      this.visiblepopover = false;
      if (this.visible == 1 && this.value && this.value1) {
        this.$refs.elementviewchild.btnclick();
      }
    },
    addDatasec() {
      this.visiblepopoversec = false;
      if (this.visiblesec == 1 && this.valuesec && this.value1sec) {
        this.$refs.elementview1child.btnclicksec();
      }
    },
  },
};
</script>

<style scoped>
.content {
  padding: 20px 16px;
  box-sizing: border-box;
  background: #fff;
}
.contentexceptfir {
  margin-top: 30px;
}
.contentlast {
  margin-bottom: 100px;
}
.contentsecPart {
  display: flex;
}
.targeta {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 40px;
}
.volumeLeftshow {
  width: 100%;
  height: 513px;
}
.volumeRightshow {
  width: 100%;
  height: 513px;
}
.volumeLeftRight {
  width: 42%;
}
.volumeRightLeft {
  width: 56%;
  margin-left: 2%;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.switch {
  margin-left: auto;
  display: flex;
}
.switch .el-button {
  padding: 0;
  border: none;
}
.el-icon-picture-outline,
.el-icon-s-grid,
.el-icon-download {
  font-size: 25px;
  cursor: pointer;
}
.el-icon-s-grid {
  margin-right: 30px;
}
.el-icon-download {
  margin-right: 10px;
  color: #409eff;
}
.el-icon-picture-outline,
.el-icon-s-grid {
  color: #409eff;
  background: #fff;
  border: 1px solid #ccc;
}
.switchselected {
  color: #fff;
  background: #409eff;
}
.btnsearch {
  display: inline-block;
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
.enterprise {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}
.enterprise span {
  font-size: 14px;
  font-family: "Arial Normal", "Arial";
  color: #666;
}
.el-input {
  width: 152px;
}
.el-select {
  width: 152px;
  display: inline-block;
  position: relative;
}
.seatar {
  font-weight: 700;
  font-size: 16px;
  color: #389afe;
}
.seatar1 {
  font-size: 13px;
  color: #ccc;
  margin-left: 50px;
}
.switchcon {
  margin-top: 20px;
  height: 425px;
}
</style>
<style>
.popoverStyle > .popper__arrow::after {
  border-bottom-color: #409eff !important;
}
</style>