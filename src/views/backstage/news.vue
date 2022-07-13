<template>
  <div
    class="user"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
  >
    <div class="head">
      <el-input v-model="input" placeholder="请输入关键字"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <!-- <div class="">
      <el-input
        placeholder="请输入内容"
        v-model="input"
      >
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
    </div> -->
    <!-- <div class="userList">
      <el-table
        :data="users"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :header-cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column
          label="序号"
          align="center"
          type="index"
          width="100"
        ></el-table-column>
        <el-table-column
          label="角色"
          align="center"
          prop="role"
          width="300"
        ></el-table-column>
        <el-table-column
          label="描述"
          align="center"
          prop="describe"
          width="300"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          align="center"
          prop="data"
          width="300"
        ></el-table-column>
        <el-table-column label="状态" align="center" width="235">
          <template slot-scope="scope">
            <el-switch
              class="main-switch"
              v-model="scope.row.state"
              active-text="on"
              inactive-text="off"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="149">
          <template slot-scope="scope">
            <el-button
              size="mini"
              round
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              round
              @click="handleDelete(scope.$index, users)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 80px"
        background
        layout="prev, pager, next"
        :total="10"
      >
      </el-pagination>
    </div> -->
  </div>
</template>
<script>
var _index;
export default {
  data() {
    return {
      // 加载
      loading: true,
      // 输入框
      input: "",
      //下拉框
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
      //下拉框
      value: "",
    };
  },
  created() {
    //设置回调函数，进行1.5秒的loading动画显示
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
<style scoped>
.head{
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.head .el-input{
  width: 42%;
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
.userHead {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.user {
  padding: 30px 50px;
}
.userHeadL {
  width: 42%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.userHeadR {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userList {
  margin-top: 40px;
}
.userList table {
  width: 100%;
  border: 1px solid #ccc;
}
.userList table thead {
  background: #f7f8fa;
}
.userList table tr {
  height: 50px;
  line-height: 50px;
}
.userList table tr td {
  border-right: 1px solid #ccc;
}
</style>