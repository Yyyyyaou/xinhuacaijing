<template>
  <div>
    <div class="content">
      <div class="elementhead">
        <div class="targeta">
          <span class="seatar">Industry public opinion trend</span>
          <span class="seatar1"
            >TOP5 industry public opinion trends (recent 30 days)</span
          >
          <el-radio-group v-model="visible" class="switch">
            <el-radio :label="1">标签</el-radio>
            <el-radio :label="2">稿件</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="switchcon">
        <elementview v-if="visible == 1"></elementview>
        <manuScriptview v-if="visible == 2"></manuScriptview>
      </div>
    </div>
    <div class="content contentexceptfir">
      <div class="switchcon">
        <elementview1></elementview1>
      </div>
    </div>
  </div>
</template>

<script>
import elementview from "../../views/merge/element.vue";
import elementview1 from "../../views/merge/element1.vue";
import manuScriptview from "../../views/merge/manuScript.vue";
export default {
  components: {
    elementview,
    manuScriptview,
    elementview1,
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
.content {
  padding: 20px 16px;
  box-sizing: border-box;
  background: #fff;
}
.contentexceptfir {
  margin-top: 30px;
}
.elementhead {
}
.targeta {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 40px;
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
  margin-left: auto;
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
  font-size: 18px;
  color: #389afe;
}
.seatar1 {
  font-size: 13px;
  color: #ccc;
  margin-left: 50px;
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
