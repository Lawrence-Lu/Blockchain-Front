<template>
  <el-header style="text-align: right; font-size: 12px; height: 50px; ">
    <!-- <i class="el-icon-search" style="position: relative; right: 50px;">
      </i> -->

    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown"> </el-dropdown-menu>
    </el-dropdown>
    <el-button
      @click.native.prevent="deleteRow(scope.$index, tableData)"
      type="text"
      size="small"
      style="margin-right: 20px;"
    >
      返回
    </el-button>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchContent: ""
    };
  },
  components: {},
  mounted() {},
  methods: {
    passInfo() {
      this.$emit("func", this.searchContent);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-header {
  line-height: 60px;
  background-color: #495164;
  /* #f2f2f2; */
}

.el-button + .el-button {
  margin-left: 2px;
}
</style>
