//创建一个路由规则

import VueRouter from'vue-router'

//导入路由相关的组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import CartContainer from '../components/tabbar/CartContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import newsList from '../components/news/newsList.vue'

const router = new VueRouter({
    //规定路由规则
    routes:[
        {path: '/', redirect:'/home'},
        {path: '/home', component:HomeContainer},
        {path: '/member', component:MemberContainer},
        {path: '/chart', component:CartContainer},
        {path: '/search', component:SearchContainer},
        {path: '/home/newslist',component:newsList}
    ],
    linkActiveClass:'mui-active'//设置路由高亮的类
    
})

//将实例对象导出
export default router