<template>
  <div class="student_album">
  <div class="wrap">
   <div class="box" v-for="(item,index) in albums " :key="index">
			<div class="left">  <img :src="item.album" ></div>
			<div class="right"> <img :src="item.album" ></div>
			<div class="top">   <img :src="item.album" ></div>
			<div class="bottom"><img :src="item.album" ></div>
			<div class="after"> <img :src="item.album" ></div>
			<div class="before"><img :src="item.album" ></div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
data(){
  return{
  albums:[
    {
      album:require('../../assets/img/student_album/album1.jpg')
    }
  ]
  }
}
}
</script>

<style scoped>
		*{margin: 0;padding: 0;}
		
		.wrap{width: 600px;height: 400px;margin: 200px auto;}
		.box{width: 200px;height: 200px;margin: 100px auto;position: relative;transition: all 3s;transform-style: preserve-3d;animation: move 3s infinite linear alternate;}
		.box>div{width: 200px;height: 200px;font-size: 60px;/* opacity: .5 */;position: absolute;top: 0;left: 0;transition: all 3s;}
		
		.box img{width: 200px;height: 200px;}
		
		.left{transform: rotateY(90deg) translateZ(-100px);}
		.right{transform: rotateY(90deg) translateZ(100px);}
		.top{transform: rotateX(90deg) translateZ(100px);}
		.bottom{transform: rotateX(90deg) translateZ(-100px);}
		.after{transform: translateZ(-100px);}
		.before{transform: translateZ(100px);}
		
		.wrap .box:hover .left{transform: rotateY(90deg) translateZ(-160px);}
		.wrap .box:hover .right{transform: rotateY(90deg) translateZ(160px);}
		.wrap .box:hover .top{transform: rotateX(90deg) translateZ(160px);}
		.wrap .box:hover .bottom{transform: rotateX(90deg) translateZ(-160px);}
		.wrap .box:hover .after{transform: translateZ(-160px);}
		.wrap .box:hover .before{transform: translateZ(160px);}
		
		@keyframes move{
			from{transform: rotateX(0deg) rotateY(0deg);}
			to{transform: rotateX(13deg) rotateY(720deg);}
		}

</style>