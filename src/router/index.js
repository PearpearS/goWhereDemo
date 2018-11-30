import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: () => //app.js超过1MB才推荐用异步加载组件的写法
            //组件也可以这么写
            import ('../pages/home/Home.vue') //路由异步加载组件，优化性能的写法(app.js小的时候，不要这么写)
    }, {
        path: '/city',
        name: 'City',
        component: () =>
            import ('../pages/city/City') //路由异步加载组件，优化性能的写法(app.js小的时候，不要这么写)
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: () =>
            import ('../pages/detail/Detail') //路由异步加载组件，优化性能的写法(app.js小的时候，不要这么写)
    }],

    //该方法在官网有详情
    //每次做路由切换的时候，让新页面的x，y坐标为0（也就是回到最顶部）
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})