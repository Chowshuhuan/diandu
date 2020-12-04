// pages/talent/talent.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '', //手机号
    phoneTrue: false, //用于验证手机号输入格式
    logincodename: '获取验证码',
    openid: '',
    type: '', //登录方式
    password: '', //密码
    sms_code: '', //验证码
    sms_code_key: '', //验证码key
    codeMa:''
  },
  // 验证手机号
  blurPhone: function (e) {
    let str = /^1[3-9]\d{9}$/
    if (!str.test(e.detail.value)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 2000
      })
    } else {
      this.setData({
        mobile: e.detail.value
      })
    }
  },
  // 点击获取验证码
  toGetCode: function (e) {
    let that = this
    let data = {
      mobile: that.data.mobile
    }
    api.sendsms(data).then(res => {
      if (res.data.code == 200) {
        that.setData({
          sms_code:res.data.data.sms_code,
          sms_code_key: res.data.data.sms_code_key
        })
        wx.showToast({
          title: '短信发送成功',
          icon: 'none',
          duration: 1000
        })
        var num = 60
        var timer = setInterval(function () {
          num--
          if (num <= 0) {
            clearInterval(timer)
            that.setData({
              logincodename: '重新发送',
              logindisabled: false
            })
          } else {
            that.setData({
              logincodename: num + 's',
              logindisabled: true
            })
          }
        }, 1000)
      } else {
        // console.log('2')
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  // 验证码输入框的值
  yanzhengma(e){
    this.setData({
      codeMa:e.detail.value
    })
  },
  // 验证码登录
  formSubmit: function (e) {
    let that = this
    let str = /^1[3-9]\d{9}$/
    if (!str.test(e.detail.value.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if(that.data.codeMa != that.data.sms_code) {
      wx.showToast({
        title: '请输入正确的验证号',
        icon: 'none',
        duration: 1000
      })
      return
    }
    let data = {
      type: '3',
      openid: that.data.openid,
      mobile: e.detail.value.phone,
      password: '',
      sms_code: e.detail.value.code,
      sms_code_key: that.data.sms_code_key,
      attr: ''
    }
    api.login(data).then(res => {
      if (res.data.code == 400) {
        wx.showToast({
          title: '此号码尚未注册，可前往注册',
          icon: 'none',
          duration: 1000
        })
      } else if (res.data.code == 200) {
        wx.setStorageSync('token', res.data.data.token)
        wx.setStorageSync('type', res.data.data.type)
        wx.setStorageSync('user_id', res.data.data.user_id)
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
        wx.showToast({
          title: '登录成功',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  // 协议
  toxieyi() {
    wx.navigateTo({
      url: '../treaty/treaty'
    })
  },
  // 政策
  toys() {
    wx.navigateTo({
      url: '../conceal/conceal'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorageSync('openid')
    wx.getStorageSync('iv')
    wx.getStorageSync('encrypted_data')
    wx.getStorageSync('session_key')
    that.setData({
      openid: wx.getStorageSync('openid'),
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