<template>
  <div class="area">
    <h2>注册界面</h2>
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

    <el-button type="primary" size="small" @click="sign">提交</el-button>
    <a href="" @click.prevent="back">返回</a>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    sign() {},
    back() {
      this.$router.push("/");
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

a {
  color: blue;
  font-size: 15px;
  margin-left: 20px;
}
</style>
