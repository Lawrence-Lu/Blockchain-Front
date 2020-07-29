<template>
  <div>
    <breadcrump>注册</breadcrump>
    <div class="login register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-5">
            <div class="part-form">
              <h3 class="login-title">注册一个新账号</h3>
              <div>
                <input type="text" placeholder="请输入用户名" v-model="username">
                <input type="password" placeholder="请输入密码" v-model="password">
                <input type="password" placeholder="请再次输入密码确认" v-model="passwordAgain">

                <input type="text" placeholder="真实姓名" v-model="account_name">

                <div  style="line-height: 50px; font-size: 14px; margin-bottom: 15px">
                  <RadioGroup v-model="gender">
                    <span style="margin-right: 20px; margin-bottom: 15px;">性别</span>
                    <Radio label="男" style="margin-top: 5px">
                      <span>男</span>
                    </Radio>
                    <Radio label="女" style="margin-top: 5px">
                      <span>女</span>
                    </Radio>
                  </RadioGroup>
                </div>

                <input type="text" placeholder="手机电话" v-model="phone">
                <input type="text" placeholder="现居地址" v-model="address">
                <input type="text" placeholder="与真实姓名对应的银行卡账号" v-model="account_id">
                <input type="text" placeholder="个人身份证" v-model="identity_card">

                <img src="../assets/img/captha.jpg" alt="">

                <button type="submit" style="font-size: 28px" @click="register">注 册</button>
              </div>
              <span class="forget-password">已有账号? <router-link :to="'/login'"> 登录</router-link></span>
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
    name: "SignUp",
    components: {
      Breadcrump
    },
    data () {
      return {
        username: '',
        password: '',
        passwordAgain: '',
        account_name: '',
        gender: '男',
        phone: '',
        address: '',
        account_id: '',
        identity_card: ''
      }
    },
    methods: {
      register () {
        // 减少服务器处理压力应该在前端就做好常见信息填错检查
        // validate后面开发，需要后面开发放置一个Todo然后后面全局查找todo就可以知道哪里需要迭代开发

        this.$http.post('/user/register', this.$qs.stringify({
          username: this.username,
          password: this.password,
          account_name: this.account_name,
          gender: this.gender,
          phone: this.phone,
          address: this.address,
          account_id: this.account_id,
          identity_card: this.identity_card
        })).then(res => {
          if (res.status === 200) {
            if (res.data.code === 200) {
              this.$store.state.isLogin = true
              // 注册成功要提示，然后再跳转
              this.$Message.success("注册账号成功，即将跳转到首页")
              setTimeout(()=> {}, 500)
              this.$router.push('/home')
            } else {
              this.$Message.error(res.data.msg)
            }
          } else {
            this.$Message.error(res.status.toString())
          }
        })
      }
    }
  }
</script>

<style scoped>
  .part-form form input {
    font-size: 20px;
  }
  .part-form form input::placeholder {
    font-size: 15px;
  }
</style>
