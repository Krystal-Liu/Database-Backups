<template>
  <el-row class="container">
    <header>
      <img src="../../assets/logo-icon.png" class="logo-icon" alt="logo">
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
    <div class="content"></div>
  </el-row>
</template>
<script>
  export default {
    name: 'create',
    data () {
      return {
        isCollapse: true,
        step: 1
      }
    },
    methods: {
      jumpIndex() {
        this.$router.push('/index');
      },
      jumpManual() {
        this.$router.push('/manual');
      }
    },
    watch: {
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
    padding: 80px 80px 0 80px;
  }
</style>