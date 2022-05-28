<template>
  <div class="right">

     <el-row><div class="right1"><img :src="icon_bgi" class="icon_bgi"> <img :src="right_icon" class="right_icon"></div></el-row>
     <el-row><div class="right2"></div></el-row>
     <el-row><div class="right3">
       <span class="newarticle">{{newarticle}}</span><hr>
       <ul v-for="(item,index) in right3_title" :key="index">
         <li><i class="el-icon-paperclip"><span>{{item}}</span></i><hr></li>
         
       </ul>
       </div></el-row>
<!-- 标签云 -->
     <el-row><div class="right4">
        <span class="right_tag">{{right_tag}}</span><hr>
         <div class="tag_span">
            <el-tag
           :key="index"
           v-for="(item,index) in dynamicTags"
           closable
           :disable-transitions="false"
           @close="handleClose(tag)">
           {{item}}
           </el-tag>
            <el-input
           class="input-new-tag"
           v-if="inputVisible"
           v-model="inputValue"
           ref="saveTagInput"
           size="small"
           @keyup.enter.native="handleInputConfirm"
           @blur="handleInputConfirm"
           >
           </el-input>
           <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
         </div>
       </div></el-row>

       <el-row>
        <div class="right5" >
          <el-calendar v-model="value">
            </el-calendar>
        </div>
       </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    icon_bgi:require('../../assets/img/home/home_right_bgi2.jpg'), 
    right_icon:require('../../assets/img/logo.jpg'),
    newarticle:'最新文章',
    right_tag:'标签云',
    inputVisible: false,
    inputValue: '',
    value: new Date(),
    right3_title:'',
    dynamicTags:'',
   
  }
},
 methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
 },
  created() {
   axios.get('http://localhost:8888/get_right3_title')  //right1
   .then(_d=>{
     this.right3_title=_d.data;
    // console.log(_d.data);
   }) ,
 axios.get('http://localhost:8888/get_dynamicTags')  //标签云
 .then(_d=>{
   this.dynamicTags=_d.data
   //console.log(_d.data);
 }) 
 }
 

}
</script>

<style scoped>
.el-calendar-table .el-calendar-day{
  height: 0px;
}
/* 右1样式 */
.right1{
  height: 130px;
  margin-top: 100px;
  border-radius: 5px;
 /*  position: relative; */
  
}


.icon_bgi{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
  background-size: cover;
  
}

.right_icon{
  margin-top: 30px;
  position: absolute;
  top: 60%;
  left: 40%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px #ccc;
  transform: rotate(360deg);
  animation: rotation 3s linear infinite;
   
}
 @keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
    }
/* logo动画 */

/* 右1 下面阴影部分 */
.right2{
 height: 100px;
  background-color:#EDEDED; 
  opacity: .3;
   /* margin-top: 50px; */
   border-radius: 15px;
}

/* 右2样式 */
.right3{
 height: 100%;
 background-color:#EDEDED; 
 margin-top: 20px;
 border-radius: 15px;
 opacity: .7;
 /* box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%); */
}
 .right li:hover{
   background-color: #EDEDED;
   opacity: .7;
 }

.el-icon-paperclip{
  margin-top: 10px;
}
.newarticle{
  margin-right: 150px;
}
/* 右3样式 */
.right4{
 height: 250px;
 background-color:#ccc; 
 opacity: .7;
 margin-top: 50px;
 border-radius: 15px;
 position: relative;
}
.right_tag{
  margin-right: 170px;

}

.tag_span span{
  margin-right: 10px;
  margin-top: 10px;
}

/* 右侧tag样式 */
 .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

/* right5 相关样式 */
  .right5{
    margin-top: 50px;
   background-color: #EDEDED;
   opacity: .9;
   
  }
/* 
.el-calendar-table .el-calendar-day{
    height: 40px;
}
 */

 @media screen and (max-width:1000px) {
     .home_input{
      display: none;
    }
  }
 
</style>