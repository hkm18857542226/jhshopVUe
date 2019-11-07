<template>
  <div id="main-container" class="main-container" :class="'position-left'">
    <!-- 面包屑 -->
 <ContentHead></ContentHead>
    <!-- 主内容区域 -->
    <div class="main-content">
      <keep-alive>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import ContentHead from "./ContentHead"
export default {
  data () {
    return {
    }
  },
  components:{
    ContentHead
  },
  methods: {

  }
}
</script>

<style >
.main-container {
  padding: 0 5px 5px;
  position: absolute;
  top: 60px;
  left: 1px;
  right: 1px;
  bottom: 0px;
 }


  .main-content {
    position: absolute;
    top: 45px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    padding: 5px;
  }

.position-left {
  left: 200px;
}
</style>
