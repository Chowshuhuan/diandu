let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    list: {}
  },
  //  获取个人资料
  getInfo: function (e) {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.info(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        this.setData({
          list: res.data.data
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
  },
})