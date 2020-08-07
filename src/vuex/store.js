// 引入vue
import Vue from 'vue';
import Vuex from 'vuex';
// import getters from './getters';
import userAuth from './modules/userAuth';
import cancelRequest from './modules/cancelRequest';
// 注册vue
Vue.use(Vuex);

// 创建仓库暴露出去
export default new Vuex.Store({
    state: {
        // root state
        globalText: 'vuex root'
    },
    mutations: {
        // root 方法
        globalFun() {
            console.log('root方法');
        }
    },
    modules: {
        userAuth,
        cancelRequest
    }
    // getters
});
