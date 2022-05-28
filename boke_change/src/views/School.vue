
<template>
  <div class="test1">
    <NavHeader />
    <el-form>
   <el-row :gutter="0">
  <el-col :xs="0" :sm="5" :md="5" :lg="5" :xl="5" class="span5"><div class="col1">
    <!-- <div class="left_top"> -->
          <img :src="sidenav" class="sidenav">
       <!-- </div> -->
    </div></el-col>

  <el-col :xs="24" :sm="15" :md="15" :lg="15" :xl="18"><div class="col2">
    <!-- right1 section start ！ -->
    <el-row class="right1">
       <el-row class="right1">
           <div class="school_title">  
            <div class="top_title"> <strong><span>{{top_title}}</span></strong></div> <br>
             <div class="article_container"><strong><span>{{article_container}}</span></strong></div>
              <el-button type="primary" round class="KnownMore">KnownMore</el-button>

           </div>
        </el-row>  
       
    </el-row>       
    <el-row class="right2">
      <el-col :span='9' class="pic1" :offset="2"> <img :src="school_img1" class="pic1"></el-col>
      <el-col :span='9' class="pic2" :offset="2"> <img :src="school_img2" class="pic2"></el-col>
      <el-col :span='9' class="pic1" :offset="2"> <img :src="school_img3" class="pic1"></el-col>
      <el-col :span='9' class="pic2" :offset="2"> <img :src="school_img4" class="pic2"></el-col>
      <el-col :span='9' class="pic1" :offset="2"> <img :src="school_img5" class="pic1"></el-col>
      <el-col :span='9' class="pic2" :offset="2"> <img :src="school_img6" class="pic2"></el-col>
      
    </el-row>       
     </div>
  
  <!-- map api -->
   <!--  <div class="map">
      
    </div> -->
   </el-col>
  
  </el-row>

   </el-form>
  </div>
</template>

<script>
import NavHeader from '../components/home/NavHeader.vue'
export default {
  components:{ NavHeader },
data(){
 return{
   sidenav:require('../assets/img/school_img/school_left.jpeg'),
       top_title:'湖北理工学院',
    article_container:`
    Believe in your faith. Set the vision before your eyes. 
      Write down your most sincere dreams and when the opportunity comes, step into your dream. It may take one season or more, but the result is the same. 
      Make big dreams and then go out and make them realities. The highest hopes of the dreamer are revealed with every step taken in their journey to the impossible.
      For a season we must protect the dream so that it can grow quietly on the inside.
      But if we tenderly care for our deepest expectations, slowly but surely the dream will become new life!
    `,
   KnownMore:'LearnMore' ,
   school_img1:require('../assets/img/school_img/school_main_img1.jpg'),
   school_img2:require('../assets/img/school_img/school_main_img2.jpeg'),
   school_img3:require('../assets/img/school_img/school_main_img3.jpg'),
   school_img4:require('../assets/img/school_img/school_main_img4.jpg'),
   school_img5:require('../assets/img/school_img/school_main_img5.jpg'),
   school_img6:require('../assets/img/school_img/school_main_img6.jpg'),
 
 }
},

}
</script>

<style scoped>
/* 1.铺满 */
.test1{
  height: 100%;
}
.el-form{
  height: 100%;
}
.el-row{
  height: 100%;
}
.span5{
  height: 100%;
}
/* .left_top{
  height: 100%;
} */
/* 2.左侧 */
.sidenav{
  border-radius: 20px;
	height: 100%;
   width: 320px;
   background-position: center 0; 
   background-size: 100% auto;
   background-repeat: no-repeat;
   background-attachment:fixed; 
	position: fixed;
 /* 	z-index: 1; */
	top: 0;
	left: 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
	overflow-x:clip   ;

}
.col1{
  height:100%;
  /* background-color:red; */
}
/* .col2{
  height: 500px;
  background-color:skyblue;
} */


/* right section css */
.right1{
  font-size: 18px;
 /*  border:solid 1px red; */
  margin-top: 50px;
  /* background-color:blue; */
  height: 300px;
  position: relative;
}
.top_title{
  font-size: 50px;
}
.KnownMore{
  margin-top: 80px;
  margin-left: 800px;
}

/* right2 sections start ! */
/* .right2{
  background-color:#aa1d1d;
  opacity: .5;
  height: 200px;
  top: 50px;
} */
.right2{
  margin-top: 50px;
}
.pic1{
  margin-top: 100px;
  height: 300px;
  width: 300px;
 /*  background-color:yellow; */
}
.pic2{
  margin-top: 100px;
  height: 300px;
  width: 300px;
  /* background-color: red; */
}
.map{
  margin-top: 300px;
  height: 600px;
  margin-left: 50px;
  border-radius: 20px;
  background-color: blue;
}


/* response code  */
@media screen and (max-width:900px) {
 .pic{
   width: 150px;
   height: 150px;
   
 }

}
</style>
