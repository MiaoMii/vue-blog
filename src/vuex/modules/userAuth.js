/* 这个文件还可以再次细分为state.js,getters.js,mutations.js,actions.js,通过import引入进来 */
const state = {
    userInfo: sessionStorage.userInfo ? JSON.parse(sessionStorage.userInfo) : null
}

const getters = {
    userInfo: state => state.userInfo
}

const mutations = {
    // 存储用户数据
    GET_USER_INFO(state, data) {
        sessionStorage.userInfo = JSON.stringify(data.data)
        sessionStorage.Authorization = data.data.token
        state.userInfo = data.data
    }
}

const actions = {
    /* 用户信息 */
    GET_USER_INFO({commit}, {data}) {
        commit('GET_USER_INFO', {data})
    }
}

export default {
    // 用于在全局引用此文件里的方法时标识这一个的文件名。如果没有namespaced这个配置，vuex默认会把mutations和actions放在全局下面，可以直接通过mutations和actions里面的方法名来调用。但是这样可能会不同模块之前，由于方法名相同引起冲突。加上之后，没有冲突，需要通过当前模块来调用方法。
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
