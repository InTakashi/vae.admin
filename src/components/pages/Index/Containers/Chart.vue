<template>
  <div class="CV-outerbox">
    <div class="header">
      <span class="bigTittle">图表可视化</span>
      <i class="el-icon-user"></i>
      <span class="space">-</span>
      <span class="littleTittle">用户管理</span>
      <span class="space">-</span>
      <span class="littleTittle">图表可视化</span>
    </div>
    <div class="container">
      <ChartContent></ChartContent>
    </div>
  </div>
</template>

<script>
import ChartContent from "../Contents/ChartContent.vue";
export default {
  name: "ChartVc",
  components: {
    ChartContent,
  },
};
</script>

<style scoped>
.CV-outerbox {
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

.header .el-icon-user {
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