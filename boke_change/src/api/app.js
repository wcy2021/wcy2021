/* 引入express */
var  express=require ('express');
/* import express from 'express'; */

var app = express();

//解决跨域问题方案   也可以使用cors
app.all('*',function(req,res,next){
  res.header("Access-Control-Allow-Origin",'*');
  res.header("Access-Control-Allow-Headers",'X-Requested-with');
  res.header("Access-Control-Allow-Methods",'PUT,POST,GET,DELETE,OPTIONS');
  res.header("X-Powered-By",'3.2.1');
  res.header("Content-Type",'application/json;charset=utf-8');
  next();

});


//使用内置中间件用于解析post请求urlencoded
app.use(express.urlencoded({extended:true}));



  //1.index 的homeright 数据接口
  
//  right3_title
app.get('/get_right3_title',(req,res)=>{
/* res.send('我是小胖，哈哈哈') */
 var right3_title=['第一次写博客，好激动٩（●ᴗ●）۶','月落乌啼霜满天','江枫渔火对愁眠','姑苏城外寒山寺','夜半钟声到客船'];
   res.send(right3_title)
  })

  //标签云样式
  app.get('/get_dynamicTags',(req,res)=>{
    var dynamicTags= ['博客', '学习', '记录','交流'];
   res.send(dynamicTags)
  })

//index article 
app.get('/get_home_article',(req,res)=>{
  var home_article='当自律变成一种本能的习惯，你就会享受到它的快乐。当懒散，拖延，和不求上进成为习惯时，痛苦也就会随之而来';
res.send(home_article);
})

//boke页文章
/* app.get('/get_boke_article',(req,res)=>{
  var boke_article=[{article_title:'写博客',article_info:'从百草园到三味书屋',article_date:'风中的凌乱 提交于 2021/10/28 20:46'}]
  res.send(boke_article);
})
 */

//云相册接口文件
app.post('/get_cloudphotos',(req,res)=>{
var cloud_all =[
  {
   clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Ftc%2Feb%2FQJ9124407543.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=0fd0edaeaa560d4885116231a1b046c7',
   cloudtitle:'titleone',
   cloudcontent:'今天天气真不戳！'
  }, {
    clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0427%2F071875652097059bbbffe106f9ce3a93.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=d3a513bb0f1d48e556de9f76c71416ad',
    cloudtitle:'titleone',
    cloudcontent:'今天天气真不戳！'
   },
   {
    clouphotos:'https://img0.baidu.com/it/u=4108097980,734062124&fm=26&fmt=auto',
    cloudtitle:'titleone',
    cloudcontent:'今天天气真不戳！'
   },
   {
    clouphotos:'https://img0.baidu.com/it/u=2249620435,4149323983&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500',
    cloudtitle:'titleone',
    cloudcontent:'今天天气真不戳！'
   },
   {
    clouphotos:'https://lupic.cdn.bcebos.com/20210629/2000041519_14.jpg',
    cloudtitle:'titleone',
    cloudcontent:'今天天气真不戳！'
   },{
    clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Ftc%2Feb%2FQJ9124407543.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=0fd0edaeaa560d4885116231a1b046c7',
    cloudtitle:'titleone',
    cloudcontent:'今天天气真不戳！'
   }, {
     clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0427%2F071875652097059bbbffe106f9ce3a93.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=d3a513bb0f1d48e556de9f76c71416ad',
     cloudtitle:'titleone',
     cloudcontent:'今天天气真不戳！'
    },
    {
     clouphotos:'https://img0.baidu.com/it/u=4108097980,734062124&fm=26&fmt=auto',
     cloudtitle:'titleone',
     cloudcontent:'今天天气真不戳！'
    },
    {
     clouphotos:'https://img0.baidu.com/it/u=2249620435,4149323983&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500',
     cloudtitle:'titleone',
     cloudcontent:'今天天气真不戳！'
    },
    {
     clouphotos:'https://lupic.cdn.bcebos.com/20210629/2000041519_14.jpg',
     cloudtitle:'titleone',
     cloudcontent:'今天天气真不戳！'
    },{
      clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Ftc%2Feb%2FQJ9124407543.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=0fd0edaeaa560d4885116231a1b046c7',
      cloudtitle:'titleone',
      cloudcontent:'今天天气真不戳！'
     }, {
       clouphotos:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0427%2F071875652097059bbbffe106f9ce3a93.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639377072&t=d3a513bb0f1d48e556de9f76c71416ad',
       cloudtitle:'titleone',
       cloudcontent:'今天天气真不戳！'
      },
      {
       clouphotos:'https://img0.baidu.com/it/u=4108097980,734062124&fm=26&fmt=auto',
       cloudtitle:'titleone',
       cloudcontent:'今天天气真不戳！'
      },
      {
       clouphotos:'https://img0.baidu.com/it/u=2249620435,4149323983&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500',
       cloudtitle:'titleone',
       cloudcontent:'今天天气真不戳！'
      },
      {
       clouphotos:'https://lupic.cdn.bcebos.com/20210629/2000041519_14.jpg',
       cloudtitle:'titleone',
       cloudcontent:'今天天气真不戳！'
      },
   
       

]
res.send(cloud_all)
})





 //监听端口
app.listen('8888',function(){
  console.log('8888,中间件已经运行,(●’◡’●)ﾉ ')
})