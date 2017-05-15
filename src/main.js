import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import routerConfig from './router.config.js'



/*import './assets/css/animate.css';
import './assets/css/1.css';*/
Vue.use(Vuex);
const store = new Vuex.Store({
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
        increment:function(context,price){
            context.commit('increment',price)
        },
        decrement(context,price){
            context.commit('decrement',price)
        }
    }
})

Vue.use(VueRouter);

const router=new VueRouter(routerConfig);


new Vue({
    store,
  router,
  el: '#app',
  render: h => h(App),
    created(){
     this.push();
},
    methods:{
     push(){
        router.push({
            path:'/home'
        })
    }
}

})
