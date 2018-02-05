//在搭建项目结构的时候需要先把根组件渲染出来App.vue

//项目入口文件

//导入vue
import Vue from 'vue'

//导入axios并挂载
import axios from 'axios'
//配置全局的ajax根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000';
Vue.prototype.$http = axios


//导入vue-router包
import vueRouter from 'vue-router'
//为vue安装vue-router
Vue.use(vueRouter)
//导入mint-ui并导入其样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//为vue安装我们的MintUI
Vue.use(MintUI)
//导入mui样式表，在此之前先去webpack.config.js添加样式匹配如不这么做会报错
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//导入根组件
import App from '../components/App.vue'
import router from './router.js'


const vm = new Vue({
    el:'#app',
    //将App根组件渲染到index里
    render: c => c(App),
    router//将路由挂在到vm实例上
    
});


