<template>
  <div>
    <el-container>
      <Aside></Aside>
      <el-container direction="vertical">
        <Header></Header>
        <Detail></Detail>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";
import Detail from "./Detail";

export default {
  name: "total",
  data() {
    return {};
  },
  components: {
    Aside,
    Header,
    Detail
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.el-container {
  height: 450px;
}
</style>
