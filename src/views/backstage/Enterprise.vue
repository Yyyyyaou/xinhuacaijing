<template>
  <div class="manList">
    <div class="head">
      <el-button
        style="padding: 12px"
        type="primary"
        icon="el-icon-back"
      ></el-button>
      <div class="all">
        <el-checkbox
          class="check-page-all"
          v-model="checkPageAll"
          @change="checkPageAllEv($event)"
          >全选</el-checkbox
        >
      </div>
      <div class="delete" @click="del">删除</div>
      <div class="time">
        <span>选择时间:</span>
        <!-- {{value1}} -->
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
        <span>搜索:</span>
        <el-select
          v-model="value"
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
      <el-button type="primary" icon="el-icon-download"></el-button>
      <el-button type="primary">添加根标签</el-button>
    </div>
    <div class="app-content">
      <div class="role-details inside-base">
        <div class="inside-base-main clearfix">
          <!-- 中间内容 -->
          <div class="inside-base-cont">
            <div class="role-cont clearfix">
              <span>权限：</span>
              <div>
                <!--  -->
                <el-table
                  ref="table"
                  :data="tableData"
                  style="width: 100%; margin-bottom: 20px"
                  row-key="id"
                  border
                  :indent="10"
                  :select-on-indeterminate="true"
                  :default-expand-all="true"
                  :tree-props="{
                    children: 'childList',
                  }"
                >
                  <el-table-column type="selection" width="55">
                    <template slot-scope="scope">
                      <el-checkbox
                        v-model="scope.row.pageCheck"
                        @change="pageCheckEv(scope)"
                      ></el-checkbox>
                    </template>
                  </el-table-column>
                  <el-table-column label="标签名称">
                    <template slot-scope="scope">
                      <span>{{ scope.row.tagname }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="修改时间">
                    <template slot-scope="scope">
                      <span>{{ scope.row.crateTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="标签规则">
                    <template slot-scope="scope">
                      <span>{{ scope.row.rules }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="状态">
                    <template slot-scope="scope">
                      <el-switch
                        class="main-switch"
                        v-model="scope.row.state"
                        inactive-text="off"
                        active-text="on"
                      ></el-switch>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <button @click="addOneRow(scope.row, scope.$index, 'middle')">添加</button>
                      <button @click="handleDelete(scope.row, scope.$index, 'last')">删除</button>
                      <button @click="editRow(scope.row, scope.$index)">修改</button>
                    </template>
                  </el-table-column>
                </el-table>
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
                    <el-form-item label="角色" prop="role">
                      <el-input
                        v-model="Form.role"
                        auto-complete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="描述">
                      <el-input v-model="Form.describe"></el-input>
                    </el-form-item>
                    <el-form-item
                      label="创建日期"
                      :picker-options="pickerOptions"
                    >
                      <div>
                        <el-date-picker
                          v-model="Form.data"
                          type="date"
                          placeholder="选择日期"
                          format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd"
                        ></el-date-picker>
                      </div>
                    </el-form-item>
                    <el-form-item label="状态">
                      <el-switch
                        class="main-switch"
                        v-model="Form.state"
                        inactive-text="off"
                        active-text="on"
                      ></el-switch>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click.native="handleCancel('Form')"
                      >取消</el-button
                    >
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
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
  name: "RoleDetails",
  data() {
    return {
      //弹窗
      titleMap: {
        addEquipment: "新增",
        editEquipment: "编辑",
      },
      //新增和编辑弹框标题
      dialogStatus: "",
      Form: {
        id: 0,
        tagname: "", // 页面分类
        crateTime: "",
        rules: "",
        pageCheck: false, // 是否可查看页面
        // 开关
        state: false,
      },
      editFormRules: {
        role: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        desc: [{ required: true, message: "请输入商品描述", trigger: "blur" }],
      },
      FormVisible: false,
      addBtnshow: false,
      editBtnshow: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      // 日期
      value1: "",
      // 下拉框
      value: [],
      options: [],
      selectAddLast: null,
      //表格
      msg: "",
      checkPageAll: false,
      tableData: [
        {
          id: 1, // id
          tagname: "xxx页面", // 页面分类
          crateTime: "2022.11.11 08:08:00",
          rules:
            "公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
          pageCheck: false, // 是否可查看页面
          // 开关
          state: true,
        },
        {
          id: 2,
          tagname: "xxx页面",
          crateTime: "2022.11.11 08:08:00",
          rules:
            "公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
          pageCheck: false,
          // 开关
          state: true,
          fnList: ["新增", "删除", "修改", "查看"],
          fnCheck: {
            add: false,
            del: false,
            mod: false,
            check: false,
          },
          childList: [
            {
              p_id: 2,
              id: 31,
              tagname: "xxx页面",
              crateTime: "2022.11.11 08:08:00",
              rules:
                "公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
              pageCheck: false,
              // 开关
              state: true,
			  children:[
				{
					p_id: 18,
					id: 31,
					tagname: "xxx页面",
					crateTime: "2022.11.11 08:08:00",
					rules:
						"公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
					pageCheck: false,
					// 开关
					state: true,
				}
			  ]
            },
            {
              p_id: 2,
              id: 32,
              tagname: "xxx页面",
              crateTime: "2022.11.11 08:08:00",
              rules:
                "公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
              pageCheck: false,
              // 开关
              state: true,
              fnList: ["新增", "删除", "修改", "查看"],
              fnCheck: {
                add: false,
                del: false,
                mod: false,
                check: false,
              },
              childList: [
                {
                  p_id: 32,
                  id: 33,
                  // 标签名称
                  tagname: "xxx页面",
                  // 创建时间
                  crateTime: "2022.11.11 08:08:00",
                  // 规则
                  rules:
                    "公司名称工商变更登记+变更公司名称+关于公司名称*变更+关于变更名称",
                  // 选框
                  pageCheck: false,
                  // 开关
                  state: true,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
	// 
	getNewData() {
      this.$set(this.sourceData[0], "childNode", []);
      this.initData();
    },
	// 
    // 查找父级函数
    getParent(data2, nodeId2) {
      var arrRes = [];
      if (data2.length === 0) {
        if (nodeId2) {
          arrRes.push(data2);
        }
        return arrRes;
      }
      let rev = (data, nodeId) => {
        for (var i = 0, length = data.length; i < length; i++) {
          let node = data[i];
          if (node.id === nodeId) {
            arrRes.push(node);
            rev(data2, node.p_id);
            break;
          } else {
            if (node.childList) {
              rev(node.childList, nodeId);
            }
          }
        }
        return arrRes;
      };
      arrRes = rev(data2, nodeId2);
      return arrRes;
    },
    /**
     * 页面选择
     */
    // 全部删除
    del() {
      this.tableData = [];
    },
    // 在树表每次数据变化时候 新增 删除 编辑  都需要设置出新的状态 判断是中间层 而没有子集
    // checkEveryItem (){
    //   // 这一步是找到空的中间层 需要添加页
    //   let noChildAndNoRate = []
    //   function checkIsNeedChild (arr, ruleName) {
    //     console.log(arr,ruleName);
    //     // for (let j = 0; j < arr.length; j++) {
    //     //   const element = arr[j]
    //     //   if (element.childList.length == 0) {
    //     //     if (element.strObj == null || element.strObj == 'null') {
    //     //       element['isNeedLast'] = true
    //     //       noChildAndNoRate.push({ cantName: ruleName.trim() + '/' + element.conditionName.trim() })
    //     //     } else {
    //     //       element['isNeedLast'] = false
    //     //     }
    //     //   } else {
    //     //     element['isNeedLast'] = false
    //     //     checkIsNeedChild(element.childList, ruleName.trim() + '/' + element.conditionName.trim())
    //     //   }
    //     // }
    //   }
    //   checkIsNeedChild(this.tableData, '')
    //   console.log('中间层的子集为空也就是没末梢', noChildAndNoRate)
    // },
    //点击关闭dialog
    handleClose(done) {
      //  done();
      //  location.reload();
      this.FormVisible = false;
    },
    // 新增
    addOneRow(row, index, farOrSon) {
      console.log(farOrSon);
      this.FormVisible = true;
      if (row.childList == undefined) {
        this.Form = {
          tagname: "", // 页面分类
          crateTime: "",
          rules: "",
          pageCheck: false, // 是否可查看页面
          // 开关
          state: false,
        };
		this.dialogStatus = "addEquipment";
		this.addBtnshow = true;
		this.editBtnshow = false;
      }
    },
    // 点击确定新增
    confirmAdd() {
      // this.users = this.users || []
      this.tableData.push({
        role: this.Form.role,
        describe: this.Form.describe,
        reserve: this.Form.reserve,
        data: this.Form.data,
        desc: this.Form.desc,
      });
      this.FormVisible = false;
    },
    // 取消
    //点击取消
    handleCancel(formrole) {
      this.FormVisible = false;
    },
	// 删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
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
    // 操作删除
    // delRow(row, index) {
    //   console.log(row, index);
    //   this.$confirm("确认删除该条件及下级条件?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.deleteTable(row, index, this.tableData);
    //       // 每次添加编辑删除树表需要 重新计算出新属性状态
    //       this.checkEveryItem();
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除",
    //       });
    //     });
    //   // 删除行
    //   let delArr = [];
    //   function dg(data) {
    //     for (let i in data) {
    //       // 过滤当前新增的数据
    //       if (!data[i].add) {
    //         delArr.push(data[i].id);
    //       }
    //       if (data[i].childList) {
    //         dg(data[i].childList);
    //       }
    //     }
    //   }
    //   dg([row]);
    //   // 删除
    // },
    // 总选框事件
    checkPageAllEv(item) {
      let checkAll = (data, checked) => {
        for (let x of data) {
          x.pageCheck = checked;
          if (x.childList) {
            checkAll(x.childList, checked);
          }
        }
      };
      if (item === true) {
        checkAll(this.tableData, true);
      } else {
        checkAll(this.tableData, false);
      }
    },
    // 遍历json数据
    isCheckAllEv(data) {
      let isCheckAll = true;
      let fn = (data) => {
        for (let x of data) {
          if (x.pageCheck === false) {
            isCheckAll = false;
            return isCheckAll;
          }
          if (x.childList) {
            fn(x.childList);
          }
        }
      };
      fn(data);
      console.log(isCheckAll);
      return isCheckAll;
    },
    // 子选框事件
    pageCheckEv(scope) {
      // 如果有子项，则子项的选框选择跟当前一致
      if (scope.row.childList) {
        this.handleCheckAll(scope.row, scope.row.pageCheck);
      }
      // 查找父级选框
      this.getParent(this.tableData, scope.row.id).forEach((item, i) => {
        if (!item.childList) {
          item.pageCheck = scope.row.pageCheck;
        } else {
          var num = 0;
          item.childList.forEach((item, i) => {
            if (item.pageCheck === true) {
              num += 1;
            }
          });
          if (num === item.childList.length) {
            item.pageCheck = true;
          } else {
            item.pageCheck = false;
          }
        }
      });

      // 是否所有子项都已经勾选
      if (this.isCheckAllEv(this.tableData) === true) {
        this.checkPageAll = true;
      } else {
        this.checkPageAll = false;
      }
    },
    handleCheckAll(row, checked) {
      row.pageCheck = checked;
      if (row.childList) {
        let that = this;
        row.childList.forEach((element, i) => {
          that.handleCheckAll(row.childList[i], checked);
        });
      }
    },
    /**
     * 功能选择
     */
    // 子选框事件
    fnCheckEv(scope, type) {
      // 如果有子项，则子项的选框选择跟当前一致
      if (scope.row.childList) {
        this.handleFnAll(scope.row, scope.row.fnCheck[type], type);
      }
      // 查找父级选框
      this.getParent(this.tableData, scope.row.id).forEach((item, i) => {
        if (!item.childList) {
          item.fnCheck[type] = scope.row.fnCheck[type];
        } else {
          var num = 0;
          item.childList.forEach((item, i) => {
            if (item.fnCheck[type] === true) {
              num += 1;
            }
          });
          if (num === item.childList.length) {
            item.fnCheck[type] = true;
          } else {
            item.fnCheck[type] = false;
          }
        }
      });
    },
    handleFnAll(row, fnCheck, type) {
      row.fnCheck[type] = fnCheck;
      if (row.childList) {
        let that = this;
        row.childList.forEach((element, i) => {
          that.handleFnAll(row.childList[i], fnCheck, type);
        });
      }
    },
    /**
     * 权限选择
     */
    // 权限：全部、自己
    // 子选框事件
    dataCheckEv(scope, type) {
      let temp = scope.row.dataCheck[type];
      for (let x in scope.row.dataCheck) {
        scope.row.dataCheck[x] = false;
      }
      scope.row.dataCheck[type] = temp;
      // 如果有子项，则子项的选框选择跟当前一致
      if (scope.row.childList) {
        this.handleDataAll(scope.row, scope.row.dataCheck[type], type);
      }
      // 查找父级选框
      this.getParent(this.tableData, scope.row.id).forEach((item, i) => {
        for (let x in item.dataCheck) {
          item.dataCheck[x] = false;
        }
        if (!item.childList) {
          item.dataCheck[type] = temp;
        } else {
          var num = 0;
          item.childList.forEach((item, i) => {
            if (item.dataCheck[type] === true) {
              num += 1;
            }
          });
          if (num === item.childList.length) {
            item.dataCheck[type] = true;
          } else {
            item.dataCheck[type] = false;
          }
        }
      });
    },
    handleDataAll(row, dataCheck, type) {
      for (let x in row.dataCheck) {
        row.dataCheck[x] = false;
      }
      row.dataCheck[type] = dataCheck;
      if (row.childList) {
        let that = this;
        row.childList.forEach((element, i) => {
          that.handleDataAll(row.childList[i], dataCheck, type);
        });
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
.head {
  display: flex;
  align-content: center;
  align-items: center;
  height: 50px;
}
.all {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  color: #555555;
  text-align: center;
  margin: 0 12px;
}
.delete {
  font-family: "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #d9001b;
  text-align: center;
  margin: 0 20px;
}
.time,
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 29%;
}
.search .el-select {
  width: 85%;
}
.search {
  margin: 0 15px;
}
.el-table .el-table__row--level-0 {
  background: pink !important;
}

/*  */
.table_expand_item {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  margin-top: 50px;
}
.tag {
  display: inline-block;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  color: #08b731;
  line-height: 30px;
  background-color: rgba(175, 240, 181, 1);
  border-radius: 10px;
}
.eil {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>