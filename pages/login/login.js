//index.js
//获取应用实例
const app = getApp()
const api = app.globalData.api;
Page({
  data: {
    postUrl: app.globalData.postUrl,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openid: '',
    iv: '',
    session_key: '',
    encrypted_data: '',
    mobile: ''
  },
  // 获取code
  // 手机号登录
  toLogin() {
    wx.navigateTo({
      url: '../mobile/mobile'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          let data = {
            code: res.code
          }
          api.getOpenid(data).then(res => {
            if (res.data.code == 200) {
              that.setData({
                openid: res.data.data.openid,
                session_key: res.data.data.session_key
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getPhoneNumber(e) {
    this.setData({
      iv: e.detail.iv,
      encrypted_data: e.detail.encryptedData
    })
    let data = {
      openid: this.data.openid,
      iv: encodeURIComponent(this.data.iv),
      encrypted_data: encodeURIComponent(this.data.encrypted_data),
      session_key: this.data.session_key,
    }
    api.getMobileByOpenid(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        this.setData({
          mobile: res.data.data.phone.phoneNumber
        })
        wx.switchTab({
          url: '../task/task',
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  // getUserInfo: function (e) {
  //   // app.globalData.userInfo = e.detail.userInfo
  //   app.globalData.userInfo = e.userInfo
  //   this.setData({
  //     userInfo: e.userInfo,
  //     hasUserInfo: true,
  //     iv: e.detail.iv,
  //     encrypted_data: e.detail.encryptedData
  //   })
  //   let data = {
  //     openid: this.data.openid,
  //     iv: encodeURIComponent(this.data.iv),
  //     encrypted_data: encodeURIComponent(this.data.encrypted_data),
  //     session_key: this.data.session_key,
  //   }
  //   api.getMobileByOpenid(data).then(res => {
  //     console.log(res)
  //   })
  //   // wx.switchTab({
  //   //   url: '../task/task',
  //   // })
  // },
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