// pages/forInfo/forInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    word: '',
    index: ''
  },
  //  下载文件
  downLoad: function (e) {
    let data = {
      time: '',
      is_download: '1',
      page: '',
      limit: '',
      Authorization: wx.getStorageSync('token')
    }
    api.workHour(data).then(res => {
      if (res.data.code == 200) {
        this.setData({
          word: res.data.data
        })
        wx.downloadFile({
          url: res.data.data,
          header: {},
          success: function (res) {
            var filePath = res.tempFilePath;
            wx.openDocument({
              filePath: filePath,
              success: function (res) {
                wx.showToast({
                  title: '打开文档成功',
                  icon: 'none',
                  duration: 1500
                })
              },
              fail: function (res) {
                wx.showToast({
                  title: '打开文档失败',
                  icon: 'none',
                  duration: 1500
                })
              },
              complete: function (res) {}
            })
          },
          fail: function (res) {
            console.log('文件下载失败');
          },
          complete: function (res) {},
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
    this.setData({
      list: wx.getStorageSync('forHour'),
      index: wx.getStorageSync('workIndex')
    })
    if (this.data.index <= 9) {
      let ind = this.data.index
      this.setData({
        index: '0' + ind
      })
    }
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