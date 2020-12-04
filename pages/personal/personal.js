let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    typeToken: true,
    list: {},
    attr: '../../images/index/footer/3.png'
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
      } else {
        this.setData({
          typeToken: true
        })
        // wx.showToast({
        //   title: res.data.msg,
        //   icon: 'none',
        //   duration: 1000
        // })
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
    // if (wx.getStorageSync('token')) {
    //   this.setData({
    //     typeToken: false
    //   })
    //   this.getInfo()
    // } else {
    //   this.setData({
    //     typeToken: true
    //   })
    // }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(wx.getStorageSync('type'))
    // if (wx.getStorageSync('type')) {
    //   wx.navigateTo({
    //     url: '../settled/settled'
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // if (wx.getStorageSync('token')) {
    //   this.setData({
    //     typeToken: false
    //   })
    //   this.getInfo()
    // } else {
    //   this.setData({
    //     typeToken: true
    //   })
    // }
    if(!wx.getStorageSync('token')){
      this.setData({
        typeToken: true
      })
    }else{
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