Page({
  // 手机号登录
  toLogin() {
    wx.navigateTo({
      url: '../mobile/mobile'
    })
  },
  // 微信登录
  onGetAuthorize(e) {
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      let data = {
        session_key: app.globalData.session.session_key,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        openid: app.globalData.session.openid
      }
      wx.getStorage({
        key: 'is_fenxiang',
        success: function (res) {
          data.is_fenxiang = res.data
          api.getPhoneNumber(data).then(res => {
            if (res.data.code > 0) {
              app.globalData.userInfo = res.data.data
              this.onShow()
            }
          })
        },
      })
    }
  },
})