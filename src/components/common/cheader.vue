<template>
  <div class="header">
    <img src="../../assets/img/cheader.jpg" alt="">
    <!-- <div class="headerL">
      <img src="../../assets/img/u81.png" alt="logo" />
      <h4>“一带一路”信息服务平台后台管理系统</h4>
    </div>
    <div class="headerR">
      <el-collapse v-model="activeNames" @change="handleChange" class="Popup">
        <el-collapse-item class="welcome" :title="'欢迎！' + name" name="1">
          <div class="layui-btn" @click="changepPassword">修改密码</div>
          <div @click="exitLogin">退出登录</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-dialog
      :title="'修改密码'"
      :close-on-click-modal="false"
      :visible.sync="visible"
    >
      <el-form :model="dataForm" label-width="120px">
        <el-form-item label="原密码:" prop="pass">
          <el-input
            style="width: 300px"
            type="password"
            v-model="dataForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码:" prop="newpass">
          <el-input
            style="width: 300px"
            type="password"
            v-model="dataForm.newpass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:" prop="subpass">
          <el-input
            style="width: 300px"
            type="password"
            v-model="dataForm.subpass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "马冬梅",
      activeNames: ["1"],
      visible: false,
      dataForm: {
        pass: undefined,
        newpass: undefined,
        subpass: undefined,
      },
    };
  },
  methods: {
    submit() {
      this.visible = false;
    },
    cancel() {
      this.visible = false;
    },
    changepPassword() {
      this.visible = true;
    },
    handleChange(val) {
      console.log(val);
    },
    exitLogin() {
      this.$router.push("/");
    },
  },
  created() {},
};
</script>

<style scoped>
.header {
  background: #fff;
  display: flex;
  padding: 8px 20px;
  box-sizing: border-box;
  height: 60px;
  display: flex;
}
.header .headerL,
.header .headerR {
  width: 50%;
}
.headerL {
  display: flex;
  align-items: center;
}
.headerL h4 {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-size: 16px;
  margin-left: 18px;
}
.headerR {
  position: relative;
  cursor: pointer;
  text-align: right;
  line-height: 33px;
  text-decoration: underline;
}
.Popup {
  float: right;
  text-align: center;
  width: 120px;
  /* background: #fff; */
  background: pink;
}
.el-collapse-item__header {
  background: none;
}
.el-collapse {
  border: none;
}
.el-collapse-item__header {
  border: none;
  border-bottom: none;
}
.el-collapse-item__header i {
  display: none !important;
}
.el-icon-arrow-right:before {
  display: none;
}
.el-collapse-item__arrow.is-active {
  display: none;
}
.el-collapse-item__arrow {
  display: none;
}
.el-icon-arrow-right:before {
  display: none !important;
}
</style>