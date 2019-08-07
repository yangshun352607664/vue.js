import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import App from './App.vue'
import routerConfig from './router.config.js'



/*import './assets/css/animate.css';
import './assets/css/1.css';*/


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
