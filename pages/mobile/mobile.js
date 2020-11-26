
// pages/talent/talent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     mobile:''
  },
  // 点击获取验证码
  toGetCode:function(e){
    var that = this
    var phone = that.data.phone
    if (phone == '' || phone.length < 11) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    let data = {
      mobile: phone,
      state: 2
    }
    api.sendsms(data).then(res => {
      if (res.data.code > 0) {
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