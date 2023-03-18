<template>
  <div class="OV-outerbox">
    <div class="header">
      <span class="bigTittle">其他</span>
      <i class="el-icon-shopping-cart-1"></i>
      <span class="space">-</span>
      <span class="littleTittle">商城管理</span>
      <span class="space">-</span>
      <span class="littleTittle">其他</span>
    </div>
    <div class="container">
      <OtherContent></OtherContent>
    </div>
  </div>
</template>

<script>
import OtherContent from "../Contents/OtherContent.vue";
export default {
  name: "OtherVC",
  components: {
    OtherContent,
  },
};
</script>

<style scoped>
.OV-outerbox {
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

.header .el-icon-shopping-cart-1 {
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