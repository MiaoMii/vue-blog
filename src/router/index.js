import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterMenus = new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home.vue'),
            meta: {
                name: '首页',
                icon: 'el-icon-info'
            }
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

RouterMenus.beforeEach(function (to, from, next) {
    // store.commit('cancelRequest/clearToken'); // 取消请求
    next()
})

export default RouterMenus
