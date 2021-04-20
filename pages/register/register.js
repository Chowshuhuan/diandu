let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    mobile: '',
    code: '',
    pwd: '',
    surePwd: '',
    phoneTrue: false, //用于验证手机号输入格式
    logincodename: '获取验证码',
    openid: '',
    type: '', //登录方式
    password: '', //密码
    sms_code: '', //验证码
    sms_code_key: '', //验证码key
    Loadingtime: '', //定时器变量
    activeBtn: false
  },
  // 验证手机号
  blurPhone: function (e) {
    let str = /^1[3-9]\d{9}$/
    if (!str.test(e.detail.value)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 500
      })
    } else {
      this.setData({
        mobile: e.detail.value
      })
    }
  },
  // 验证密码
  firstPwd: function (e) {
    let str = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    if (!str.test(e.detail.value)) {
      wx.showToast({
        title: '密码必须包含数字和字母且长度不少于6',
        icon: 'none',
        duration: 500
      })
      this.setData({
        password: e.detail.value
      })
    } else {
      this.setData({
        password: e.detail.value
      })
    }
  },
  // z再次验证密码
  surePwd: function (e) {
    console.log(this.data.password)
    console.log(e.detail.value)
    if (this.data.password != e.detail.value) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none',
        duration: 500
      })
      this.setData({
        surePwd: e.detail.value,
        activeBtn: true
      })
    } else {
      this.setData({
        surePwd: e.detail.value,
        activeBtn: true
      })
    }
    if (!e.detail.value) {
      this.setData({
        surePwd: e.detail.value,
        activeBtn: false
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
          sms_code: res.data.data.sms_code,
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
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  toxieyi() {
    wx.navigateTo({
      url: '../treaty/treaty'
    })
  },
  toys() {
    wx.navigateTo({
      url: '../conceal/conceal'
    })
  },
  // 注册
  formSubmit: function (e) {
    let str = /^1[3-9]\d{9}$/
    let str1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    console.log(e.detail.value)
    if (!str.test(e.detail.value.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (e.detail.value.pwd != e.detail.value.surePwd) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (!str1.test(e.detail.value.pwd)) {
      wx.showToast({
        title: '请输入有效的密码',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (!str1.test(e.detail.value.surePwd)) {
      wx.showToast({
        title: '请输入有效的密码',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    let data = {
      mobile: e.detail.value.phone,
      password: e.detail.value.pwd,
      sms_code: e.detail.value.code,
      sms_code_key: this.data.sms_code_key,
    }
    api.register(data).then(res => {
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg + '两秒后跳转到登录页面',
          icon: 'none',
          duration: 1500
        })
        that.setData({
          // 定时三秒跳转对比页面
          Loadingtime: setInterval(function () {
            // 跳转页面
            wx.navigateTo({
              url: '../mobile/mobile',
            })
          }, 2000)
        })
      } else {
        wx.showToast({
          title: res.data.msg,
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
    let that = this
    wx.getStorageSync('openid')
    wx.getStorageSync('iv')
    wx.getStorageSync('encrypted_data')
    wx.getStorageSync('session_key')
    that.setData({
      openid: wx.getStorageSync('openid'),
    })
  },
  onHide: function () {
    clearInterval(this.data.Loadingtime);
    this.setData({
      Loadingtime: null
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.Loadingtime);
    this.setData({
      Loadingtime: null
    })
  }
})