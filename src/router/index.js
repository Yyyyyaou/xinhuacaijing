import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login.vue')
  },
  {
    path: '/homeNew',
    name: 'homeNew',
    redirect: "/ChinaEnterprise",
    component: () => import(/* webpackChunkName: "Login" */ '@/views/homeNew/homeNew.vue'),
    children: [
      {
        path: '/ChinaEnterprise',
        name: "ChinaEnterprise",
        component: () => import('@/views/homePage/homePage'),
      },
    ],
  },
  {
    // 主页面
    path: '/Home',
    name: 'Home',
    redirect: "/LabelManagement",
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue'),
    children: [
      {
        path: '/LabelManagement',
        name: "标签统计与管理",
        component: () => import('@/views/Label/LabelManagement'),
      },
      {
        path: '/LibraryManagement',
        name: "标签库管理",
        component: () => import('@/views/Label/LibraryManagement')
      },
      // {
      //   path: '/Library',
      //   name: "正负面标签",
      //   component: () => import('@/views/Label/Library')
      // },
      {
        path: '/myReport',
        name: "我的报告",
        component: () => import('@/views/theReport/myReport')
      },
      {
        path: '/generate',
        name: "报告生成设置",
        component: () => import('@/views/theReport/generate')
      },
      {
        path: '/DataGenerate',
        name: "统计数据列表",
        component: () => import('@/views/dataList/DataGenerate')
      },
      {
        path: '/SetReport',
        name: "数据列表生成设置",
        component: () => import('@/views/dataList/SetReport')
      },
      {
        path: '/Enterprise',
        name: "统计数据列表",
        component: () => import('@/views/backstage/Enterprise')
      },
      {
        path: '/news',
        name: "数据列表生成设置",
        component: () => import('@/views/backstage/news')
      },
      {
        path: '/Group',
        name: "统计数据列表",
        component: () => import('@/views/backstage/Group')
      },
      {
        path: '/User',
        name: "数据列表生成设置",
        component: () => import('@/views/backstage/User')
      },
      {
        path: '/Role',
        name: "统计数据列表",
        component: () => import('@/views/backstage/Role')
      },
      {
        path: '/details',
        name: "统计数据列表",
        component: () => import('@/views/details/details')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
