// pages/perInfo/perInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    shenfen: '',
    leavel: '',
    boss_name: '',
    boss_shenme: '',
    attr:'../../images/index/footer/3.png'
  },
  // 获取个人资料
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
        if (this.data.list.boss_name == '') {
          this.setData({
            boss_name: '管理员'
          })
        }
        if (this.data.list.boss_shenfen == '') {
          this.setData({
            boss_shenfen: '管理员'
          })
        }
        switch (this.data.list.shenfen) {
          case 1:
            this.setData({
              shenfen: '城市合伙人',
              leavel: '一'
            })
            break;
          case 2:
            this.setData({
              shenfen: '县级合伙人',
              leavel: '二'
            })
            break;
          case 3:
            this.setData({
              shenfen: '乡镇合伙人',
              leavel: '三'
            })
            break;
        }
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  // 我的二维码
  QRCode() {
    wx.navigateTo({
      url: '../QRCode/QRCode'
    })
  },
  // 头像
  headImg() {
    wx.navigateTo({
      url: '../headImg/headImg'
    })
  },
  // 退出登录
  outLogin2: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要退出吗',
      success(res) {
        if (res.confirm) {
          wx.clearStorage()
          wx.navigateTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
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