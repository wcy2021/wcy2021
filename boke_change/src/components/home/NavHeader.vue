<template>
  <div class="nav">
   <el-row :gutter="10">
    <div class="common_header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
   <el-col :span="5"> <el-menu-item index="1" >Home</el-menu-item></el-col>
   <el-submenu index="2">
    <template slot="title">MyBoke</template>
    <el-submenu index="2-1">
      <template slot="title">MyBoke</template>
      <el-menu-item index="2-1-1"  @click="$router.push('/boke')">页面1</el-menu-item>
      <el-menu-item index="2-1-2">博客主页</el-menu-item>
      <el-menu-item index="2-1-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="2-2">studying</el-menu-item>
    <el-menu-item index="2-3">Life</el-menu-item>
    <el-menu-item index="2-4">Coding</el-menu-item>
    
    </el-submenu>
    <el-menu-item index="3"  @click="$router.push('/school')" >School</el-menu-item>
   <el-menu-item index="4">Person</el-menu-item>

   </el-menu>

 </div>

   <div class="common_container">
  <div class="article"></div>

   </div>





<!-- <div class="article_nav_test"></div> -->
<!-- <div class="article_nav_test"></div> -->
<!-- <div class="article_nav_test"></div> -->
<!-- <div class="article_nav_test"></div> -->
<!-- <div class="article_nav_test"></div> -->

<!-- 回到顶部 -->
<!--  <div class="backtop">
    <div class="gotop" v-show="gotop" @click="toTop">
    
    </div>


</div> -->
   



<!-- div结束标签 -->
</el-row>  
</div>  
</template>

<script>


export default {
name:'navheader',
data(){
  return{
activeIndex: '1',
activeIndex2: '1',
 gotop: false,
/* totopimg:require('../../assets/img/totop2.png')  //引入图标 */
  }
},
/* methods:{
handleSelect(key, keyPath) {
console.log(key, keyPath);
  },
   handleScroll() {
       let scrollTop  = document.documentElement.scrollTop  || document.body.scrollTop ;
      scrollTop  > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      
      let top = document.documentElement.scrollTop  || document.body.scrollTop ;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop  = document.documentElement.scrollTop  = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    console.log(this.top)
    console.log(this.timeTop)
    },
 },
 mounted() {
   // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
 }, */


}
</script>

<style scoped>
.html{
  font-family: "microsoft yahei",Verdana, Arial, 微软雅黑;  cursor:pointer;  
     background-size: 100% 100%;
    background-attachment: fixed;
}

.common_header{
  opacity: 0.7;
  width: 400px;
 margin: 0 auto;       /* 居中 */
}


/* 中间内容部分样式 */
/* .common_container{
   background: rgba(255,255,255,0.7); 
   margin: 35px auto; 
   padding: 15px;
   width: 1050px; 
   overflow: hidden; 
   border-radius: 15px;
} */

/* .article{
  height: 1000px;
}
 */

/* 最底部样式 */
/* .Copyright{
  height:80px;
	color:#191970;
  background-color: skyblue;
  margin: 0 auto;
  position: relative;
  
}
.footer_font{
  font-size:20px ;
  margin-top: 25px;
  position: absolute;
  margin-left: 450px;
}
 */
/* 返回顶部 */
.backtop .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  color: #000000;
}
/* .article_nav_test{
  height: 500px;
width: 500px;
background-color: red;
} */


</style>