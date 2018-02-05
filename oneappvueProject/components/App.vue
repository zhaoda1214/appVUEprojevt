
<template>
   <div class="app-container">
   <!--Header区域-->
   <mt-header fixed title="商城项目">
      <span slot="left">
        <mt-button icon="back" @click="goBack" v-if="flag">返回</mt-button>
      </span>
   </mt-header>
     
    <!--路由容器-->
    <transition>
       <router-view></router-view>
    </transition>
    
      
      <!--底部的tabbar区域-->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/chart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                <span class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
   </div>
</template>


<script>
    //导入加载提示框 mint-ui提供
    import { Indicator } from 'mint-ui';
    
  export default{
       
      data(){
         return{
             flag:false //默认不显示
         };
      },
      created(){
        this.Interceptors();  
      },
      methods:{
    //初始化一个拦截器
      Interceptors(){
    //开始请求之前的拦截器
     this.$http.interceptors.request.use(config=>{
//    调用加载提示框
       Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
     });
    // Do something before request is sent
    return config;
  });
 
   // 数据拿到之后请求成功之后的拦截器
   this.$http.interceptors.response.use(response=>{
//         当提示框显示结束后调用此函数
          Indicator.close();
          // Do something with response data
          return response;
       });
      },
//     点击heade返回的函数
      goBack(){
//     vue实例上的$ruter里面的一个go函数给他-1就可以返回
      this.$router.go(-1); 
          
     }
    },
      //watch是监视属性可以监视vue实例里面的$route>path 注：可以打印this查看
      watch:{
//          newVue就是被监听到的数据
        '$route.path':{
//          handler  里面的一个对象
            handler:function(newVue){
             //    当newVue等于首页的时性质是true，然后取反变成false,返回键就隐藏了
//  当newVue不等于/home的时候括号里返回的就是flase，然后取反后flag就变成了true了显示返回按 注：初始按     钮设置的是false
           this.flag = !(newVue === '/home');
                
            },
//           因为默认情况下，页面被强制刷新的时候，不会触发watch监听所以，通过immediate强制监听       
            immediate:true
           }
         }
     };
</script>

<style>
  .app-container{
     padding-top:38px;
     overflow:hidden;
     
  }
  
  .v-enter{
  opacity:0;
  transform:translateX(100%);
  }
  
  .v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position:absolute;
  
  }
  
  .v-enter-active,
  .v-leave-active{
  transition:all 1s ease;
  }
  
  
 
</style>