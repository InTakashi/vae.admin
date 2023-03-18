<template>
  <div class="RT-outerbox">
    <div class="header">
      <span class="bigTittle">最新行程</span>
      <i class="el-icon-news"></i>
      <span class="space">-</span>
      <span class="littleTittle">官方资讯</span>
      <span class="space">-</span>
      <span class="littleTittle">最新行程</span>
    </div>
    <div class="container">
      <RecentTripContent></RecentTripContent>
    </div>
  </div>
</template>

<script>
import RecentTripContent from "../Contents/RecentTripContent.vue";

export default {
  name: "RecentTrip",
  components: {
    RecentTripContent,
  },
};
</script>

<style scoped>
.RT-outerbox {
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