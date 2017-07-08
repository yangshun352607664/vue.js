<template>
    <div>
        <h3 :style="a">我是菜单</h3>
       <p>{{n}}</p>
        <button-total @add="total" :hehe="n"></button-total>
        <button-total @add="total" :hehe="n"></button-total>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <Menuchild :child='parents'></Menuchild>

    </div>
</template>

<script>
   import Menuchild from './Menuchild.vue'

    export default({
            data(){
                return{
                  a:{color:'red',fontSize:'24px'},
                    n:0,
                    price:10,
                    parents:"this is a from parents"
                }
            },

        methods:{
           total:function(n){
               this.n+=n
               console.log(n);

           },
            increment () {
                this.$store.dispatch('increment',this.price)
            },
            decrement () {
                this.$store.dispatch('decrement',this.price)
            },
            show(){
               this.isshow =true
            }
        },

        components:{
                'button-total':{
                    props:['hehe'],
                    template: ` <button v-on:click="increment">{{ counter }}<div :class="{top:istop}"></div></button>
                            `,
                    data: function () {
                        return {
                            counter: 0,
                            istop:true

                        }
                    },
                    methods: {
                        increment: function () {
                            this.counter += 1
                            this.$emit('add',this.counter)
                        }
                    }
                },
            Menuchild,
        }


    })
</script>
<style>
    .top{
        color:hotpink;
    }
</style>