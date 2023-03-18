<template>
  <div class="header-box">
    <img src="../Picture/vae+.png" />
    <div class="tittle">后台管理系统</div>
  </div>
</template>

<script>
export default {
  name: "HeaderVc",
};
</script>

<style scoped>
.header-box {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 9px;
}


img {
  height: 40px;
  margin-left: 10px;
}

.tittle {
  height: 100%;
  line-height: 60px;
  color: rgb(56,91,228);
}
</style>