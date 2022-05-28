


<template>
  <div class="home_right">
    <div class="test">
      <!-- <img :src="icon_bgi" class="icon_bgi"></div> -->
      <img :src="right_icon" class="right_icon">
      <span class="right_title">{{right_title}}</span>
      <hr>
      <div class="tips1">  <!-- 右1 -->
      <span>最近文章</span><br>
      <span><i class="el-icon-paperclip">article1</i></span><br>
      <span><i class="el-icon-paperclip">article1</i></span><br>
      <span><i class="el-icon-paperclip">article1</i></span><br>
      <span><i class="el-icon-paperclip">article1</i></span><br>
      <br>
      <hr>

     </div>  <!-- 右1结束 -->
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    /* icon_bgi:require('../../assets/img/home/home_right_bgi.jpg'), */
    right_icon:require('../../assets/img/logo.jpg'),
    right_title:`如今最好，别说来日方长，时光难留，只有一去不返。`,
  }
},
}
</script>

<style scoped>

.icon_bgi{
  border-radius: 15px;
  margin-top: 10px;
  width: 300px;
  height: 150px;
  position: relative;
 flex-grow: 0;
 flex-shrink: 0;
  
}
.right_icon{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
 right: 200px;
 top:100px;
 box-shadow: 0 0 20px #ccc;
  transition:transform 2s ;
  transform: rotate(360deg);
  animation: rotation 3s linear infinite; 
  display: inline-block;
  height: auto;
  max-width: 100%;
}



@keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
    }
    .right_title{
      font-size: 13px;
    }

.right_title{
  margin-top: 50px;
 
}
.tips1{
text-align: center;
}

   /*  @media screen and (max-width:1300px) {
      .icon_bgi ,.right_title {
        display: none;
      }
      .right_icon{
        top: 50px;
        right: 100px;
      }
      .tips1{
  
        top: 100px;
      }
      .right_top{
        position: absolute;
    width: 500px;

      }
    } */
</style>