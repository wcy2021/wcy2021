
<template>
<div class="articledetail">
  <el-form>
 
    <el-row><div class="row1"><BokeHeader/></div></el-row>
    <el-row>
      <el-col :xs="0"  :sm="2"  :md="3"  :lg="3" > <div class="col1" v-show="changelist"> <BokeLeft /></div></el-col>

      <el-col :xs="24" :sm="18" :md="18" :lg="18"> <div class="col2">
        <div class="artcle_details">
            <div class="article_content">
               <el-button type="primary" class="back_article_list" @click="$router.push('/boke')">返回列表</el-button>
           <div class="img_list" v-for="(item,index) in img_list_all"   :key="index">
            <img :src="item.img_list" class="img_self" >
           </div> 
        </div>  </div>
     </div></el-col>
      <el-col :xs="0"  :sm="4"  :md="3"  :lg="3" > <div class="col3"><BokeRight /> </div></el-col>
    </el-row>
   <el-row> <div class="copyight"><Copyight /></div></el-row>
  </el-form>
   
  </div>  
 
</template>

<script>
import BokeHeader from '../boke/BokeHeader.vue'
import BokeLeft from '../boke/BokeLeft.vue'
import BokeRight from '../boke/BokeRight.vue'
/* import BokeContainer from '../boke/BokeContainer.vue' */
import Copyight from '../home/Copyight.vue'
export default {
  data() {
    return {
      /* boke_bgi:require('../assets/img/common_bgi.jpeg'), */
     changelist:true,
     img_list_all:[
     {
     img_list:require('../../assets/img/boke/album_img/album1.jpg')
     },{
       img_list:require('../../assets/img/boke/album_img/album2.jpg')
     },{
     img_list:require('../../assets/img/boke/album_img/album3.jpg')
     },{
       img_list:require('../../assets/img/boke/album_img/album4.jpg')
     },
    ]
    }
  },
components:{
  BokeHeader,BokeLeft,BokeRight,/* BokeContainer */Copyight,
},
methods:{
 
}
}
</script>

<style scoped>

/* 1.铺满样式 */
#app{
  height: 100%;
}
.bokealbum{
  height: 100%;
  /* background: url('../assets/img/common_bgi.jpge') center; */
  background-attachment: fixed;
	background-size: 100%;
  overflow: auto; 

}
.artcle_details{
 /*  background-color:#bfabfa; */
  opacity: .7;
  height:100%;
  position: relative;

}
.back_article_list{
  left: 100px;
  position: absolute;
  margin-top: 20px;
}
.article_content{
  box-shadow: 0px 0px 1px 1px rgb(37, 247, 82);
}

.el-form{
  height: 100%;
}

/* sections css  */

/* .row1{
  position: fixed;
} */
.col1{
/*   background-color: #EDEDED;
  opacity: .7; */
  height: 500px;
}
.col2{
  background-color:#EDEDED;
  opacity: .9;
  height: 100%;
  border-radius: 10px;
}.col3{
/*   margin-top: 50px; */
  background-color:#EDEDED;
  opacity: .7;
  height: 500px;
  border-radius: 10px;
}

/* bgi css */
.boke_bgi{
  top: 0;
	left: 0;
   background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
	overflow-x:clip   ;
  background-position: center 0; 
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment:fixed; 
	position: fixed;
}

.img_self{
  width: 200px;
}




/* reponse code */
@media screen and (max-width:769px){
/*   .boke{
     background: url('../assets/img/short.jpg') center ;
  } */
.col1{
 width: 50%;
}
}


</style>