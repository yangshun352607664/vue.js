<template>
    <div>
        <h3>我是菜单中的下面的子组件</h3>
        {{ getfullyear}}/{{count}}
        <div v-html="html"></div>

        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <div>{{child}}</div>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    export default({
        name: 'Menuchild',

        data() {
            return {
               price:15,

                localCount:5,

            }
        },
        props:{
         child:{
             type:String
         }
        },
        methods: {
            increment () {
                this.$store.dispatch('increment',this.price)
            },
            decrement () {
                this.$store.dispatch('decrement',this.price)
            }
        },
        computed: {
            getfullyear() {
                return new Date().getFullYear()
            },
            ...mapState({
                // 箭头函数可使代码更简练
                html(state) {
                    if( state.count===0){
                        return '<div>0</div>'
                    }else{
                        return `<h3>我是菜单中的下面的子组件</h3>`
                    }
                },
                count: state => state.count
            }),
        },
       /* created(){
            if(state.count===0){
               this.html='<div>hth</div>'
            }
        },*/




    })
</script>