<template>
  <el-row class="container">
    <header>
      <img src="../../../assets/logo-icon.png" class="logo-icon" alt="logo">
      <span>数据库备份系统</span>
      <img src="" class="user-icon" alt="user">
    </header>
    <div class="side-bar">
      <el-menu class="el-menu-vertical-demo" text-color="#fff" :collapse="isCollapse">
        <el-menu-item index="/index" @click="jumpIndex">
          <i class="el-icon-date"></i>
          <span slot="title">备份计划</span>
        </el-menu-item>
        <el-menu-item index="/manual" @click="jumpManual">
          <i class="el-icon-document"></i>
          <span slot="title">用户手册</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="deploy-header">
        <span>配置备份计划</span> 
        <span><i class="el-icon-back"></i>返回上级</span>
      </div>
      <div class="deploy-content">
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabel">
          <el-form-item label="备份计划名">
            <el-input v-model="formLabel.planName"></el-input>
          </el-form-item>
          <el-form-item label="数据库IP">
            <el-input v-model="formLabel.dbAddress"></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input v-model="formLabel.port"></el-input>
          </el-form-item>
          <el-form-item label="数据库用户名">
            <el-input v-model="formLabel.dbUser"></el-input>
          </el-form-item>
          <el-form-item label="数据库密码">
            <el-input v-model="formLabel.dbPassword"></el-input>
          </el-form-item>
          <el-form-item label="备份周期" prop="region">
            <el-select v-model="formLabel.cycle" placeholder="请选择备份周期">
              <el-option label="周期一" value="shanghai"></el-option>
              <el-option label="周期二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-row>
</template>
<script>
  export default {
    name: 'create',
    data () {
      return {
        isCollapse: true,
        labelPosition: 'right',
        formLabel: {
          planName: '',  // 备份计划名
          dbAddress: '', // 数据库IP
          port: '', // 端口
          dbUser: '', // 数据库用户名
          dbPassword: '', // 数据库密码
          cycle: '' // 备份周期
        }
      }
    },
    methods: {
      jumpIndex() {
        this.$router.push('/index');
      },
      jumpManual() {
        this.$router.push('/manual');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  body {
    margin: 0 !important; 
  }
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 60px;
    z-index: 2;
    background-color: #22abc8;
    box-shadow: 0px 1px 3px #229eb0;
  }
  .logo-icon {
    margin-left: 57px;
    margin-right: 28px;
  }
  .user-icon {
    position: absolute;
    right: 57px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: aliceblue;
  }
  /* 侧栏 */
  .side-bar {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 65px;
    box-shadow: -4px -2px 5px #229eb0;
  }
  .el-menu {
    padding-top: 57px;
    background-color: #33abc8;
  }
  .el-menu-item {
    color: #fff !important;
    font-size: 16px;
  }
  .el-menu-item i {
    color: #fff;
  }
  .el-menu-item:hover {
    background-color: #0292b0;;
  }
  .el-menu-item.is-active {
    color: #fff;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }

  /* content */
  .content {
    margin-top: 60px;
    margin-left: 65px;
    padding: 40px 40px 0 40px;
  }
  /* 配置 */
  .deploy-header {
    display: flex;
    justify-content: space-between;
  }
  .deploy-content {
    margin-top: 16px;
    padding: 40px;
    padding-left: 160px;
    border: 1px solid #dcdfe6;
    box-shadow: 0px 1px 2px #dcdfe6;
  }
  .el-form-item {
    margin-bottom: 0px;
  }
  .el-input {
    width: 50%;
  }
</style>
