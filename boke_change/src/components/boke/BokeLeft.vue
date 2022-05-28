
<template>
  <div class="bokeleft">
      <div class="icon_section"> <!-- <img :src="boke_icon" class="boke_icon"> --></div>
    <el-row style="height:50%" class="nav_list">
                        <!-- <el-col :span="8"> -->
                        <el-col :span="24" style="height:100%;">
                            <el-menu
                             default-active="2"
                            class="el-menu-vertical-demo"
                             background-color="#545c64"
                             text-color="#fff"
                             active-text-color="#ffd04b"
                             >
                            <!--  background-color="#545c64" -->
                            <el-menu-item index="1" @click="$router.push('/index')">
                                <i class="el-icon-menu"></i>
                                <span slot="title">首页</span>
                            </el-menu-item>
                            <el-menu-item index="2" @click="$router.push('/boke')">
                                <i class="el-icon-video-camera"></i>
                                <span slot="title">Blog</span>
                            </el-menu-item>
                            <el-menu-item index="3" @click="$router.push('/bokealbum')">
                                <i class="el-icon-picture-outline"></i>
                                <span slot="title">云相册</span>
                            </el-menu-item>
                            <el-menu-item index="4" @click="$router.push('/message')">
                                <i class="el-icon-chat-dot-round"></i>
                                <span slot="title">留言板</span>
                            </el-menu-item>
                            <el-menu-item index="5" @click="$router.push('/bokeinfo')">
                                <i class="el-icon-user"></i>
                                <span slot="title">个人介绍</span>
                            </el-menu-item>
                            <div class="navTitle">
                               
                            </div>
                            <el-submenu index="6">
                                <template slot="title">
                                <i class="el-icon-menu"></i>
                                    <span slot="title">文章分类</span>
                                </template>
                                <el-menu-item index="6-1">编程分享</el-menu-item>
                                <el-menu-item index="6-2">娱乐新闻</el-menu-item>
                                <el-menu-item index="6-3">心灵美文</el-menu-item>
                            </el-submenu> 
                             <el-menu-item index="7"  @click="$router.push('/album')">
                                <i class="el-icon-setting" ></i>
                                <span slot="title">毕业相册</span>
                            </el-menu-item>  
                            
                       <!--  <el-menu-item index="7" >
                                <i class="el-icon-setting"></i>
                                <span slot="title">后台管理</span>
                            </el-menu-item>  --> 
                            
                    
                        <!--  <el-menu-item v-for="(item,index) in boke_nav_list" :key="index">
                          
                            <router-link :to="item.url">
                                  <i class="item.icon" ></i>
                                  <span>{{item.title}}</span>
                            </router-link>
                         
                          </el-menu-item> -->




                            </el-menu>
                        </el-col>
                    </el-row>
  </div>
</template>

<script>
export default {
data() {
    return {
      /*  boke_icon: require('../../assets/img/boke/boke_index/boke_icon.jpg'), */
       boke_nav_list:[
           {
               title:'首页',icon:'el-icon-menu',url:'/test1'
           },
               {
               title:'管理',icon:'el-icon-picture-outline',url:'/test2'
           },
               {
               title:'哈哈',icon:'el-icon-menu',url:'/test3'
           },
               {
               title:'嘿嘿',icon:'el-icon-picture-outline',url:'/test4',
           },
       ]
    }
},
}
</script>

<style scoped>

/* .icon_section{
    margin-top: 10px;
    transition: transform linear 1.5s; 
    height: 150px;
} */
.boke_icon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
/* .nav_list{
    margin-top: -30px;
} */

 img:hover{
    transform: scale(1.1);
}

@media screen and(max-width:1140px) {
    .boke_icon{
        display: none;
    }
}
</style>