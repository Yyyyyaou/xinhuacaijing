<template>
  <div>
    <div class="elementhead">
      <div class="targeta">
        <span class="seatar">检索目标</span>
        <el-radio-group v-model="visible" class="switch">
          <el-radio :label="1">标签</el-radio>
          <el-radio :label="2">稿件</el-radio>
        </el-radio-group>
        <div class="enterprise">
          <span>企业：</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
        <div class="enterprise">
          <span>行业:</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
        <div class="enterprise">
          <span>情感:</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
        <div class="enterprise">
          <span>大洲:</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
        <div class="enterprise">
          <span>国家:</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
        <div class="enterprise">
          <span>媒体:</span>
          <el-select v-model="value">
            <el-option value="不限"></el-option>
          </el-select>
        </div>
      </div>
      <div class="search">
        <div class="searchL">
          <span>搜索</span>
          <el-select
            v-model="valuetext"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
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
        <div class="timeR">
          <span>请选择时间</span>
          <div class="block">
            <el-date-picker
              v-model="value"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="switchcon">
      <elementview v-if="visible == 1"></elementview>
      <manuScriptview v-if="visible == 2"></manuScriptview>
    </div>
  </div>
</template>

<script>
import elementview from "../../views/merge/element.vue";
import manuScriptview from "../../views/merge/manuScript.vue";
export default {
  components: {
    elementview,
    manuScriptview,
  },
  data() {
    return {
      visible: 1,
      value1: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      // 输入内容
      valuetext: "",
      // 条目
      value: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
.elementhead {
  height: 180px;
}
.targeta {
  display: flex;
  align-items: center;
  height: 100px;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.searchL,
.timeR {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.searchL .el-select .el-select__tags {
  top: 25%;
}
.switch {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50px;
  margin: 0 20px;
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
  line-height: 60px;
}
.timeR .block,
.searchL .el-select {
  width: 84%;
}
.timeR .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
.switchcon {
  margin-top: 20px;
}
</style>
