<template>
  <div class="area">
    <h2>基于区块链的量化投资平台</h2>
    <el-input
      v-model="username"
      placeholder="请输入用户名"
      style="width: 200px; max-height: fit-content;"
      size="small"
    ></el-input>
    <br />
    <br />

    <el-input
      placeholder="请输入密码"
      v-model="password"
      show-password
      size="small"
      style="width: 200px; max-height: fit-content;"
      @keyup.enter="doLogin"
    ></el-input>
    <br />
    <br />
    <el-button type="primary" size="small" @click="doLogin">登录</el-button>
    <el-button type="primary" size="small" @click="signin">注册</el-button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      doLogin() {},
      signin() {
        this.$router.push("signup");
      }
    },
    mounted() {
      document.body.style.backgroundColor = "#2D3A4B";
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    color: white;
  }

  .area {
    margin-top: 120px;
  }
</style>
