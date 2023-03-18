<template>
  <div class="content" v-loading="loading">
    <div class="background"></div>
    <div class="content-innerbox">
      <router-view></router-view>
    </div>
    <div class="signout">
      <img src="../Picture/chamberlain.jpg" />
      <p :myName="myName">{{ myName }}</p>
      <a
        href="javascript:;"
        class="el-icon-switch-button"
        @click="signout"
        v-loading.fullscreen="fullloading"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBox",
  data() {
    return {
      myName: "小管家",
      loading: false,
      fullloading: false,
    };
  },

  methods: {
    signout() {
      this.$confirm("是否确认退出当前账号？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.fullloading = true;
          setTimeout(() => {
            this.fullloading = false;
            this.$message({
              type: "success",
              message: "退出成功!",
            });
            this.$router.replace({
              name: "login",
            });
          }, 1000);
        })
        .catch();
    },
  },
};
</script>

<style scoped>
.content {
  width: 1740px;
  height: 569px;
  position: relative;
}

.content .signout {
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  align-items: center;
}

.content .signout img {
  height: 35px;
  height: 35px;
  border-radius: 50%;
}

.content .signout p {
  
  margin: 0 40px 0 10px;
  color: #ffffff;
}

.content .signout .el-icon-switch-button {
  font-size: 20px;
  color: #ffffff;
}

.content .signout .el-icon-switch-button:hover {
  color: rgb(84, 84, 255);
}

.content .background {
  width: 100%;
  height: 250px;
  background-color: rgb(134, 158, 255);
}

.content .content-innerbox {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  
}
</style>