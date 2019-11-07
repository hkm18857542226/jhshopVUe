<template>
    <nav style="background:#545c64;position:relative">
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

            <el-menu-item index="0" route="/">
                <i class="el-icon-menu"></i>
                <span slot="title">工作平台</span>
            </el-menu-item>
            <!--动态加载菜单-->
            <el-submenu v-for="item in items" :key="item.menuId" :index="item.menuId+ ''" >
                <template slot="title">
                    <i :class="item.icon" ></i>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item-group >
                    <el-menu-item v-for="val in item.children" :key="val.name" :index="val.url">
                        <i :class="val.icon"></i>{{val.name}}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </nav>
</template>

<script>
    export default {
        name:'left-menu',
        data() {
            return {
                isCollapse: false,
                items:[
                    {
                        "menuId": 1,
                        "parentId": 0,
                        "name": "系统管理",
                        "url": null,
                        "perms": null,
                        "type": 0,
                        "icon": "el-icon-setting",
                        "orderNum": 0,
                        "createBy": null,
                        "createTime": null,
                        "lastUpdateBy": null,
                        "lastUpdateTime": null,
                        "delFlag": 0,
                        "children": [
                            {
                                "menuId": 2,
                                "parentId": 1,
                                "name": "用户管理",
                                "url": "/sys/user",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-service",
                                "orderNum": 1,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            },
                            {
                                "menuId": 3,
                                "parentId": 1,
                                "name": "机构管理",
                                "url": "/sys/dept",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-news",
                                "orderNum": 2,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            },
                            {
                                "menuId": 4,
                                "parentId": 1,
                                "name": "角色管理",
                                "url": "/sys/role",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-view",
                                "orderNum": 4,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            },
                            {
                                "menuId": 5,
                                "parentId": 1,
                                "name": "菜单管理",
                                "url": "/sys/menu",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-menu",
                                "orderNum": 5,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            },
                            {
                                "menuId": 8,
                                "parentId": 1,
                                "name": "系统日志",
                                "url": "/sys/log",
                                "perms": "sys:log:list",
                                "type": 1,
                                "icon": "el-icon-info",
                                "orderNum": 7,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            }
                        ]
                    },
                    {
                        "menuId": 25,
                        "parentId": 0,
                        "name": "内容管理",
                        "url": null,
                        "perms": null,
                        "type": 0,
                        "icon": "el-icon-document",
                        "orderNum": 0,
                        "createBy": null,
                        "createTime": null,
                        "lastUpdateBy": null,
                        "lastUpdateTime": null,
                        "delFlag": 0,
                        "children": [
                            {
                                "menuId": 26,
                                "parentId": 25,
                                "name": "栏目管理",
                                "url": "/content/category",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-tickets",
                                "orderNum": 1,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            },
                            {
                                "menuId": 27,
                                "parentId": 25,
                                "name": "文章管理",
                                "url": "/content/artical",
                                "perms": null,
                                "type": 1,
                                "icon": "el-icon-tickets",
                                "orderNum": 2,
                                "createBy": null,
                                "createTime": null,
                                "lastUpdateBy": null,
                                "lastUpdateTime": null,
                                "delFlag": 0,
                                "children": []
                            }
                        ]
                    },
                    ]
            };
        },
        watch: {
            isCollapse(val) {
                this.$emit("collapse-change", val);
            }
        },
        /**
         * 添加动态(菜单)路由
         * @param {*} menuList 菜单列表
         * @param {*} routes 递归创建的动态(菜单)路由
         */
	};
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