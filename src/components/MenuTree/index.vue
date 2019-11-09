<template>

	<el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.id">
		<template slot="title">
			<i :class="menu.icon"></i>
			<span slot="title">{{menu.name}}</span>
		</template>
		<el-menu-item-group >
		<MenuTree v-for="item in menu.children" :key="item.id" :menu="item"></MenuTree>
		</el-menu-item-group >
	</el-submenu>
	<el-menu-item v-else :index="'' + menu.id" @click="handleRoute(menu)">
		<i :class="menu.icon"></i>
		<span slot="title">{{menu.name}}</span>
	</el-menu-item>
</template>

<script>
  // let hkm = this.prototype.hkm;

  import Vue from 'vue'
	import {getIFrameUrl,getIFramePath} from '@/utils/iframe'

	export default {
		name: 'MenuTree',
		props: {
			menu: {
				type: Object,
				required: true
			}
		},
		methods: {
			handleRoute(menu) {
        let hhh = menu;
        Document.prototype.hkm = hhh;
				// 通过菜单URL跳转至指定路由
        console.log(menu)
        console.log(menu.url);




        // Vue.prototype.$set("hkm",menu)

        // Vue.set(Vue.prototype.hkm,menu)
        // Vue.set( Vue.prototype.hkm,'hkm',menu)

        //原来的语句
        // this.$router.push("/" + menu.url)

        this.$api.menu.role({userName:sessionStorage.getItem("user"),url:menu.url}).then((data)=>{
          console.log(data)
        if(data.url === '/'){
          // 验证失败去到 主页中
          this.$router.push("/main/mainUI" )
          return
        }

          this.$router.push("/" + data.url)

        })

			}
		}
	}
</script>

<style>

</style>
