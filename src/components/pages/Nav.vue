<template>
  <div class="nav-box">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title"> <i class="el-icon-news"></i>官方资讯 </template>
        <div class="a-content">
          <a href="javascript:;" @click="toOfficialNews">官方动态</a>
        </div>
        <div class="a-content">
          <a href="javascript:;" @click="toRecentTrip">最新行程</a>
        </div>
        
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title"> <i class="el-icon-user"></i>用户管理 </template>
        <div class="a-content">
          <a href="javascript:;" @click="toUserInfo">用户信息</a>
        </div>
        <div class="a-content">
          <a href="javascript:;" @click="toChart">图表可视化</a>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="el-icon-document"></i>信息管理
        </template>
        <div class="a-content">
          <a href="javascript:;" @click="toPersonalInfo">个人信息</a>
        </div>
        <div class="a-content">
          <a href="javascript:;" @click="toChangePass">修改密码</a>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="el-icon-shopping-cart-1"></i>商城管理
        </template>
        <div class="a-content">
          <a href="javascript:;" @click="toAlbum">签名专辑</a>
        </div>
        <div class="a-content">
          <a href="javascript:;" @click="toGoods">周边</a>
        </div>
        <div class="a-content">
          <a href="javascript:;" @click="toOther">其他</a>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "NavVc",
  data() {
    return {
      activeNames: ["1"],
    };
  },

  methods: {
    toOfficialNews() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "OfficialNews",
        });
      }, 1000);
    },
    toRecentTrip() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "RecentTrip",
        });
      }, 1000);
    },
    
    toUserInfo() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "UserInfo",
        });
      }, 1000);
    },
    toChart() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "Chart",
        });
      }, 1000);
    },
    toPersonalInfo() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "PersonalInfo",
        });
      }, 1000);
    },
    toChangePass() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "ChangePass",
        });
      }, 1000);
    },
    toAlbum() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "Album",
        });
      }, 1000);
    },
    toGoods() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "Goods",
        });
      }, 1000);
    },
    toOther() {
      this.$parent.$children[2].loading = true;
      setTimeout(() => {
        this.$parent.$children[2].loading = false;
        this.$router.push({
          name: "Other",
        });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.nav-box {
  height: 500px;
  width: 180px;
  overflow: auto;
}

.nav-box i {
  margin: 0 10px 0 30px;
  font-size: 18px;
}

.nav-box .a-content {
  width: 180px;
  height: 35px;
}

.nav-box .a-content a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(70, 70, 70);
}

.nav-box .a-content a:hover {
  background-color: rgb(242, 244, 255);
}
</style>