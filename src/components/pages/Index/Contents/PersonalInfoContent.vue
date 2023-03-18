<template>
  <div class="PIC-outerbox">
    <div class="inner-box">
      <div class="info">
        <el-descriptions style="width: 300px" title="个人信息" :column="1">
          <el-descriptions-item label="用户名" :myName="myName">
            {{ myName }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号" :myPhone="myPhone">
            {{ myPhone }}
          </el-descriptions-item>
          <el-descriptions-item label="所属地" :myAddress="myAddress">
            {{ myAddress }}
          </el-descriptions-item>
          <el-descriptions-item label="性别" :mySex="mySex">
            {{ mySex }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="changeInfo">
        <div class="tittle">修改信息</div>
        <div class="input-box">
          <el-form ref="form" :model="{ newInfo }" label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="newInfo.newName" maxlength="10"></el-input>
            </el-form-item>
            <el-form-item label="手机号：">
              <el-input v-model="newInfo.newPhone" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="所属地：">
              <el-input v-model="newInfo.newAddress"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
              <el-radio-group v-model="newInfo.newSex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <div class="button">
              <el-button type="primary" size="mini" @click="changeInfo">
                立即修改
              </el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfoContent",
  data() {
    return {
      myName: "小管家",
      myPhone: "8413798",
      myAddress: "广东深圳",
      mySex: "女",

      newInfo: [{ newName: "", newPhone: "", newAddress: "", newSex: "" }],
    };
  },

  methods: {
    changeInfo() {
      var A = this.myName;
      var B = this.myPhone;
      var C = this.myAddress;
      var D = this.mySex;
      var a = this.newInfo.newName;
      var b = this.newInfo.newPhone;
      var c = this.newInfo.newAddress;
      var d = this.newInfo.newSex;
      if (a || b || c || d) {
        if (a != A && a) {
          this.myName = this.newInfo.newName;
          this.$parent.$parent.myName = this.newInfo.newName;
        }
        if (b != B && b) {
          this.myPhone = this.newInfo.newPhone;
        }
        if (c != C && b) {
          this.myAddress = this.newInfo.newAddress;
        }
        if (d != D && d) {
          this.mySex = this.newInfo.newSex;
        }
      }else{
          this.$message.error('请填写需修改的信息');
      }
    },
  },
};
</script>

<style scoped>
.PIC-outerbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.inner-box {
  width: 98%;
  height: 100%;
  display: flex;
}

.inner-box .info,
.inner-box .changeInfo {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner-box .changeInfo .tittle {
  width: 65%;
  height: 50px;
  font-weight: 600;
}

.inner-box .changeInfo .input-box {
  width: 70%;
}
.inner-box .changeInfo .input-box .button {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>