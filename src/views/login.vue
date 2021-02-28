<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-form-box">
        <h3>用户登录</h3>
        <p class="sub-title">登录投放助手平台</p>
        <br />
        <el-form ref="loginForm" :model="loginForm" :rules="rules">
          <el-form-item prop="telphone">
            <el-input v-model="loginForm.telphone" placeholder="请输入手机号" size="medium" :autofocus="true"
              prefix-icon="fw fa fa-user"></el-input>
          </el-form-item>
          <el-form-item prop="verifyCode" >
            <el-input v-model="loginForm.verifyCode" placeholder="请输入验证码" size="medium" @keyup.enter.native="handleLogin"
              prefix-icon="fw fa fa-envelope">
              <el-button slot="append" @click="handleVfCode" type="primary" v-text="vfcode.buttonName"></el-button>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button style="width: 100%;" type="primary" size="medium" :loading="loading" @click="handleLogin">
          {{ buttonName }}</el-button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { fetchLogin ,fetchVfCode} from '../api/login'

export default {
  data() {
    return {
      isSmsCheck: false,
      smsCheckMsg: '',
      smsCheckType: '',
      smsMessage: '',
      loading: false,
      buttonName: '立即登陆',
      loginForm: {
        telphone: '',
        verifyCode: '',
      },
      vfcode: {
        duration: 0,
        time: null,
        mobile: '',
        buttonName: '发送验证码',
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    handleLogin() {
      const _self = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _self.loading = true
          _self.buttonName = '正在登陆'

          fetchLogin(_self.loginForm)
            .then(() => {
              document.querySelector('body').style.background = '#f0f0f0'
              _self.$router.push('/')
            })
            .catch(err => {
              _self.loading = false
              _self.buttonName = '立即登陆'
              _self.$message({ type: 'error', message: err.message })
            })
        } else {
          return false
        }
      })
    },
    handleVfCode() {
      const _self = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (_self.vfcode.duration > 0) {
            return
          }
          fetchVfCode(_self.loginForm)
            .then(data => {
              _self.vfcode = data
              _self.smsMessage =
                '验证码已发送到手机[' + _self.vfcode.mobile + ']'
              _self.resendTime()
            })
            .catch(err => {
              _self.$message({ type: 'error', message: err.message })
            })
        }
      })
    },
    resendTime() {
      const _self = this
      if (_self.vfcode.duration > 0) {
        _self.$set(
          _self.vfcode,
          'buttonName',
          '重新发送(' + _self.vfcode.duration + 's)'
        )
        _self.vfcode.duration -= 1
        setTimeout(function() {
          _self.resendTime()
        }, 1000)
      } else {
        _self.vfcode.buttonName = '发送验证码'
      }
    },
  },
}
</script>

<style lang="less">
body {
  width: 100%;
  background-size: cover;
  height: auto;
}

.login-container {
  @media screen and (min-width: 1200px) {
    width: 912px;
  }

  margin: 12% auto 0 auto;
  color: #ffffff;
  font-size: 13px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #1e9fff;
    }
  }
}

.info {
  float: left;
  width: 60%;

  h1 {
    font-size: 40px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    margin: 4px 0;
    padding: 0;
    color: #ffffff;
  }

  ul {
    padding: 0;
    margin: 30px 0;
    font-size: 18px;

    li {
      list-style: none;
      display: list-item;
      text-align: -webkit-match-parent;
      height: 30px;
      margin-top: 10px;
      vertical-align: middle;

      i {
        float: left;
        font-size: 22px;
        margin-top: 3px;
      }

      span {
        margin-left: 10px;
      }
    }
  }
}

.login-panel {
  overflow: hidden;

  .login-form-box {
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 30px 30px 50px;
    color: #666666;

    h3 {
      margin: 0;
      color: #666666;
      font-size: 24px;
      font-weight: 400;
    }

    .sub-title {
      color: #cccccc;
      margin: 20px 0 10px;
      font-size: 14px;
    }

    .el-form-item {
      margin-bottom: 16px;

      .el-form-item__error {
        padding-top: 0;
      }
    }
  }

  footer {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 20px 0;
    padding-top: 15px;

    div {
      text-align: center;
      color: #ffffff;
    }
  }
}

hr {
  margin: 20px 0;
  height: 1px;
  border: 0;
  background-color: #e2e2e2;
  clear: both;
}
</style>
