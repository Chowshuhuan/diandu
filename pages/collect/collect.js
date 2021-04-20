// pages/collect/collect.js
// pages/settled/settled.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: '',
    limit: '',
    list: []
  },
  // 获取收藏列表
  getList() {
    let data = {
      page: this.data.page,
      limit: this.data.limit,
      Authorization: wx.getStorageSync('token'),
    }
    api.getCollectList(data).then(res => {
      if (res.data.code == 200) {
        if (res.data.data.length != 0) {
          console.log(res.data.data.data)
          this.setData({
            list: res.data.data.data
          })
        } else {
          wx.showToast({
            title: '收藏列表为空',
            icon: 'none',
            duration: 1500
          })
        }
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  // 查看详情
  todetail(e) {
    wx.setStorageSync('taskId', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../jobInfo/jobInfo?id=' + e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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