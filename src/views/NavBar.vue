<template>
	  <nav style="background:#545c64;position:fixed;top: 60px;bottom: 0">
	    <i
	            class="collapsebtn"
	            :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
	            @click="isCollapse=!isCollapse"
	    ></i>
	    <el-menu
	            :collapse="isCollapse"
	            default-active="0"
	            :default-openeds="[]"
	            class="el-menu-vertical-demo"
	            background-color="#545c64"
	            text-color="#fff"
	            :unique-opened="true"
	            active-text-color="#558FF2"
	            :router="true"
	    >
      <!-- 导航菜单树组件，动态加载菜单 -->
      <menu-tree @click="mianbaoxie" v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
    </el-menu>
	</nav>
</template>

<script>
import { mapState } from 'vuex'
import MenuTree from "@/components/MenuTree"
export default {
	data() {
		return {
		isCollapse: false,
		}
	},

  beforeRouteEnter (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(from)
    console.log(this)
    next()
  },
  watch: {
	    isCollapse(val) {
	        this.$emit("collapse-change", val);
	    }
	},
  components:{
        MenuTree
  },
  computed: {
    ...mapState({
      collapse: state=>state.app.collapse,
      navTree: state=>state.menu.navTree
    })
  },
  methods: {
	  mianbaoxie(){
	    console.log(this)
    },
    handleopen() {
      console.log('handleopen')
    },
    handleclose() {
      console.log('handleclose')
    },
    handleselect(a, b) {
      console.log('handleselect')
    }
  }
}
</script>

<style>
 .collapsebtn {
        color: #fff;
        position: absolute;
        bottom: 100px;
        cursor: pointer;
        user-select: none;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
        /* */
    }
    /*去掉导航菜单右边框*/
    .el-menu{
        border-right: 0 !important;
    }

</style>
