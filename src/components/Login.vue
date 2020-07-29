<template>
  <div>
    <breadcrump>登录</breadcrump>
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5">
            <div class="part-form">
              <h3 class="login-title">使用用户名进行登录</h3>
              <div>
                <input type="text" placeholder="请输入您的用户名" v-model="username"/>
                <input type="password" placeholder="请输入您的密码" v-model="password"/>
                <img src="../assets/img/captha.jpg" alt="">
                <button  class="login-30" @click="login">登 录</button>
              </div>
              <span class="forget-password">忘记密码? <router-link :to="'/passwordback'"> 找回密码</router-link></span>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2">
            <div class="line">
              <div class="or">Or</div>
            </div>
          </div>

          <div class="col-xl-5 col-lg-5">
            <div class="login-with-social">
              <h3 class="login-title">其他登录方式</h3>
              <a class="facebook social-link" href="#">使用短信验证登录</a>
              <a class="google social-link" href="#">使用微信登录</a>
              <a class="twitter social-link" href="#">使用支付宝登录</a>
              <a class="linkedin social-link" href="#">使用Google登录</a>
              <a class="instagram social-link" href="#">使用Facebook登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import Breadcrump from "./Breadcrump";
  export default {
    name: "Login",
    components: {
      Breadcrump
    },
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$http.post('/user/login', this.$qs.stringify({username: this.username, password: this.password})).then(
          res => {
            if (res.data.code === 200) {
              // 登录成功直接跳转，不要等待，否则降低用户体验
              this.$router.push('/home')
              this.$store.state.isLogin = true
            } else {
              this.$Message.error(res.data.msg)
            }
            console.log(res)
          }
        ).catch(err => {
          this.$Message.error(err.toString())
        })

      }
    }
  }
</script>

<style scoped>
  .login-30 {
    font-size: 28px;
  }
  .login-with-social a {
    font-size: 18px;
  }
  .part-form form input {
    font-size: 20px;
  }
  .part-form form input::placeholder {
    font-size: 15px;
  }
</style>
