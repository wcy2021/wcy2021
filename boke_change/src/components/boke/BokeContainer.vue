<template>
  <div class="bokecontainer">
    
     <ul id='timeline'>
  <!--    <ul> -->

       <li class='work' v-for="(item,index) in boke_article"  :key="index">
         <input class='radio' id='work1' name='works' type='radio' checked>
         <div class="relative">
         <!--  <el-timeline-item timestamp=item.timestamp placement="top"> -->
          <div  placement="top"> 
         <el-card>
           <h4 >{{item.artile_title}}</h4>
           <p class="article_date">{{item.article_date}}</p>
            <el-button type="primary" round class="article_more" @click="$router.push('/boke')">查看更多</el-button>
         </el-card>
       <!-- </el-timeline-item> -->
       </div>
        <span class='circle'></span>
           
         </div>
       </li>

  </ul>

   <div class="article_list">
   <el-pagination
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    <!--    :current-page.sync="currentPage3"
              @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
     -->
   </div>

   
  </div>
</template>

<script>
 export default {
    data() {
      return{
    
       boke_article:[
         {
          timestamp:2021/10/28,
          artile_title:'写博客',
          article_date:'风中的凌乱 提交于 2021/10/28 20:46'
         },
            {
          timestamp:2021/10/28,
          artile_title:'写博客',
          article_date:'风中的凌乱 提交于 2021/10/28 20:46'
         },
            {
          timestamp:2021/10/28,
          artile_title:'写博客',
          article_date:'风中的凌乱 提交于 2021/10/28 20:46'
         },
            {
          timestamp:2021/10/28,
          artile_title:'写博客',
          article_date:'风中的凌乱 提交于 2021/10/28 20:46'
         },
            {
          timestamp:2021/10/28,
          artile_title:'写博客',
          article_date:'风中的凌乱 提交于 2021/10/28 20:46'
         },
       ]
      }
    }
  };
</script>

<style scoped>
  body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  font-size: 100%;
  font-family: "Noto Sans", sans-serif;
  color: #eee9dc;
  background: #48b379;
}
 
h2 {
  margin: 3em 0 0 0;
  font-size: 1.5em;
  letter-spacing: 2px;
  text-transform: uppercase;
}
 
/* -------------------------------------
 * timeline
 * ------------------------------------- */
#timeline {
  list-style: none;
  margin: 0px 0 30px 120px;
  padding-left: 30px;
  border-left: 8px solid #eee9dc;
}
#timeline li:not(:first-child) {
  margin:30px 0;
  position: relative;
}
.el-card:hover{
  box-shadow: 0px 0px 1px 1px rgb(37, 247, 82);
}

#timeline p {
  margin: 0 0 15px;
}
 
.date {
  margin-top: -10px;
  top: 50%;
  left: -158px;
  font-size: 0.95em;
  line-height: 20px;
  position: absolute;
}
 
.circle {
  margin-top: -10px;
  top: 50%;
  left: -44px;
  width: 10px;
  height: 10px;
  background: #48b379;
  border: 5px solid #eee9dc;
  border-radius: 50%;
  display: block;
  position: absolute;
}
 
.content {
  max-height: 20px;
  padding: 50px 20px 0;
  border-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5em;
  position: relative;
}
.content:before, .content:after {
  content: "";
  width: 0;
  height: 0;
  border: solid transparent;
  position: absolute;
  pointer-events: none;
  right: 100%;
}
.content:before {
  border-right-color: inherit;
  border-width: 20px;
  top: 50%;
  margin-top: -20px;
}
.content:after {
  border-right-color: #48b379;
  border-width: 17px;
  top: 50%;
  margin-top: -17px;
}
.content p {
  max-height: 0;
  color: transparent;
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
}
 
label {
  font-size: 1.3em;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  top: 20px;
  transition: transform 0.2s linear;
}
 
.radio {
  display:none;
}
 
.radio:checked + .relative label {
  cursor: auto;
  transform: translateX(42px);
}
.radio:checked + .relative .circle {
  background: #f98262;
}
.radio:checked ~ .content {
  max-height: 180px;
  border-color: #eee9dc;
  margin-right: 20px;
  transform: translateX(20px);
  transition: max-height 0.4s linear, border-color 0.5s linear, transform 0.2s linear;
}
.radio:checked ~ .content p {
  max-height: 200px;
  color: #eee9dc;
  transition: color 0.3s linear 0.3s;
}
 .article_more{
  margin-left: 600px;
}
/* .article_list{
  margin-top: 100px;
}
 */
/* .el-pagination{
  background-color: red;
} */

/* -------------------------------------
  response code 
 * ------------------------------------- */
@media screen and (max-width: 767px) {
  #timeline {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
  #timeline li {
    margin: 50px 0;
  }
 
  label {
    width: 85%;
    font-size: 1.1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    transform: translateX(18px);
  }
 
  .content {
    padding-top: 45px;
    border-color: #eee9dc;
  }
  .content:before, .content:after {
    border: solid transparent;
    bottom: 100%;
  }
  .content:before {
    border-bottom-color: inherit;
    border-width: 17px;
    top: -16px;
    left: 50px;
    margin-left: -17px;
  }
  .content:after {
    border-bottom-color: #48b379;
    border-width: 20px;
    top: -20px;
    left: 50px;
    margin-left: -20px;
  }
  .content p {
    font-size: 0.9em;
    line-height: 1.4;
  }
 
  .circle, .date {
    display: none;
  }
}
</style>