<template>
  <div>
    <div class="head">
      <el-button class="create" type="primary" plain>添加标签类型</el-button>
      <div class="time">
        <span>选择时间：</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="search">
        <span>搜索：</span>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" prop="date" label="标签类型" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="标签数量" width="180"></el-table-column>
        <el-table-column align="center" prop="address" label="修改类型"></el-table-column>
        <el-table-column align="center" prop="address" label="状态"></el-table-column>
        <el-table-column align="center" prop="address" label="操作"></el-table-column>
      </el-table>
    </div>
    <!-- 正负面标签 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      input3:"",
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
};
</script>

<style scoped>
.head {
  height: 40px;
  display: flex;
}
.head .create {
  margin-right: 2%;
}
.head .time {
  margin-right: 3%;
}
.head .search {
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head .search .el-input-group {
  width: 88%;
}
.table{
    margin-top: 50px;
}
</style>