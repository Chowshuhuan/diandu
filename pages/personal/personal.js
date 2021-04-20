let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    typeToken: true,
    list: {},
    bindMobile: '',
    bindWeChat: '',
    dialogShow: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    // attr: '../../images/index/footer/3.png'
  },
  //  获取个人资料
  getInfo: function (e) {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.info(data).then(res => {
      if (res.data.code == 200) {
        this.setData({
          list: res.data.data
        })
        if (this.data.list.is_bind_mobile) {
          this.setData({
            bindMobile: '已绑定'
          })
        } else {
          this.setData({
            bindMobile: '未绑定'
          })
        }
        if (this.data.list.is_bind_wechat) {
          this.setData({
            bindWeChat: '已绑定'
          })
        } else {
          this.setData({
            bindWeChat: '未绑定'
          })
        }
        console.log(this.data.list)
      } else {
        this.setData({
          typeToken: true
        })
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  // 个人资料
  toInfo: function () {
    wx.navigateTo({
      url: '../perInfo/perInfo'
    })
  },
  // 待结算金额
  toBalance: function () {
    wx.navigateTo({
      url: '../balance/balance'
    })
  },
  // 族群
  toFamily: function () {
    wx.navigateTo({
      url: '../family/family'
    })
  },
  // 待办事项
  toMaster: function () {
    wx.navigateTo({
      url: '../matter/matter'
    })
  },
  // 工时
  toWorkHour: function () {
    wx.navigateTo({
      url: '../workHour/workHour'
    })
  },
  // 在职
  toEmploy: function () {
    wx.navigateTo({
      url: '../employ/employ'
    })
  },
  // 离职
  toLeave: function () {
    wx.navigateTo({
      url: '../leave/leave'
    })
  },
  // 入职
  toIntoWork: function () {
    wx.navigateTo({
      url: '../intoWork/intoWork'
    })
  },
  // 收藏
  toCollect() {
    wx.navigateTo({
      url: '../collect/collect'
    })
  },
  // 绑定手机号
  toPhone() {
    if (this.data.list.is_bind_mobile) {
      wx.showToast({
        title: '已绑定手机号',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.navigateTo({
        url: '../phone/phone'
      })
    }
  },
  // 绑定微信号
  toWechat() {
    if (this.data.list.is_bind_wechat) {
      wx.showToast({
        title: '已绑定微信号',
        icon: 'none',
        duration: 1000
      })
    } else {
      this.setData({
        dialogShow: true,
        message: "是否确定绑定微信号",
      })
    }
  },
  // 确定绑定微信号
  tapDialogButton(e) {
    if (e.detail.item.text == "确定") {
      let data = {
        openid: wx.getStorageSync('openid'),
        Authorization: wx.getStorageSync('token')
      }
      api.bindWeChat(data).then(res => {
        if (res.data.code == 200) {
          this.getInfo()
          this.setData({
            dialogShow: false,
          })
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    } else {
      this.setData({
        dialogShow: false,
      })
    }
  },
  // 未登录去登录
  toLogin: function (e) {
    wx.navigateTo({
      url: '../login/login'
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

    if (!wx.getStorageSync('token')) {
      this.setData({
        typeToken: true
      })
    } else {
      switch (wx.getStorageSync('type')) {
        case 0:
          this.setData({
            typeToken: false
          })
          this.getInfo()
          break;
        case 1:
          this.setData({
            typeToken: true
          })
          break;
        case 2:
          this.setData({
            typeToken: true
          })
          break;
        case 3:
          this.setData({
            typeToken: true
          })
          break;
        case 4:
          this.setData({
            typeToken: true
          })
          break;
        case 5:
          this.setData({
            typeToken: true
          })
          break;
      }
    }
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