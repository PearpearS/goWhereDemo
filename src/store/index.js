// vuex状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//之所以要这样写，是防止某个浏览器或者隐身模式下，localStorage出现异常问题
let defaultcity = '无锡';
try {
    if (localStorage.city) {
        defaultcity = localStorage.city;
    }
} catch (e) {

}

export default new Vuex.Store({
    state: {
        city: defaultcity
    },
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (e) {}
        }
    }
})