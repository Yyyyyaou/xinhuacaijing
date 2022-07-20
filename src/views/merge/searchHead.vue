<template>
  <div>
    <div class="searchHead">
      <div class="numGroup">
        <i class="el-icon-data-line"></i>
        <div class="numGroupLine"></div>
        <div class="numGroupNum">
          <div>
            <span class="numGroupNumFir">3,500</span>
            <i class="el-icon-caret-top" v-if="dataup"></i>
            <i class="el-icon-caret-bottom" v-if="!dataup"></i>
            <span class="numGroupNumSec">88</span>
          </div>
          <p>The number of overseas websites monitored</p>
        </div>
      </div>
      <div class="numGroup">
        <i class="el-icon-office-building"></i>
        <div class="numGroupLine"></div>
        <div class="numGroupNum">
          <div>
            <span class="numGroupNumFir">3,500</span>
            <i class="el-icon-caret-top" v-if="dataup"></i>
            <i class="el-icon-caret-bottom" v-if="!dataup"></i>
            <span class="numGroupNumSec">88</span>
          </div>
          <p>The number of overseas websites monitored</p>
        </div>
      </div>
      <div class="numGroup">
        <i class="el-icon-document"></i>
        <div class="numGroupLine"></div>
        <div class="numGroupNum">
          <div>
            <span class="numGroupNumFir">3,500</span>
            <i class="el-icon-caret-top" v-if="dataup"></i>
            <i class="el-icon-caret-bottom" v-if="!dataup"></i>
            <span class="numGroupNumSec">88</span>
          </div>
          <p>The number of overseas websites monitored</p>
        </div>
      </div>
      <el-popover placement="bottom-end" width="200" trigger="click">
        <div class="popoverContent">
          <span class="popoverContentFir">Total station information data</span>
          <span>8,000,000</span>
        </div>
        <i class="el-icon-question" slot="reference"></i>
      </el-popover>
      <div class="searchElInput">
        <el-input
          placeholder="Please enter keywords separated by Spaces."
          prefix-icon="el-icon-search"
          v-model="searchInput"
        >
        </el-input>
      </div>
      <el-popover placement="bottom-end" width="600" trigger="click">
        <div>
          <span class="popoverSpan">
            The system mainly tracks the Chinese brand activities in more than
            200 overseas mainstream media, with the aim to reflect brand
            building overseas. The brands selected by Xinhua are in line with
            the development concept of "innovation, coordination, green
            development, openness and sharing" and the spirit of craftsmanship
            and entrepreneurship.</span
          >
        </div>
        <div slot="reference" class="moduleIntroduction">
          <div>Module</div>
          <div>Introduction</div>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataup: true,
      searchInput: "",
    };
  },
};
</script>

<style scoped>
.searchHead {
  display: flex;
  align-items: center;
}
.numGroup {
  margin-left: 30px;
  display: flex;
}
.numGroupLine {
  width: 2px;
  height: 100%;
  background: #409eff;
  margin: 0 10px 0 20px;
}
.numGroupNum {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #409eff;
}
.numGroupNum .numGroupNumFir {
  font-size: 22px;
  font-weight: 700;
}
.numGroupNum .numGroupNumSec {
  font-size: 12px;
}
.numGroupNum p {
  max-width: 140px;
  font-size: 12px;
  text-align: left;
}
.el-icon-question {
  margin-top: 40px;
  color: #409eff;
  cursor: pointer;
}
.el-icon-data-line,
.el-icon-office-building,
.el-icon-document {
  padding: 10px;
  font-size: 45px;
  color: #409eff;
  background: #409eff70;
}
.popoverContent {
  display: flex;
  align-items: center;
}
.popoverContent span {
  color: #409eff;
  font-size: 12px;
}
.popoverContent .popoverContentFir {
  width: 120px;
  margin-right: 10px;
}
.searchElInput {
  margin-left: 40px;
  width: 640px;
}
.searchElInput /deep/.el-input__inner {
  height: 60px;
  font-size: 18px;
  border-color: #409eff;
  padding-left: 60px;
}
.searchElInput /deep/.el-input__icon {
  font-size: 35px;
  color: #409eff;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 700;
}
.moduleIntroduction {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  color: #409eff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.popoverSpan {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0.6px;
  color: #555555;
}
</style>