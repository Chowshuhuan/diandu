//index.js
//获取应用实例
const app = getApp()
const api = app.globalData.api;
Page({
  data: {
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
              wx.setStorageSync('openid', res.data.data.openid)
              wx.setStorageSync('session_key', res.data.data.session_key)
            }
          })
        } else {
          wx.showToast({
            title: 'res.data.msg',
            icon: 'none',
            duration: 1000
          })
          // console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getPhoneNumber(e) {
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      let that = this
      that.setData({
        iv: e.detail.iv,
        encrypted_data: e.detail.encryptedData
      })
      wx.setStorageSync('iv', e.detail.iv)
      wx.setStorageSync('encrypted_data', e.detail.encrypted_data)

      let data = {
        openid: that.data.openid,
        iv: encodeURIComponent(that.data.iv),
        encrypted_data: encodeURIComponent(that.data.encrypted_data),
        session_key: that.data.session_key,
      }
      api.getMobileByOpenid(data).then(res => {
        if (res.data.code == 200) {
          that.setData({
            mobile: res.data.data.phoneNumber
          })
          let data = {
            type: '1',
            openid: that.data.openid,
            mobile: that.data.mobile,
            password: '',
            sms_code: '',
            sms_code_key: '',
            attr: ''
          }
          api.login(data).then(res => {
            if (res.data.code == 200) {
              wx.setStorageSync('token', res.data.data.token)
              wx.setStorageSync('type', res.data.data.type)
              wx.setStorageSync('user_id', res.data.data.user_id)
              wx.setStorageSync('cause', res.data.data.cause)
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 1000
              })
              switch (res.data.data.type) {
                case 0:
                  wx.switchTab({
                    url: '../index/index',
                  })
                  break;
                case 1:
                  wx.navigateTo({
                    url: '../waitAuditing/waitAuditing',
                  })
                  break;
                case 2:
                  wx.navigateTo({
                    url: '../waitAuditing/waitAuditing',
                  })
                  break;
                case 3:
                  wx.navigateTo({
                    url: '../waitAuditing/waitAuditing',
                  })
                  break;
                case 4:
                  wx.navigateTo({
                    url: '../failedPass/failedPass',
                  })
                  break;
                case 5:
                  wx.navigateTo({
                    url: '../shenqing/shenqing',
                  })
                  break;
              }
            }
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
        }
      })

    } else {
      wx.showToast({
        title: '已拒绝授权登录',
        icon: 'none',
        duration: 1000
      })
    }
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