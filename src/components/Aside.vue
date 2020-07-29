<template>
  <el-aside width="160px" style="margin-left: -7px;">
    <!-- 160px -->
    <div
      style="height: 50px; ;
      background-color: #26C4FE;
      
    ;"
    >
      <img src="@/assets/img/1.jpg" style="width: 160px; height: 50px;" />
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      router
      mode="vertical"
      background-color="#495164"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <!-- background-color="#f2f2f2"
         -->
      <el-menu-item index="/">
        <i class="el-icon-success"></i>个人信息</el-menu-item
      >
    </el-menu>
    <!-- <el-menu :default-openeds="['1', '3']">
      <el-menu-item index="1">
        <template slot="title"
          ><i class="el-icon-message"></i>导航一</template
        >
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i>导航三</template
        >
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"
          ><i class="el-icon-setting"></i>导航四</template
        >
      </el-submenu>
    </el-menu> -->
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      activeIndex: "/one"
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.el-aside {
  height: 95.5vh;
  font-size: 12px;
}

.el-menu-item {
  font-size: 12px;
}

.el-menu {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
