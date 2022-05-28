<template>
  <div class="Pikachu">
    
     <div class="backtop">
       <!-- <div class="look_pikachu">1111</div>      -->      <!-- 测试皮卡丘 -->
      <div class="gotop" v-show="gotop" @click="toTop">
      <img :src="totopimg">

    </div>
     </div>
  </div>
</template>

<script>
export default {
data(){
  return{
     gotop: false,
     totopimg:require('../../assets/img/totop2.png') , //引入图标

  }
  
},methods:{
handleSelect(key, keyPath) {
console.log(key, keyPath);
  },
   handleScroll() {
       let scrollTop  = document.documentElement.scrollTop  || document.body.scrollTop ;
      scrollTop  > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      
      let top = document.documentElement.scrollTop  || document.body.scrollTop ;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop  = document.documentElement.scrollTop  = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    console.log(this.top)
    console.log(this.timeTop)
    },/* go_home(){
      this.$router.push('/home')
    }, */
    /* go_school(){
      this.$router.push('/shcool')
    } */
 },
 mounted() {
   // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
 },
}
</script>

<style scoped>
/* .Pikachu{
  position: relative;
} */
/* .gotop{
  position: absolute;
  margin-bottom: 500px;
  left: 1300px;
} */
/* .look_pikachu{
background-color: skyblue;
height: 1500px;
 } */

</style>