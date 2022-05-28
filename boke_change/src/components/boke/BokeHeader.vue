
<template>
  <div class="bokeheader">
    <div class="topheader">
      <div class="i_top">
      <i class="el-icon-s-unfold" id="changelist"></i>
      <i class="el-icon-s-custom"  id="loginbtn" @click="$router.push('/login')"></i>
      </div>
  <div class="top-content">
   <span class="boke_name">{{boke_name}}</span><br>
   <span class="boke_info">{{boke_info}}</span>
  </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    boke_name:'风中的凌乱',
    boke_info:'一个用于学习与记录的博客,学习从此刻开始',
  }
}
}
</script>

<style scoped>
.topheader{
  background-color:skyblue;
 
  height: 100px;  
}
.i_top{
  position: relative;
}
.i_top i{
font-size: 30px;
}


#changelist{
  position: absolute;
  left: 50px;
  margin-top: 30px;
}
#loginbtn{
  position: absolute;
  right: 30px;
  margin-top: 10px;
}
.boke_name{
 /*  position: absolute; */
  margin-right:400px;  
/*  margin-top: 100px; */
  color: #fff;
  text-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  font-size: 30px;
}
.boke_info{
  margin-left: 220px;
}
@media screen and (max-width:769px) {
  .boke_name ,.boke_info{
   display: none;
  }
}
</style>