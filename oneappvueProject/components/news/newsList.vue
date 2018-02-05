<template>
   <div>
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url"> 
						<div class="mui-media-body">
							<h1 class="title">{{ item.title}}</h1>
							<p class='mui-ellipsis'>
                                 <span>发表时间: {{ item.add_time|dateFormat }}</span>
                                <span>点击: {{ item.click }}次</span>
                             </p>
						</div>
					</a>
                </li>
			</ul>
    </div>
</template>


<script>
  export default{
      data(){
        return{
             newslist:[]  //新闻列表的空数组
        }        
      },
      created(){
        this.getNewsList(); 
      },
      methods:{
          async getNewsList(){
              const  { data }  = await this.$http.get('/api/getnewslist');
              if(data.status === 0){
                  this.newslist = data.message

                 }
          }
      }
      
  };
</script>


<style lang="scss">
    .title{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 13px;
        color:#26a2ff;
        display: -webkit-flex;
        display: -moz-flex;
        justify-content: -webkit-space-between;
        justify-content: space-between;
        
    }
    .mui-table-view{
        margin-bottom:50px;
    }
</style>