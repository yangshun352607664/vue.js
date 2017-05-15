<template>
	<div id="s">
		{{msg}}
    <ul>
		<li>
			<router-link to="/home/menu" @click.native="hehe">菜单</router-link>
			<router-link to="/home/nav">导航</router-link>
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
	export default({
		data(){
		    return {
		        msg:'我是主页下'
			}
		},
	   methods:{
		  hehe(){
		    console.log(1)
		 }
	   }
	})
</script>
<style>

</style>