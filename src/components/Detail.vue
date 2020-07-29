<template>
  <el-main style="font-size: 12px;">
    <div class="all-container">
      <div class="all-container-padding bg">
        <el-tabs value="first">
          <el-tab-pane label="基本信息" name="first">
            <el-form>
              <el-form-item label="用户名">
                <el-col :span="8"> <el-input size="mini"></el-input></el-col>
              </el-form-item>
              <el-form-item label="性别">
                <el-col :span="8"> <el-input size="mini"></el-input></el-col>
              </el-form-item>
              <el-form-item label="电话">
                <el-col :span="8"> <el-input size="mini"></el-input></el-col>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-col :span="8"> <el-input size="mini"></el-input></el-col>
              </el-form-item>
              <el-form-item label="风险承受能力">
                <el-col :span="8">
                  <el-input size="mini"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <div class="grid-content bg-purple"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      id: "123"
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
