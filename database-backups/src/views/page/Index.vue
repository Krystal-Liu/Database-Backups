<template>
  <el-row class="container">
    <v-header :user="user"></v-header>
    <div class="side-bar">
      <el-menu default-active="/index" :router="true" class="el-menu-vertical-demo" text-color="#fff">
        <el-menu-item index="/index" :class="{'isActive': active}">
          <i class="el-icon-date"></i>
          <span slot="title">备份计划</span>  <!-- slot设置分组名 -->
        </el-menu-item>
        <el-menu-item index="/manual" :class="{'isActive': !active}">
          <i class="el-icon-document"></i>
          <span slot="title">用户手册</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <el-autocomplete placeholder="请输入内容" class="input-with-select inline-input" 
      v-model="state" 
      :fetch-suggestions="querySearch" 
      @select="handleSelect"
      clearable>
        <template slot="prepend">备份计划名称</template>
        <el-button slot="append">搜索</el-button>
      </el-autocomplete>
      <span class="create" @click="jumpCreate">创建备份计划</span>
      <el-table  :data="tableDatas.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%" :default-sort = "{prop: 'createTime', order: 'descending'}">
        <el-table-column prop="createTime" label="创建时间" width="160" sortable></el-table-column>
        <el-table-column prop="planName" label="备份计划名" width="120"></el-table-column>
        <el-table-column prop="dbAddress" label="备份数据库IP" width="160"></el-table-column>
        <el-table-column prop="port" label="备份数据库端口" width="120"></el-table-column>
        <el-table-column prop="lastTime" label="上一次备份时间" width="160"></el-table-column>
        <el-table-column prop="bpcycle" label="备份周期" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" class="operate" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">恢复</el-button>
            <el-button type="text" size="small">下载</el-button>
            <el-popover placement="bottom" width="190" trigger="hover">
              <div>
                <el-button type="text" size="small">修改备份计划配置</el-button>
                <el-button type="text" size="small">查看日志文件</el-button>
              </div>
              <!-- 点击更多出现包含上两个按钮下拉框 -->
              <el-button type="text" class="moreBut" size="small" slot="reference">更多</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
      @current-change="handleCurrentChange"
      :page-sizes="[5]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableDatas.length">
    </el-pagination>
    </div>
  </el-row>
</template>
<script>
  import header from '../header/header.vue';
  export default {
    data () {
      return {
        // 分页属性
        pagesize: 5,    // 每页显示多少条数据
        currentPage: 1, // 默认开始页面，当前页
        state: '',    // input内容
        active: true,
        user: {},
        tableDatas: [{
          createTime: '2018-6-30 00:30:10',
          planName: '1数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '123数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '13数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '45数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-7-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-5-30 00:30:10',
          planName: '123数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-3-30 00:30:10',
          planName: '13数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-8-30 00:30:10',
          planName: '45数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-4-30 00:30:10',
          planName: '123数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-4-30 00:30:10',
          planName: '13数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-9-30 00:30:10',
          planName: '45数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '1数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '123数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '13数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-6-30 00:30:10',
          planName: '45数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-7-30 00:30:10',
          bpcycle: '2天/次'
        }, {
          createTime: '2018-5-30 00:30:10',
          planName: '123数据库',
          dbAddress: '/ress/address',
          port: '8080',
          lastTime: '2017-6-30 00:30:10',
          bpcycle: '2天/次'
        }]
      };
    },
    components: {
      'v-header': header
    },
    created: function () {
      this.$router.push('/index');
    },
    methods: {
      jumpCreate() {
        this.$router.push('/index/create');
      },
      handleClick(index, row) {
        this.router.push()
        console.log(index, row);
      },  // 搜索框函数
      querySearch(queryString, cb) {
        var listDatas = [];
        for (let obj of this.tableDatas) {
          // 必须为每个对象增加value字段！！因为autocomplete只识别value字段并在下拉列中显示
          obj.value = obj.planName;
          listDatas.push(obj);
        }
        var results = queryString ? listDatas.filter(this.createFilter(queryString)) : listDatas;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (listData) => {
          return (listData.planName.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      // 分页切换页数
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.path === '/index') {
          this.active = true;
        } else if (to.path === '/manual') {
          this.active = false;
        }
      }
    }
  };
</script>
<style scoped>
  .container {
    height: 100%;
  }
  .side-bar {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 228px;
  }
  .el-menu {
    padding-top: 57px;
    background-color: #33abc8;
  }
  .el-menu-item [class^=el-icon-] {
    margin-right: 12px;
    font-size: 22px;
  }
  .el-menu-item {
    padding: 0 40px !important;
    font-size: 16px;
  }
  .el-menu-item i {
    color: #fff;
  }
  .el-menu-item:hover {
    background-color: #0292b0;;
  }
  .el-menu-item.is-active {
    background-color: #0292b0;
    color: #fff;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  /*主要内容*/
  .main {
    margin-top: 60px;
    margin-left: 228px;
    padding: 80px 80px 0 80px;
  }
  /*搜索框*/
  .el-select {
    width: 150px;
    height: 40px;
  }
  .el-autocomplete {
    margin-bottom: 0;
    width: 512px;
  }
  .el-input__inner {
    height: 42px;
  }
  .create {
    float: right;
    height: 40px;
    line-height: 40px;
  }
  .create > a{
    color: #22abc8;
  }
  /* 创建计划 */
  .create {
    color: #22abc8;
  }
  .create:hover {
    cursor: pointer;
  }
  /*表格*/
  .el-table {
    margin-top: 10px;
  }
  .el-pagination {
    margin-top: 10px;
  }
  /*更多操作*/
  .moreBut {
    margin-left: 10px;
  }
</style>