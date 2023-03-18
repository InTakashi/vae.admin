<template>
  <div class="CP-outerbox">
    <div class="header">
      <span class="bigTittle">修改密码</span>
      <i class="el-icon-document"></i>
      <span class="space">-</span>
      <span class="littleTittle">信息管理</span>
      <span class="space">-</span>
      <span class="littleTittle">修改密码</span>
    </div>
    <div class="container">
      <ChangePassContent></ChangePassContent>
    </div>
  </div>
</template>

<script>

import ChangePassContent from '../Contents/ChangePassContent.vue'

export default {
  name: "ChangePass",
  components:{
    ChangePassContent
  }
};
</script>

<style scoped>
.CP-outerbox {
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

.header .bigTittle{
  font-weight: 600;
  font-size: 18px;
  margin: 0 10px;
}

.header .el-icon-document{
  font-size: 22px;
  font-weight: 600;
}

.header .space{
  margin: 0 6px;
}

.header .littleTittle{
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