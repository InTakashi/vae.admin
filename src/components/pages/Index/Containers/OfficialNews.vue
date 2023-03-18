<template>
  <div class="ON-outerbox">
    <div class="header">
      <span class="bigTittle">官方动态</span>
      <i class="el-icon-news"></i>
      <span class="space">-</span>
      <span class="littleTittle">官方资讯</span>
      <span class="space">-</span>
      <span class="littleTittle">官方动态</span>
    </div>
    <div class="container">
      <OfficialNewsContent></OfficialNewsContent>
    </div>
  </div>
</template>

<script>
import OfficialNewsContent from "../Contents/OfficialNewsContent.vue";

export default {
  name: "OfficialNews",

  components: {
    OfficialNewsContent,
  },
};
</script>

<style scoped>
.ON-outerbox {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
}

.header .bigTittle {
  font-weight: 600;
  font-size: 18px;
  margin: 0 10px;
}

.header .el-icon-news {
  font-size: 22px;
  font-weight: 600;
}

.header .space {
  margin: 0 6px;
}

.header .littleTittle {
  font-size: 14px;
}

.container {
  width: 100%;
  height: 90%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgb(126, 126, 126);
}
</style>