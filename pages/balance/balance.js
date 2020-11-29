// pages/balance/balance.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:'444444',
    price1:'343434',
    month:'10',
    money:'￥200.05',
    income:'￥454',
    showInfo:false,
    list:{},
    area:[],//地址
    all:'',//合计
    took:'',//已提现
  },
  // g获取列表
  getList:function(e){
     let data = {
       time:'',
       Authorization: wx.getStorageSync('token')
     }
     api.waitPay(data).then(res => {
       console.log(res.data)
       if(res.data.code == 200) {
         this.setData({
           list:res.data.data.info,
           all:res.data.data.all,
           area:res.data.data.yizhan
         })
       }else{
         
       }
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getList()
  },
 // 显示期望岗位
 showInfo:function(e) {
  this.setData({
    showInfo: this.data.showInfo ? false : true,
  })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})