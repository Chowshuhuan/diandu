let app = getApp()
const api = app.globalData.api;
Page({
  data:{
    mobile: '', //手机号
    code:'',//验证码
    pwd:'',//密码
    surePwd:'',//确认密码
    phoneTrue: false, //用于验证手机号输入格式
    logincodename: '获取验证码',
    openid: '',
    type: '', //登录方式
    password: '', //密码
    sms_code: '', //验证码
    sms_code_key: '', //验证码key
  },
   // 验证手机号
   blurPhone: function (e) {
    let phone = e.detail.value
    if (!/^1[34578]\d{9}$/.test(phone)) {
      this.setData({
        phoneTrue: false
      })
      if (phone.length >= 11) {
        wx.showToast({
          title: '请输入正确的11位手机号',
          icon: 'none',
          duration: 1000
        })
      }
    } else {
      this.setData({
        phoneTrue: true,
        mobile: phone
      })
    }
  },
   // 点击获取验证码
   toGetCode: function (e) {
    let that = this
    if (that.data.mobile == '' || that.data.mobile.length < 11) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    }
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
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
   // 验证登录密码
   userPasswordInput: function (e) {
    var that = this
    var value = e.detail.value
    var strkong = /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{9,20}$/g
    if (strkong.test(value)) {
      that.setData({
        truePwd: true
      })
    } else {
      if (value.length >= 9) {
        wx.showToast({
          title: '密码由9-20位英文字母和数字组成',
          icon: 'none',
          duration: 1000
        })
        that.setData({
          truePwd: false
        })
      }
    }
  },
    // 修改完成
    formSubmit: function (e) {
      let that = this
      let phone = e.detail.value.phone
      let code = e.detail.value.code
      let pwd = e.detail.value.pwd
      let surePwd = e.detail.value.surePwd
      if (phone == '' || phone.length < 11) {
        wx.showToast({
          title: '请输入正确的11位手机号',
          icon: 'none',
          duration: 1000
        })
        return false
      }
      if (code == '') {
        wx.showToast({
          title: '请输入验证码',
          icon: 'none',
          duration: 1000
        })
        return false
      }
      if (pwd.length < 9) {
        wx.showToast({
          title: '密码最少为9位',
          icon: 'none',
          duration: 1000
        })
        return false
      }
      if (pwd !== surePwd) {
        wx.showToast({
          title: '两次输入密码不一致',
          icon: 'none',
          duration: 1000
        })
        return false
      }
      let data = {
        mobile:phone,
        password:surePwd,
        sms_code:code,
        sms_code_key:that.data.sms_code_key
      }
      api.forgetPassword(data).then(res => {
        console.log(res.data)
        if(res.data.code == 200){
           that.setData({
              mobile:'',
              code:'',
              pwd:'',
              surePwd:''
           })
          wx.showToast({
            title:res.data.msg,
            icon: 'none',
            duration: 1000
          })
        }else {
          wx.showToast({
            title:res.data.msg,
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
  }
})