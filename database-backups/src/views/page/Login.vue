<template>
  <el-row class="login">
    <el-col :span="8" class="left-bg">
      <img src="../../assets/backpic.png" alt="pic" class="pic">
    </el-col>
    <el-col :span="16" class="right-bg">
      <div class="logo-contain">
        <img src="../../assets/logo-icon.png" alt="logo">
        <span>数据库备份系统</span>
      </div>
      <div class="login-contain">
        <el-input type="text" placeholder="请输入用户名" prefix-icon="iconfont login-user-o" v-model="account"></el-input>
        <el-input type="password" placeholder="请输入密码" prefix-icon="iconfont login-key" v-model="password"></el-input>
        <a href="javascript:;" class="login-in" @click="login">登录</a>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      // 登陆逻辑
      login: function () {
        if (this.account !== '' && this.password !== '') {
          this.toLogin();
        };
      },
      // 登陆请求
      toLogin: function () {
        this.$router.push('/index');
        // this.$http.post(url,{
        //   param: {
        //     account: this.account,
        //     password: this.password
        //   }
        // })
        // .then(function(response){
        //   if(response.data.code == 1){
        //     // 登陆状态15天后过期
        //     let expireDays = 1000 * 60 * 60 * 24 * 15;
        //     this.setCookie('session', response.data.session, expireDays);
        //     this.$router.push('/index');
        //   }
        // })
        // .catch(function(error){
        //   // 请求失败处理
        // })
      }
    }
  }
</script>
<style>
  html, body, #app, .login {
    height: 100%;
    margin: 0;
  }
  .left-bg, .right-bg {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .left-bg {
    background-color: #22abc8;
  }
  .pic {
    position: absolute;
    left: 8.333333%;
    width: 29.166666%;
    height: 86.7%;
  }
  .logo-contain {
    position: absolute;
    top: 1.5%;
    right: 3%;
    display: flex;
    align-items: center;
  }
  .logo-contain > span {
    margin-left: 22px;
  }
  /*denglu*/
  .login-contain {
    margin-left: 25%;
    width: 31.25%;
  }
  .el-input {
    margin-bottom: 20px;
  }
  .login-contain > .el-input > input {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    width: 100%;
    font-size: 14px;
    border: 1px solid #8eebff;
    border-radius: 3px;
  }
  .login-in {
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    border-radius: 3px;
    color: white;
    background-color: #22abc8;
  }
</style>