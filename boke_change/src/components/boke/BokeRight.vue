<template>
  <div class="right-container">
    <el-card class="box-card">
  <div  class="clearfix">
    <span><i class="el-icon-coffee"></i>博客信息</span>
  </div>
  <div class="ItemList">
    <span class="left">
      <i class="el-icon-coffee-cup"></i>
      文章总数
    </span>
    <span>
        {{boke_count}}
    </span>
  </div>
  <div class="ItemList">
    <span class="left">
      <i class="el-icon-goblet"></i>
      运行天数
    </span>
    <span>
        {{runDays}}天
    </span>
  </div>
<div class="qq_mail">
 <div class="mail_title"> <i class="el-icon-chat-dot-round"><span>联系方式</span></i></div>
  <div  id="mail_number"> 
<img src="https://imgs.bwmelon.com/20190506153935.png" class="mail_icon"><span>{{qq_mail}}</span>
</div>
<br><hr>
 <div class="ItemList" id="qrcode"> 
<img :src='qrcode' class="qrcode_icon" >
</div>
  </div>
<hr>
  <!--  <div class="ItemList">  
     
   </div> -->
</el-card>
  </div>
</template>

<script>
export default {
data(){
  return{
boke_count:'0',
runDays:'95',
qq_mail:'2112946604@qq.com',
qrcode:require('../../assets/img/qrcode.jpg'),
 
  }
}
}
</script>

<style scoped>



.box-card {
    width: 100%;
    margin-bottom: 1.25rem;
    background-color: #EDEDED;
}
i{
      margin-right: 8px;
      font-size: 19px;
    }
     .ItemList {
      padding: 0.8rem 0.5rem;
      cursor: pointer;
      color: #555;
      border-bottom: 1px solid #ccc;
      transition: all 0.6s;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
        font-size: 14px;
        color: black;
        font-weight: bold;
        white-space: nowrap;
      }
       .left {
        display: block;
        width: 68%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
       .ItemList:hover {
      background: #f2f2f2;
      color: lightgreen;
      padding-left: 0.8rem;
    }
    .ItemList:last-child {
      border-bottom: none;
    }
    /* 图标样式 */
    .clearfix , .mail_title {
      position: relative;
      right: 40px;
    }
    .mail_icon{
      border-radius: 20px;
      width: 40px;
      height:40px;
    }
    #mail_number{
      
      right: 50px;
      top: 200px;
    }
    .qrcode_icon{
      height: 120px;
      width: 120px;
     
      top:280px;
    }
   
   @media screen and(max-width:1100px) {
    .clearfix{
        margin-left:100px;
      } 
   }
   
</style>