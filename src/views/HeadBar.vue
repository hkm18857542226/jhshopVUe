<template>
    <div class="header" style="position: fixed;left: 0;top: 0;right: 0;z-index: 999">
        <div style="color: white">logo</div>
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style>
    .header{
        padding: 0 20px;
        display: flex;
        background-color:#545c64;
        align-items: center;
        justify-content:space-between;
    }

</style>

<script>
import mock from "@/mock/index"
export default {
  data() {
    return {
      user: {
        name: "Louis",
        avatar: "",
        role: "超级管理员",
        registeInfo: "注册时间：2018-12-20 "
      },
      activeIndex: '1',
      langVisible: false
    }
  },
  methods: {
    selectNavBar(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() {
    var user = sessionStorage.getItem("user")
    if (user) {
      this.user.name = user
      // this.user.avatar = require("@/assets/user.png")
    }
  }
}
</script>

