// pages/intoWork/intoWork.js
let app = getApp()
const api = app.globalData.api;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    date: '2010-09',
    // word:''
  },
  getList: function (e) {
    let data = {
      time: this.data.date,
      is_download: '',
      page: '',
      limit: '',
      Authorization: wx.getStorageSync('token')
    }
    api.waitOnJobList(data).then(res => {
      if (res.data.code == 200) {
        console.log(res.data.data.data)
        if (res.data.data.data.length == 0) {
          wx.showToast({
            title: '本月待入职列表为空',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            list: []
          })
        } else {
          res.data.data.data.forEach(v => {
            if (v.sex == 1) {
              v.sex = '男'
            } else {
              v.sex = '女'
            }
          })
          res.data.data.data.forEach(v => {
            if (v.is_ill == 0) {
              v.is_ill = '无'
            } else {
              v.is_ill = '有'
            }
          })
          this.setData({
            list: res.data.data.data
          })
          
        }
      }
    })
  },
  // 选择时间
  bindDateChange: function (e) {
    let s1 = e.detail.value.substring(0, e.detail.value.length - 3)
    this.setData({
      date: s1
    })
    this.getList()
  },
  // 查看详情
  forInfo(e){
    let index = e.currentTarget.dataset.index
    wx.setStorageSync('infoIndex', index + 1)
    this.data.list.forEach(v => {
      if(v.id ==e.currentTarget.dataset.id ){
        wx.setStorageSync('forInfo', v)
      }
    })
   wx.navigateTo({
    url: '../forInfo/forInfo'
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let timestamp = Date.parse(new Date())
    let date = new Date(timestamp)
    let Y = date.getFullYear()
    //获取月份  
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    this.setData({
      date: JSON.stringify(Y) + '-' + M
    })
    this.getList()
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