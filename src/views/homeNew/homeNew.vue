<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><AsideNew /></el-aside>
      <el-main style="padding: 30px 30px 0"
        ><div><router-view /></div
      ></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideNew from "../../components/common/asideNew";
import Header from "../../components/common/cheader.vue";
export default {
  components: {
    AsideNew,
    Header,
  },
};
</script>

<style scoped>
.container {
  background: #f2f6f9;
}
.el-container {
  height: 100vh;
  overflow: hidden;
  background: #f2f6f9;
}
.el-header {
  padding: 0;
}
.el-aside {
  height: 100vh;
  overflow: hidden;
  box-shadow: 0px 8px 13px 0px #000;
}
.el-main {
  padding: 30 50px 0;
  
  box-sizing: border-box;
  height: calc(100vh - 30px);
  overflow: scroll;
}
.content {
  /* padding: 20px 16px;
  box-sizing: border-box;
  background: #fff; */
}
/* 修改滚动条样式 */
.el-main::-webkit-scrollbar {
  width: 3px;
  /*设置滚动条的宽度*/
}
/* 滚动区域的样式 */
.el-main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /*设置滚动条的圆角*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  /*设置内阴影*/
  background: rgb(81, 193, 238, 0.2);
  /*设置滚动条的颜色*/
}
/* 滚动条的背景样式 */
.el-main::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
  border-radius: 0;
}
/*滚动条样式*/
textarea::-webkit-scrollbar {
  width: 4px;
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>