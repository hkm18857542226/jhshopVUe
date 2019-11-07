/**
 * 保存加载后的导航菜单
 */

export default {
    state: {
        navTree: [],  // 导航菜单树
    },
    getters: {
   
    },
    mutations: {
        setNavTree(state, navTree){  // 设置导航菜单树
            state.navTree = navTree;
        }
    },
    actions: {
        
    }
}

