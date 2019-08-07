import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters:{
        newcount:function(state){
            return state.count
        },
    },
    mutations: {
        increment: function(state,price){
            return state.count+=price
        },
        decrement: function(state,price){
            return state.count-=price
        }
    },
    actions:{
        increment:function({commit}, price){
            commit('increment',price)
        },
        decrement(context,price){
            context.commit('decrement',price)
        }
    }
})