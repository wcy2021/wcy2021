<template>
  <div class="bokeinfo">
    <input id='toggle' type='checkbox'>
<label class='toggle' for='toggle'>MyInfo </label>
<input id='height' type='checkbox'>
<label class='height' for='height'></label>
<label class='string' for='toggle'></label>
 <div class='wrapper'>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
  <div class='blinds'></div>
</div>
 <div class='glares'>
<!--      <div class='glare'>111</div>
  <div class='glare'>222</div>
  <div class='glare'>333</div>
  <div class='glare'>444</div> -->

    <div class="info">
       <span class="myinfo"><img :src="info" alt="" class="info_png"></span>
    </div>



<!-- <div class='ledge'>
  <p>单击窗帘带</p>
</div> -->
  </div>
  </div>
</template>

<script>
export default {
data() {
  return {
  /* info:require('../../assets/img/boke/bokeinfo/info2.png') */
  info:require('../../../assets/img/boke/boke_info/info2.png')

  }
},
}
</script>

<style scoped>

h2{
  color: #EDEDED;
}
html {
  box-sizing: border-box;
}

*, *::after, *::before {
  box-sizing: inherit;
}

*, *:before, *:after {
  box-sizing: border-box;
  outline: none;
}

.bokeinfo{
  height: 100%;
}
/* 左背景 */
.bokeinfo {
  width: 100%;
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  background-color: #bfabfa;
/*   background-color: black; */
 /*  background-image: url("img/zzsc.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

/* 打开窗帘后背景 右背景 */
.bokeinfo:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 84.25%;
/*   box-shadow: inset 0 0 200px 200px black; */
background-color: #bfabfa;

  z-index: 1;
}


.string:before {
  bottom: -20px;
}
.string:after {
  bottom: -39px;
}


.wrapper .guides {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 17px;
  left: 10%;
  width: 2px;
  height: 95.5%;
  transition: height 1000ms ease;
  z-index: 11;
}
.wrapper .guides:nth-of-type(even) {
  left: 90%;
}
.wrapper .guides .guide {
  position: relative;
  width: 2px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 1000ms ease;
  z-index: 999;
}

.wrapper .guides .guide:after {
  position: absolute;
  content: '';
  top: 18px;
  left: -4px;
  width: 10px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  z-index: -10;
}


/* 关闭窗帘背景 */
.wrapper .blinds {
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 5%;
  margin-bottom: 0;
  transform: rotateX(0deg);
/*   box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); */
background-color:black;
/* background-image: url(); */

  transition: transform 500ms ease;
  z-index: 4;
}

.toggle {
  position: absolute;
  bottom: 20px;
  left: 50px;
  margin: 0;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 99px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 125ms linear;
  cursor: pointer;
  z-index: 99;
}

#toggle {
  display: none;
  position: absolute;
  z-index: 999999;
}
#toggle:checked ~ .toggle {
  background-color: white;
}
#toggle:checked ~ .wrapper .blinds {
  transform: rotateX(87.75deg);
}
#toggle:checked ~ .wrapper .guides {
  top: -10px;
  height: 100%;
  transition: all 1000ms ease;
}
#toggle:checked ~ .wrapper .guides .guide {
  top: 0px;
  height: 40px;
  transition: all 1000ms ease;
}
#toggle:checked ~ .wrapper .guides .guide:before {
  display: none;
}
#toggle:checked ~ .wrapper .guides .guide:after {
  display: none;
}
#toggle:checked ~ .string {
  top: -50px;
}

.height {
  position: absolute;
  top: -400px;
  right: 130px;
  width: 3px;
  height: 500px;
  background-color: white;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.3);
  transition: top 500ms ease;
  cursor: pointer;
  z-index: 100;
}
.height:before, .height:after {
  position: absolute;
  content: '';
  left: -8px;
  width: 18px;
  height: 21px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 15px 15px 5px rgba(0, 0, 0, 0.3);
}
.height:before {
  bottom: -20px;
}
.height:after {
  bottom: -39px;
}

#height {
  display: none;
}
#height:checked ~ .wrapper {
  height: 15%;
  transition: height 1000ms ease;
}
#height:checked ~ .wrapper .guides {
  height: 80%;
  transition: height 1000ms ease;
}
#height:checked ~ .wrapper .guides .guide {
  top: 0px;
  height: 3px;
  transition: all 1000ms ease;
}
#height:checked ~ .height {
  top: -20px;
}
#height:not(:checked) ~ .wrapper {
  height: 84.25%;
  transition: height 1000ms ease;
}

.glares {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 84.45%;
  padding: 20px 20px 170px 20px;
  z-index: 3;
}
.glares .glare {
  position: absolute;
  width: 50%;
  height: 50%;
}
.glares .glare:before {
  position: absolute;
  content: '';
  top: 3px;
  left: 3px;
  width: 99%;
  height: 98%;
  opacity: 0.1;
  background: rgba(255, 255, 255, 0.1);
  background: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 0%, white 10%, rgba(255, 255, 255, 0) 50%);
}
.glares .glare:nth-of-type(1) {
  top: 0;
  left: 0;
  border-top: 30px solid #3E2723;
  border-bottom: 15px solid #3E2723;
  border-right: 15px solid #3E2723;
  border-left: 30px solid #3E2723;
}
.glares .glare:nth-of-type(2) {
  top: 50%;
  left: 0;
  border-top: 15px solid #3E2723;
  border-bottom: 30px solid #3E2723;
  border-right: 15px solid #3E2723;
  border-left: 30px solid #3E2723;
}
.glares .glare:nth-of-type(3) {
  top: 0;
  right: 0;
  border-top: 30px solid #3E2723;
  border-bottom: 15px solid #3E2723;
  border-right: 30px solid #3E2723;
  border-left: 15px solid #3E2723;
}
.glares .glare:nth-of-type(4) {
  top: 50%;
  right: 0;
  border-top: 15px solid #3E2723;
  border-bottom: 30px solid #3E2723;
  border-right: 30px solid #3E2723;
  border-left: 15px solid #3E2723;
}

.ledge {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: #A1887F;
  background: -webkit-linear-gradient(to bottom, #3E2723 5%, #795548 100%);
  background: linear-gradient(to bottom, #3E2723, #795548);
  overflow: hidden;
  z-index: 20;
}
.ledge:before {
  position: absolute;
  content: '';
  top: -50px;
  left: -50px;
  width: calc(100% + 100px);
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  background: -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.85) 10%, rgba(255, 255, 255, 0) 50%);
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.3);
  z-index: 101;
}
.ledge p {
  position: absolute;
  bottom: 15px;
  right: 50px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;
  z-index: 9999;
}
.content{
  background-color:#EDEDED;
  width: 200px;
  height: 200px;
  margin-top: 150px;
  margin-left: 500px;
}


/* 边框样式 */
.info {
  background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 100%);
  position: relative;
  padding: 3px;
  display: inline-block;
  border-radius: 7px;
  margin-top: 100px;
}


.info_png{
 width: 800px;
 height:600px;
}

</style>
