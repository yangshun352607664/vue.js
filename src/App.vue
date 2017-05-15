<template>
  <div id="s">
    {{msg}}
    {{count}}
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
        <button @click="increment">+</button>
        <button @click="decrement(5)">-</button>
      </li>
    </ul>
    <div>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapMutations ,mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        price:5
    }
  },
    computed:{
        ...mapGetters({
            count:'newcount'
        })
    },
    methods: {
        increment () {
            this.$store.dispatch('increment',this.price)
        },
        ...mapActions({
            decrement:'decrement'
        })
    },

}
</script>

<style>
html,body{ overflow:hidden; }
#s {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration:none
}
</style>
