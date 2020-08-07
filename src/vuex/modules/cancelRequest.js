export default {
    namespaced: true,
    state: {
        cancelTokenArr: [] // 取消请求token数组 {cancelToken: required, }
    },
    mutations: {
        pushToken(state, payload) {
            state.cancelTokenArr.push(payload);
        },
        clearToken({cancelTokenArr}) {
            cancelTokenArr.forEach(item => {
                item.cancelToken('取消请求_路由跳转取消请求');
            });
            cancelTokenArr = [];
        },
        clearTokenById(state, id) {
            state.cancelTokenArr = state.cancelTokenArr.filter(item => {
                if (item.id === id) {
                    item.cancelToken('取消请求_取消上一次请求');
                }
                return item.id !== id;
            });
        }
    },
    actions: {}
};
