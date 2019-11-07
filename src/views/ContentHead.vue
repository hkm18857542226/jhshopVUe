<template>
    <div id="contentHead">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item  :to="{path:'/main/mainUI' }" >首页</el-breadcrumb-item>

        <el-breadcrumb-item v-if="contentHead.type == 2" >{{contentHead.parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item  v-if="contentHead.type == 2" >{{contentHead.name}}</el-breadcrumb-item>

      </el-breadcrumb>

    </div>
</template>

<script>
  import Vue from 'vue'
    console.log(Vue.prototype.hkm)
    export default {
    data(){
      return{
        contentHead:Document.prototype.hkm
      }
    },
        name: "ContentHead",


    }

</script>

<style scoped >
#contentHead{
  width: 100%;
  height: 45px;
}
  .el-breadcrumb{
    font-size: 15px;
    position: absolute;
    left: 20px;
    top: 15px;
  }
</style>
