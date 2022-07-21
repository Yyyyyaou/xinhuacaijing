<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :unique-opened="true"
    background-color="#f2f6f9"
    text-color="#666"
    active-text-color="#0168b1"
  >
    <el-menu-item :index="item.path" v-for="item in noChild" :key="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
    <el-submenu :index="index + ''" v-for="(item, index) in Child" :key="index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.child"
          :key="subIndex"
          >{{ subItem.title }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/homePage",
          icon: "el-icon-s-shop",
          title: "Home Page",
        },
        {
          path: "/search",
          icon: "el-icon-s-shop",
          title: "Search",
        },
      ],
    };
  },
  computed: {
    noChild() {
      return this.asideMenu.filter((item) => !item.child);
    },
    Child() {
      return this.asideMenu.filter((item) => item.child);
    },
  },
};
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
