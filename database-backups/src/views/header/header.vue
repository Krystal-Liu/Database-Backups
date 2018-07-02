<template>
  <div>
    <header>
      <img src="../../assets/logo-icon.png" class="logo-icon" alt="logo">
      <span>数据库备份系统</span>
      <img src="" class="user-icon" alt="user">
    </header>
  </div>
</template>
<script>
  export default {
    name: 'v-header',
    data () {
      return {
      }
    },
  };
</script>
<style scoped>
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 60px;
    z-index: 9999;
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
</style>
