export default [
    {
        path: '/Main/home',
        name: 'home',
        component: () => import('@/pages/home.vue'),
        meta: {
            name: '首页',
            icon: 'el-icon-info'
        }
    },
];
