// pages/tianjia/tianjia.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: [],
    pathVal: [],
    imageVal:[],
    jishu_prove:[]
  },
  addInput(e) {
    wx.navigateTo({
      url: '../addImg/addImg',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      inputVal: wx.getStorageSync('inputVal'),
      pathVal: wx.getStorageSync('pathVal'),
      imageVal: wx.getStorageSync('imageVal'),
    })
    let arr = []
    let arr1 = []
    let arr2 = []
    this.data.inputVal.forEach((v, i) => {
      let obj = {}
      obj.name = v
      arr.push(obj)
    })
    this.data.pathVal.forEach((v, i) => {
      let obj = {}
      obj.path = v
      arr1.push(obj)
    })
    this.data.imageVal.forEach((v, i) => {
      let obj = {}
      obj.logo = v
      arr2.push(obj)
    })
    let arr3 = arr.map((item, index) => {
      return {
        ...item,
        ...arr1[index],
        ...arr2[index]
      }
    })
    this.setData({
      jishu_prove: arr3
    })
    console.log(this.data.jishu_prove)
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