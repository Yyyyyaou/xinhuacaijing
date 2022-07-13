<template>
  <div class="main">
    <div class="Login">
      <div class="logo-login">
        <img src="../../assets/img/u19.png" alt="新华社" />
      </div>
      <div class="system-name">
        <p id="p1">“一带一路”信息服务平台</p>
        <p id="p2">后台管理系统</p>
      </div>
      <div class="login-dialog">
        <form action="">
          <div class="username">
            <input type="text" id="username" placeholder="请输入用户名称" />
          </div>
          <div class="password">
            <input type="password" id="password" placeholder="请输入用户密码" />
          </div>
          <div class="Tips" v-show="tipval">
            <i class="el-icon-warning"></i>
            {{ tip }}
          </div>
          <div class="btn">
            <div @click="Logintips">登录</div>
          </div>
        </form>
      </div>
      <div class="prompt" v-show="!isShow">
        <button @click="Noname">用户名或密码不正确</button>
        <button @click="Nonull">请填写用户名称</button>
        <button @click="Nopass">请填写登录密码</button>
        <button @click="successLog">正常登录成功</button>
      </div>
    </div>
    <footer>Copyright © en.imsilkroad.com, All Rights Reserved.</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 提示
      tip: "",
      // 提示框按钮
      isShow: true,
      // 提示框内容
      tipval: false,
    };
  },
  methods: {
    Logintips() {
      this.isShow = !this.isShow;
    },
    Noname() {
      this.tip = " 用户名或密码不正确";
      this.tipval = true;
    },
    Nonull() {
      this.tip = " 请填写用户账号";
    },
    Nopass() {
      this.tip = " 请填写登录密码";
    },
    successLog() {
      this.$router.push("/Home");
    },
  },
};
</script>

<style scoped>
.el-result__title {
  font-size: 14px;
}
.el-result {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  box-sizing: border-box;
  padding: 0;
}
.el-col-lg-6 {
  width: 0;
}
.el-col-sm-12 {
  width: 0;
}
.el-col-24 {
  width: 100%;
}
.el-icon-warning {
  width: 14px;
  height: 14px;
}
.el-result__icon svg {
  width: 14px;
  height: 14px;
}
.el-empty__bottom,
.el-result__title {
  margin-top: 0;
}
.el-result__title p{
  font-size: 14px;
}
.main {
  width: 100%;
  height: 100vh;
  background: url(../../assets/img/u0.png);
}
.Login {
  width: 350px;
  height: 420px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: -210px;
  background: #fff;
  border-radius: 5px;
  padding: 30px 22px 20px 22px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 4px 18px -8px #000;
  z-index: 1001;
}
.Tips {
  text-align: center;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  width: 300px;
  line-height: 40px;
  background: inherit;
  background-color: rgba(0, 0, 0, 0.4980392156862);
}
.prompt {
  position: absolute;
  width: 138px;
  height: 123px;
  background: #fff none repeat scroll 0% 0%;
  border: 1px solid #aaa;
  top: 370px;
  left: 90px;
}
.prompt button {
  cursor: pointer;
  margin: 3px;
  border: 1px solid #aaa;
  padding: 3px 4px 3px 4px;
  width: 96%;
  border-radius: 3px;
  font-family: arial;
  font-size: 12px;
  text-align: left;
  box-sizing: border-box;
}
.logo-login {
  width: 100%;
  text-align: center;
}
.logo-login img {
  width: 86px;
  height: 86px;
}
.system-name {
  color: #0067b1;
  text-align: center;
}
.system-name p:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

.system-name p:nth-child(2) {
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
}
.login-dialog {
  position: relative;
}
.login-dialog .username,
.login-dialog .password {
  position: relative;
  width: 100%;
  height: 35px;
  margin: 12px 0 10px 0;
  box-sizing: border-box;
}
.login-dialog .username::before,
.login-dialog .password::before {
  position: absolute;
  left: 10px;
  margin-top: 6px;
  content: "";
  width: 24px;
  height: 24px;
  display: inline-block;
}
.login-dialog .username::before {
  background: url(../../assets/img/u13.svg) no-repeat;
}
.login-dialog .password::before {
  background: url(../../assets/img/u14.svg) no-repeat;
}
.login-dialog .username input,
.login-dialog .password input {
  font-size: 14px;
  width: 100%;
  height: 100%;
  padding-left: 42px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;
  border: 1px solid #ccc;
}
.login-dialog .username input:focus,
.login-dialog .password input:focus {
  border-color: #0067b1;
}
.btn {
  position: absolute;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  background: #0067b1;
  top: 142px;
}
.btn div {
  font-size: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  background: none;
  outline: none;
  border: none;
}
footer {
  width: 100%;
  position: absolute;
  font-size: 12px;
  text-align: center;
  left: 0;
  bottom: 80px;
}
</style>