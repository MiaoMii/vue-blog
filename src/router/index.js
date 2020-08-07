import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/main.vue';
import routes from './routes';

Vue.use(Router);

let RouterMenus = new Router({
    routes: [
        {
            path: '/Main',
            name: 'Main',
            redirect: '/Main/home',
            component: Main,
            children: routes
        },
        {
            path: '/',
            redirect: '/Main/home'
        },
    ]
});

RouterMenus.beforeEach(function (to, from, next) {
    // store.commit('cancelRequest/clearToken'); // 取消请求
    next();
});

export default RouterMenus;
