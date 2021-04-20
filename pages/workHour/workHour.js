// pages/workHour/workHour.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    date: '2010-09',
    src: '',
    word:''
  },
  getList: function (e) {
    let data = {
      time: this.data.date,
      is_download: '',
      page: '',
      limit: '',
      Authorization: wx.getStorageSync('token')
    }
    api.workHour(data).then(res => {
      if (res.data.code == 200) {
        if (res.data.data.length == 0) {
          wx.showToast({
            title: '本月工时列表为空',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            list: []
          })
        } else {
          this.setData({
            list: res.data.data.data
          })
          console.log(this.data.list)
        }
      }
    })
  },
  // 选择时间
  bindDateChange: function (e) {
    let s1 = e.detail.value.substring(0, e.detail.value.length - 3)
    this.setData({
      date: s1
    })
    this.getList()
  },
    // 查看详情
    forInfo(e){
      let index = e.currentTarget.dataset.index
      wx.setStorageSync('workIndex', index+1)
      this.data.list.forEach(v => {
        if(v.id ==e.currentTarget.dataset.id ){
          wx.setStorageSync('forHour', v)
        }
      })
     wx.navigateTo({
      url: '../forHour/forHour'
    })
    },
  //  下载文件
  downLoad: function (e) {
    let data = {
      time: this.data.date,
      is_download: '1',
      page: '',
      limit: '',
      Authorization: wx.getStorageSync('token')
    }
    api.workHour(data).then(res => {
      if (res.data.code == 200) {
        this.setData({
          word:res.data.data
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
              complete: function (res) {
              }
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
    let timestamp = Date.parse(new Date())
    let date = new Date(timestamp)
    let Y = date.getFullYear()
    //获取月份  
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    this.setData({
      date: JSON.stringify(Y) + '-' + M
    })
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