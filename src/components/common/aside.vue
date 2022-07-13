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
          path: "/homeNew",
          icon: "el-icon-s-shop",
          title: "Home Page",
        },
        {
          path: "/LabelManagement",
          icon: "el-icon-s-shop",
          title: "标签统计与管理",
        },
        {
          path: "/LibraryManagement",
          icon: "el-icon-s-shop",
          title: "标签库管理",
        },
        {
          icon: "el-icon-s-shop",
          title: "报告管理",
          child: [
            {
              icon: "el-icon-s-shop",
              title: "我的报告",
              path: "/Myreport",
            },
            {
              icon: "el-icon-s-shop",
              title: "报告生成设置",
              path: "/generate",
            },
          ],
        },
        {
          icon: "el-icon-s-shop",
          title: "数据列表管理",
          path: "",
          child: [
            {
              icon: "el-icon-s-shop",
              title: "统计数据列表",
              path: "/Datagenerate",
            },
            {
              icon: "el-icon-s-shop",
              title: "数据列表生成设置",
              path: "/SetReport",
            },
          ],
        },
        {
          icon: "el-icon-s-shop",
          title: "后台管理",
          child: [
            {
              icon: "el-icon-s-shop",
              title: "企业信息维护",
              path: "/Enterprise",
            },
            {
              icon: "el-icon-s-shop",
              title: "新闻讯息维护",
              path: "/news",
            },
            {
              icon: "el-icon-s-shop",
              title: "组信息维护",
              path: "/Group",
            },
            {
              icon: "el-icon-s-shop",
              title: "用户管理",
              path: "/User",
            },
            {
              icon: "el-icon-s-shop",
              title: "角色管理",
              path: "/Role",
            },
          ],
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