<template>
  <div class="login-box">
    <div class="innerbox">
      <div class="content-box">
        <div class="left-box">
          <div class="inputbox">
            <el-form
              class="form"
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-position="right"
              label-width="60px"
            >
              <el-form-item label="账号：" prop="account">
                <el-input
                  class="account"
                  type="text"
                  v-model="ruleForm.account"
                  maxlength="6"
                  show-word-limit
                  autocomplete="off"
                  placeholder="请输入账号"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="pass">
                <el-input
                  class="password"
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="请输入密码"
                  show-password
                ></el-input>
              </el-form-item>
              <el-button
                class="button"
                type="primary"
                round
                size="mini"
                @click="toIndex"
                v-loading.fullscreen.lock="fullscreenLoading"
              >
                登录
              </el-button>
            </el-form>
          </div>
        </div>
        <div class="right-box">
          <p>Welcome</p>
          <p>Vae+ 后台管理系统</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    const checkAccount = (account, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (value.length < 6) {
          return callback(new Error("账号不能少于六位数字"));
        } else {
          callback();
        }
      }, 500);
    };

    const validatePass = (pass, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        account: "",
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },

      fullscreenLoading: false,
    };
  },

  methods: {
    toIndex() {
      if (this.ruleForm.account && this.ruleForm.pass) {
        var A = this.ruleForm.account;
        var P = this.ruleForm.pass;
        if (A == "666666" && P == "666666") {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
            this.$router.push({
              name: "index",
            });
          }, 2000);
        } else {
          this.$message.error("账号和密码输入错误，请重新输入~");
        }
      } else {
        this.$message.error("请输入账号和密码~");
      }
    },
  },
};
</script>

<style scoped>
.login-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("./Picture/backgroundImage.jpg") no-repeat;
  background-size: 100%;
}

.innerbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-box {
  width: 540px;
  height: 240px;
  display: flex;
  
}

.left-box {
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 5px 0 0 5px;
}

.inputbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.inputbox .form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.inputbox .form .password,
.inputbox .form .account {
  width: 200px;
}

.inputbox .button {
  font-family: "STXINGKA";
  width: 100px;
}

.right-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(212, 212, 212, 0.3);
  border-radius: 0 5px 5px 0;
}

.right-box p {
  font-size: 22px;
  margin: 10px 0;
}
</style>