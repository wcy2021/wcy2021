
// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {

    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
       // console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    });

    //存入到本地存储中
 /*   wx.setStorageSync("userInfo",userInfo); */
/*   console.log(userInfo); */
  //返回个人中心
 /*    wx.navigateBack({
      delta: 1,
    }) */

  }
})