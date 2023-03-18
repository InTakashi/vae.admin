<template>
  <div class="CPC-outerbox">
    <div class="innerbox">
      <div class="tittle">修改密码</div>
      <div class="input-box">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="旧密码：" prop="pass">
            <el-input
              type="password"
              autocomplete="off"
              v-model.number="ruleForm.pass"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="newPass">
            <el-input
              type="password"
              v-model="ruleForm.newPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认新密码：" prop="checkNewPass">
            <el-input
              type="password"
              v-model="ruleForm.checkNewPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              size="mini"
              type="primary"
              @click="submitForm('ruleForm')"
            >
              修改
            </el-button>
            <el-button size="mini" @click="resetForm('ruleForm')">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassContent",
  data() {
    var checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.checkNewPass !== "") {
          this.$refs.ruleForm.validateField("checkNewPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        newPass: "",
        checkNewPass: "",
        pass: "",
      },
      rules: {
        newPass: [{ validator: validatePass, trigger: "blur" }],
        checkNewPass: [{ validator: validatePass2, trigger: "blur" }],
        pass: [{ validator: checkPass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      if (
        this.ruleForm.newPass == this.ruleForm.checkNewPass &&
        this.ruleForm.newPass &&
        this.ruleForm.checkNewPass
      ) {
        this.$message({
          showClose: true,
          message: "修改成功",
          type: "success",
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.CPC-outerbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.innerbox {
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.innerbox .tittle {
  width: 35%;
  height: 60px;
  font-weight: 600;
}

.innerbox .input-box {
  width: 35%;
}
</style>