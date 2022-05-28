<template>
<div class="bokealbum">
    <div class="CloudPhotos" v-for="(item,index) in cloud_all " :key="index">
  <img :src="item.clouphotos" alt="">
  <div class="title">
   <h3>{{item.cloudtitle}}</h3>
   <h4>{{item.cloudcontent}}</h4>
  </div>
 
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
data() {
  return {
    cloud_all:'' 
  }
},created() {
  axios.post('http://localhost:8888/get_cloudphotos').then(_d=>{
   this.cloud_all =_d.data
  })
}
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #ccc;
}

.bokealbum {
  width: 1200px;
  margin: 20px auto;
  padding: 0 10px;
  column-count: 5;
  -moz-column-gap:40px;
  -webkit-column-gap:40px; 
  column-gap:40px;
}
.bokealbum .CloudPhotos {
  width: 100%;
  margin: 0 0 20px;
  padding: 10px;
  overflow: hidden;
  background-color: #ffffff;
  break-inside: avoid;
  border: 1px solid #ccc;
}
.CloudPhotos img {
  width: 100%;
}
.CloudPhotos h2 {
  margin: 10px 0 0;
  padding: 0;
}
.CloudPhotos {
  padding: 0 0 10px;
}
.title{
  border: 1px solid #bfabfa;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px #bfabfa;
  }

.bokealbum:hover .CloudPhotos{
	transform: perspective(500px) rotateY(10deg);
}
.bokealbum .CloudPhotos:hover{
	transform: perspective(500px) rotateY(0deg);
  filter: blur(5px);
/*   transform: perspective(500px) rotateY(30deg); */
}
@media screen and (max-width: 1200px) {
  .bokealbum {
    column-count: 3;
    width: calc(100% - 40px);
    box-sizing: border-box;
    padding: 20px 20px 20px 0;
  }
}
@media screen and (max-width: 768px) {
  .bokealbum {
    column-count: 2;
  }
}
@media screen and (max-width: 480px) {
  .bokealbum {
    column-count: 1;
  }
}
</style>