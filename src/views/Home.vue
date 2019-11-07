<template>
  <div class="container">
		  <!-- 头部区域 -->
		<head-bar></head-bar>
		 <section style="height:calc(100vh - 61px);display:flex;">
			<!-- 导航菜单栏 -->
			<nav-bar></nav-bar>
			<!-- 主内容区域 -->
		  <article style="flex: 1;padding: 20px">
		     <main-content></main-content>
		  </article>
		</section>
  </div>
</template>

<script>
import HeadBar from "./HeadBar"
import NavBar from "./NavBar"
import MainContent from "./MainContent"
export default {
  components:{
        HeadBar,
        NavBar,
        MainContent
  }
};
</script>

<style >
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    // background: rgba(224, 234, 235, 0.1);
  }
</style>  
