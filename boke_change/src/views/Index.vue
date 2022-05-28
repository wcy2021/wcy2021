<template>
  <div class="home">
     <el-form>
     <el-row><!-- 1.组件与icon -->
     <img :src="index_bgi" class="index_bgi">
     <NavHeader />
      <div class="home_icon"><img :src="home_icon" class="icon_png"></div>
       
       </el-row>
     <el-row :gutter="10">
      <!-- <div class="middle_con"> -->
        
        <el-col :xs="24" :sm="18" :md="18" :lg="18"><div class="middle1"><HomeContainer /></div>  <div class="pikachu"><Pikachu /></div>  </el-col>
        <el-col :xs="0"  :sm="6"  :md="5"  :lg="5"> <div class="middle2"><HomeRight />
                
        </div></el-col>
        <el-col :xs="0"  :sm="0"  :md="1"  :lg="1"> </el-col>
       <!-- </div> -->
     </el-row>

   </el-form>
  </div>
</template>

<script>
import NavHeader from '../components/home/NavHeader.vue'
import HomeRight from '../components/home/HomeRight.vue'
import HomeContainer from '../components/home/HomeContainer.vue'
import Pikachu from '../components/common/Pikachu.vue'

export default {
data() {
  return {
    home_icon:require('../assets/img/kfm.png'),
   input: '',
   index_bgi:require('../assets/img/index_bgi2.jpg')
  }
},
components:{
  NavHeader,HomeRight,HomeContainer,Pikachu,
}
}
</script>

<style scoped>

/* 1.铺满样式 */

.home{
  height: 100%;
  position: relative;

}

.pikachu{
position: absolute;
margin-top: 300px;
left: 1300px;
}
.el-form{
  height: 100%;

}
.index_bgi{
  height: 100%;
  width: 100%;
    border-radius: 20px;
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

  .el-row{
   /*  height: 100%; */
    position: relative;
   /*  background-color: black; */
  }
  .icon_png{
   position: absolute;
   left: 100px;
   width: 200px;
   height: 150px;
   top: -60px;
   display: inline-block;
  height: auto;
  max-width: 100%;
}

.middle2{
/*   height:800px;
  opacity: .7;
border-radius: 20px; */
margin-top: -50px;
}
.middle1{
  margin-top: 100px;
  height: 1500px;
/*   background-color:green;
  opacity: .5; */
  border-radius: 10px;
}


@media  screen and (max-width:1100px) {
  .middle2{
    display: none;
  }
}
@media screen and (max-width:786px) {
  .icon_png{
    display: none;
  }
  .home{
    height: 100%;
  }
}
/* .right1{
  height: 200px;
  background-color:red;
  margin-top: 50px;
  border-radius: 15px;
}
.right2{
 height: 200px;
  background-color:green; 
   margin-top: 50px;
   border-radius: 15px;
}
.right3{
 height: 200px;
  background-color:skyblue; 
   margin-top: 100px;
   border-radius: 15px;
} */
</style>