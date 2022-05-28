<template>
<div class="homecontainer"> 
    <!-- 1.轮播图 -->
  <div class="swiper">
   <el-carousel :interval="1000" type="card" height="300px">
      <el-carousel-item v-for="item in swiperlist" :key="item" class="swiperlist">
       <!--  <h3 class="medium">{{item}}</h3> -->
        <img :src="item" alt="" />
      </el-carousel-item>
   </el-carousel>
  </div>
  <!-- 2.article section -->
     <!--2.1 hotlist section -->

     <div class="hotlist">
       <div class="hot1" v-for="(item,index) in  hot_all" :key="index">
        <img :src="item.hot_img" class="hot_img" > 
         <div class="hot_title"><div class="title_con">{{item.hot_title}}</div></div>
       </div>
 
     </div>   
     <!-- The hot  end! -->
       
       <!--3.1 article section code -->
       <div class="home_article" v-for="(item,index) in home_article_all" :key="index">
         <div class="article1" >
          <img :src="item.article_img" class="article_img1" >
           <span class="article_con">{{item.article}}</span>
          <a href="https://baijiahao.baidu.com/s?id=1662094639005202083&wfr=spider&for=pc">  <el-button type="primary" plain  class="checkbtn">{{item.article_more}}</el-button></a>
         </div>
       </div>

</div>
</template>

<script>
export default {
data() {
  return {
    swiperlist:[
      require("../../assets/img/home/home_swiper/swiper1.jpg"),
      require("../../assets/img/home/home_swiper/swiper2.jpg"),
      require("../../assets/img/home/home_swiper/swiper3.jpg"),
      require("../../assets/img/home/home_swiper/swiper4.jpg"),
    ],
    
      home_article:'',
      hot_all:[
      {
        hot_img:require('../../assets/img/home/home_hot/hot1.jpg'),
        hot_title:'用于学习与记录的博客',
      },{
       hot_img:require('../../assets/img/home/home_hot/hot2.jpg'),
        hot_title:'用于学习与记录的博客',
      },{
        hot_img:require('../../assets/img/home/home_hot/hot3.jpg'),
        hot_title:'用于学习与记录的博客',
      } ,{
        hot_img:require('../../assets/img/home/home_hot/hot4.jpg'),
        hot_title:'用于学习与记录的博客',
      }
      ],        /* article section  */
      home_article_all:[
      {
      article:`当自律变成一种本能的习惯，你就会享受到它的快乐。当懒散，拖延，和不求上进成为习惯时，痛苦也就会随之而来。`,
      article_img:require('../../assets/img/home/home_hot/hot4.jpg'),
      article_more:'查看更多',
      all_article:'4', 
        },
          {
      article:`当自律变成一种本能的习惯，你就会享受到它的快乐。当懒散，拖延，和不求上进成为习惯时，痛苦也就会随之而来。`,
      article_img:require('../../assets/img/home/home_hot/hot4.jpg'),
      article_more:'查看更多',
      all_article:'4', 
        }, {
      article:`当自律变成一种本能的习惯，你就会享受到它的快乐。当懒散，拖延，和不求上进成为习惯时，痛苦也就会随之而来。`,
      article_img:require('../../assets/img/home/home_hot/hot4.jpg'),
      article_more:'查看更多',
      all_article:'4', 
        }, {
      article:`当自律变成一种本能的习惯，你就会享受到它的快乐。当懒散，拖延，和不求上进成为习惯时，痛苦也就会随之而来。`,
      article_img:require('../../assets/img/home/home_hot/hot4.jpg'),
      article_more:'查看更多',
      all_article:'4', 
        },

      ]
  }  

},

}
</script>

<style scoped>
.hotlist {
      background-color: #fff;
      opacity: .9;
      border-radius: 20px;
      padding: 1rem 1rem;
      cursor: pointer;
      border-bottom: 2px solid #ccc;
      transition: all 0.6s;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;
    }
    /* hot图片样式 */
    .hot_img{
      
      width: 200px;
      height: 200px;
      border-radius: 10px;
      transition: transform linear 1.5s; 
    }
    img:hover{
     transform: scale(1.1);
     box-shadow: 0.5px  0.5px 0.5px 0.5px ;
     border: 2px solid red;
    }
    .hot_title{
      background-color: #EDEDED;
      width: 200px;
      text-align:center;
      height: 20px;
    
    }
    .hot_title :hover{
      background-color: skyblue;
    }
    .title_con{
     color: #EDEDED;
    }


/* article section css */


.article1{
 /*  margin-top: 30px;
  border: 1px solid red;
  height: 280px;
  position: relative; */
  background-color: #fff;
  opacity: .9;
  margin-top: 50px;
  animation: animated-border 1.5s infinite;
  font-family: Arial;
  font-size: 15px;
  height: 200px;
  /* line-height: 100px; */
  font-weight: bold;
  border: 2px solid skyblue;
  border-radius: 20px;
  padding: 15px;
  transition:transform 2s linear;
}
.article1 :hover{
   transform:translate(20px,0px); 
  
   
}
.article_img1{
  width: 150px;
  height: 150px;
  margin-top:40px ;
  position: absolute;
  
}
.article_con{
margin-left: 300px;
margin-top: 100px;
}


.checkbtn{
  position: absolute;
  margin-top: 120px;
  margin-left: -130px;
}
  /* response code */
  @media screen and (max-width:1200px) {
    .hotlist{
    display: none;
    }
  }
 
</style>