<template>
  <div clas="">
   <!--轮播图-->
   <mt-swipe :auto="4000">
       <mt-swipe-item v-for="item in Slide" :key="item.img">
       	<img :src="item.img" alt="" />
       </mt-swipe-item>
   </mt-swipe>
             <!--mui六宫格布局-->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                   <img src="../../src/imges/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../src/imges/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../src/imges/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../src/imges/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../src/imges/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../src/imges/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		      </ul>       
        </div>
</template>

<script>
	//	export与export default均可用于导出常量、函数、文件、模块等
   export default{
      data(){
        return{
          Slide:[] //盛放新闻资讯的列表
        };
     },
      created(){
        this.getSlide();
      },
      methods:{
        async getSlide(){
        const{ data } = await this.$http.get('/api/getlunbo');
         if( data.status === 0 ){
            this.Slide = data.message
       }
      }
    }

};
</script>

<style lang="scss">
/*    轮播图部分*/
  .mint-swipe{
    height:180px;
      img{
  		width: 100%;
  	    height: 100%;
      }
    }
/*九宫格布局部分*/
   .mui-media{
/*       九宫格图标宽高*/
       img{
         width: 60px;
  	     height: 60px;
        }
    }
/*因为九宫格标题的类优先级高自己用它的类名设置字体大小*/
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
/*    九宫格背景颜色修改*/
    .mui-grid-view.mui-grid-9{
        background:white;
        border: none;
    }
/*    九宫格li的border*/
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
   
</style>