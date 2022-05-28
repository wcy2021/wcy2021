// pages/data/data.js
import * as echarts from "../../ec-canvas/echarts"
let chart =null;
// 图表2的变量
let secondChart =null;
let thirdChart =null;
let fourthChart =null;

Page({
    data: {
      btns:['今日','昨日','近7日','近30日'],
      active:0,
      ec:{
        onInit:initChart
      },ec2:{
        onInit:initChart2
      },ec3:{
        onInit:initChart3
      },
      ec4:{
        onInit:initChart4
      },
    },
    /* ******************************************* */
    change:function(e){
console.log(e.currentTarget.dataset.index);//获取到tab的索引值
 this.setData({
     active:e.currentTarget.dataset.index
 })
    },
    /* ***************************************** */
    onLoad: function () { 
    }
}) //page end

/* 图1 */
function initChart(canvas,height,width,dpr){
  // 对变量chart进行赋值  使用init方法进行初始化
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  // 对图表进行初始化   将chart作为参数
  canvas.setChart(chart)
  //这是echarts的配置信息
  let option = getOption()
  chart.setOption(option)
  //必须对chart进行返回
  return chart;  
  }

  //定义getOption函数 option见echart官网
  function getOption(){
    return{
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: '#a90000'
              }
            },
            150,
            80,
            70,
            110,
            130
          ],
          type: 'bar'
        }
      ]
    }
}


/* 图2 */
function initChart2(canvas,height,width,dpr){
  // 对变量chart进行赋值  使用init方法进行初始化
  secondChart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  // 对图表进行初始化   将chart作为参数
  canvas.setChart(secondChart)
  //这是echarts的配置信息
  let option = getOption2()
  secondChart.setOption(option)
  //必须对chart进行返回
  return secondChart;  
  }

  function getOption2(){
    return {
      title: {
        text: '垃圾数据',
        subtext: 'Garbage Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '其余垃圾' },
            { value: 735, name: '包装袋' },
            { value: 580, name: '饮料瓶' },
            { value: 484, name: '废纸' },
            { value: 300, name: '金属、塑料垃圾' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

/* 图3 */
function initChart3(canvas,height,width,dpr){
  thirdChart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })

  canvas.setChart(thirdChart)
  let option = getOption3()
  thirdChart.setOption(option)
  return thirdChart;  
  }

  function getOption3(){
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
    }


/* 图4 */
    function initChart4(canvas,height,width,dpr){
      fourthChart = echarts.init(canvas,null,{
        width:width,  
        height:height,
        devicePixelRatio:dpr
      })
    
      canvas.setChart(fourthChart)
      let option = getOption4()
      fourthChart.setOption(option)
      return fourthChart;  
      }
    
      function getOption4(){
        return {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }
        }