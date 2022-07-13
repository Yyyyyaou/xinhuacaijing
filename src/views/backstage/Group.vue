<template>
  <div class="user" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
    <div class="userHead">
      <div class="userHeadL">
        地位:
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div>
          <el-input
            placeholder="请输入关键字"
            v-model="input3"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="userHeadR">
        <el-button type="primary" size="small" @click="addRow(users)"><i class="el-icon-circle-plus-outline" style="margin-right:10px;"></i>新增</el-button>
      </div>
    </div>
    <div class="userList">
      <el-table
        :data="users"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        :header-cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column label="数" align="center" type="index" width="100"></el-table-column>
        <el-table-column label="英文名称" align="center"  prop="EN" width="300"></el-table-column>
        <el-table-column label="中文名称" align="center"  prop="ZN" width="300"></el-table-column>
        <el-table-column label="创建时间" align="center"  prop="time" width="300"></el-table-column>
        <el-table-column label="州" align="center" width="235">
          <template slot-scope="scope">
            <el-switch class="main-switch" v-model="scope.row.state"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="149">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, users)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top:80px;"
        background
        layout="prev, pager, next"
        :total="10">
      </el-pagination>
    </div>
    <!--新增/编辑界面-->
    <el-dialog
      :title="titleMap[dialogStatus]"
      :visible.sync="FormVisible"
      :close-on-click-modal="false"
      class="edit-form"
      border
      :before-close="handleClose"
    >
      <el-form
        :model="Form"
        label-width="80px"
        :rules="editFormRules"
        ref="Form"
      >
        <el-form-item label="英文名称" prop="EN">
          <el-input v-model="Form.EN" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名称">
          <el-input v-model="Form.ZN"></el-input>
        </el-form-item>
        <el-form-item label="创建日期" :picker-options="pickerOptions">
          <div>
            <el-date-picker
              v-model="Form.time"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="州">
          <el-switch class="main-switch" v-model="Form.state"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel('Form')">取消</el-button>
        <el-button
          v-if="addBtnshow"
          type="primary"
          @click.native="confirmAdd('Form')"
          >确定</el-button
        >
        <el-button
          v-if="editBtnshow"
          type="primary"
          @click.native="confirmEdit('Form')"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
var _index;
export default {
  data() {
    return {
      // 加载
      loading: true,
      input3:"",
      value:"选项1",
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      // 
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      titleMap: {
        addEquipment: "新增",
        editEquipment: "编辑",
      },
      //新增和编辑弹框标题
      dialogStatus: "",
      Form: {
        id: 0,
        EN: "",
        ZN: "",
        time: "",
        state: true,
      },
      users: [
        {
          EN:'ABC',
          ZN:'啥',
          time:'2022-01-20',
          state: true,
        },
        { 
          EN:'ABC',
          ZN:'啥',
          time:'2022-01-20',
          state: true,
        },
      ],
      editFormRules: {
        EN: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        ZN: [{ required: true, message: "请输入中文名称", trigger: "blur" }],
      },
      FormVisible: false,
      currentRow: [],
      ids: [],
      listLoading: "",
      addBtnshow: false,
      editBtnshow: false,
      editLoading: "",
      dialogStatus: "",
      selected: [],
      editid: "",
      searchForm: [],
    };
  },
  methods: {
    selsChange: function (val) {
      //点击选中
      console.log(val);
      this.selected = val;
    },
    // 点击新增
    addRow(users, event) {
      this.FormVisible = true;
      // this.Form = {
      //   id: 0,
      //   EN: "",
      //   ZN: "",
      //   time: "",
      //   state: false,
      // };
      this.dialogStatus = "addEquipment";
      this.addBtnshow = true;
      this.editBtnshow = false;
    },
    // 点击确定（新增）
    confirmAdd() {
      // this.users = this.users || []
      // this.users.push({
      //   EN: this.Form.EN,
      //   ZN: this.Form.ZN,
      //   // reserve: this.Form.reserve,
      //   time: this.Form.time,
      //   state: this.Form.state,
      // });
      // storage.set('users', this.users);
      this.FormVisible = false;
    },
    //点击编辑
    handleEdit: function (index, row) {
      this.FormVisible = true;
      this.Form = Object.assign({}, row); //这句是关键！！！
      _index = index;
      console.log(index);
      console.log(_index);

      this.dialogStatus = "editEquipment";
      this.addBtnshow = false;
      this.editBtnshow = true;
    },
    // 点击确定（编辑）
    confirmEdit() {
      // var editdata = _index;
      // console.log(editdata);
      // this.users[editdata].EN = this.Form.EN;
      // this.users[editdata].ZN = this.Form.ZN;
      // this.users[editdata].time = this.Form.time;
      // this.users[editdata].state = this.Form.state;
      this.FormVisible = false;
    },
    //点击关闭dialog
    handleClose(done) {
      //  done();
      //  location.reload();
      this.FormVisible = false;
    },
    //点击取消
    handleCancel(formEN) {
      this.FormVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确定删除此条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            // delete:row.splice(index, 1),
            type: "success",
            message: "删除成功!",
            delete: row.splice(index, 1), //splice 删除对象是数unfuntion组   如果是对象会出现错误  row.solice not is
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    removeUsers() {
      this.$confirm(
        "此操作将永久删除 " + this.selected.length + " 个用户, 是否继续?",
        "提示",
        { type: "warning" }
      )
        .then(() => {
          console.log(this.selected);
          var ids = [];
          //提取选中项的id
          $.each(this.selected, (i, users) => {
            ids.push(users.id);
          });
          // 向请求服务端删除
          //  var resource = this.$resource(this.url);
          resource
            .remove({ ids: ids.join(",") })
            .then((response) => {
              this.$message.success(
                "删除了" + this.selected.length + "个用户!"
              );
              this.getUsers();
            })
            .catch((response) => {
              this.$message.error("删除失败!");
            });
        })
        .catch(() => {
          this.$Message("已取消操作!");
        });
    },
  },
  created() {
    //   设置回调函数，进行1.5秒的loading动画显示
    setTimeout(() => {
      this.loading = false;
    }, 1500);
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
/* 开关 */
.main-switch{position: relative;}
.main-switch .el-switch__core{height: 24px; border-radius: 12px;}
.main-switch .el-switch__core:after{left: 4px;}
.main-switch.el-switch.is-checked .el-switch__core::after{margin-left: -20px;}
.main-switch .el-switch__core:after{top: 3px;}
.main-switch .el-switch__label{position: absolute; top: 0;}
.main-switch .el-switch__label--left{right: 0; color: #999; z-index: 1; margin-right: 8px;}
.main-switch .el-switch__label--right{left: 0; color: #fff; opacity: 0; margin-left: 8px;}
.main-switch.is-checked .el-switch__label--left{opacity: 0;}
.main-switch.is-checked .el-switch__label--right{opacity: 1;}
/* 开关 */
</style>