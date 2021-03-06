// pages/family/family.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInfo: false,
    src: '../../images/index/footer/36.png',
    list: [{
      name: '那个村'
    }, {
      name: '这家店'
    }, {
      name: '这户人'
    }],
    familyList: {},
    shenfen:''
  },
  checkShow: function (e) {
    this.setData({
      showInfo: this.data.showInfo ? false : true,
      src: this.data.showInfo ? '../../images/index/footer/36.png' : '../../images/index/footer/4.png',
    })
  },
  toVillage: function () {
    wx.navigateTo({
      url: '../village/village',
    })
  },
  // 获取族群的列表
  getList: function (e) {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.group(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        this.setData({
          familyList: res.data.data
        })
        switch (res.data.data.shenfen) {
          case 1:
            this.setData({
              shenfen: '城市合伙人'
            })
            break;
          case 2:
            this.setData({
              shenfen: '县级合伙人'
            })
            break;
          case 3:
            this.setData({
              shenfen: '乡镇合伙人'
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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