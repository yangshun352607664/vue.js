import Home from './components/Home.vue'
import News from './components/News.vue'
import Menu from './components/Menu.vue'
import Nav  from './components/Nav.vue'

export default{
	routes:[
		{path:'/home', component:Home,
            children:[
                {path:'menu',component:Menu},
                {path:'nav',component:Nav}
            ]},
		{path:'/news', component:News},
		{path:'*', redirect:'/home'}
	]
}