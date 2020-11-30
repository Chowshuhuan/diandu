// pages/password/password.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: ''
  },
  blurPhone: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  blurword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log(this.data.mobile, this.data.password)
    let data = {
      type: '2',
      openid: wx.getStorageSync('openid'),
      mobile: e.detail.value.phone,
      password: e.detail.value.password,
      sms_code: '',
      sms_code_key: '',
      attr: ''
    }
    api.login(data).then(res => {
      if (res.data.code == 400) {
        wx.showToast({
          title: res.data.msg + ',可前往立即注册',
          icon: 'none',
          duration: 2000
        })
      } else if (res.data.code == 200) {
        console.log(res.data.data)
        wx.setStorageSync('token', res.data.data.token)
        wx.setStorageSync('type', res.data.data.type)
        wx.setStorageSync('user_id', res.data.data.user_id)
        wx.switchTab({
          url: '../index/index'
        })
        wx.showToast({
          title: '登录成功',
          icon: 'none',
          duration: 1500
        })
      }
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