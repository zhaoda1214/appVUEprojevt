//在搭建项目结构的时候需要先把根组件渲染出来App.vue

//项目入口文件

//导入vue
import Vue from 'vue'

//导入axios并挂载
import axios from 'axios'
//配置全局的ajax根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000';
Vue.prototype.$http = axios

//创建一个全局的时间过滤器
import moment from 'moment' //导入时间过滤器的包 ateFormat是过滤时间用的把它放到时间渲染的页面一起
Vue.filter('dateFormat',function(val){
  //借助于moment.js包来快速格式化时间
  //moment是一个函数可以直接被调用如果直接被调用的话就是当前的时间
  //如果给它传一个字符串就是根据你指定的字符串得到一个
  //指定的时间它里面还有一个format方法可以指定时间格式
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
})
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


