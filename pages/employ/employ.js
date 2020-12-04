// pages/employ/employ.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    date: '2010-09',
  },
  //  获取列表
  getList: function (e) {
    let data = {
      time: this.data.date,
      is_download: '',
      page: '',
      limit: '',
      Authorization: wx.getStorageSync('token')
    }
    api.onJobList(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        if(res.data.data.data.length == 0){
          wx.showToast({
            title: '在职人员列表为空',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            list: []
          })
        }else{
          this.setData({
            list: res.data.data.data
          })
        }
      }
    })
  },
  // 选择时间
  bindDateChange: function(e) {
   let s1 = e.detail.value.substring(0,e.detail.value.length-3)
    this.setData({
      date: s1
    })
    this.getList()
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
    api.onJobList(data).then(res => {
      if (res.data.code == 200) {
        wx.downloadFile({
          url: res.data.data,
          success: function (res) {
            if (res.errMsg == 'downloadFile:ok') {
              let filePath = res.tempFilePath;
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  wx.showToast({
                    title: '打开成功',
                    icon: 'none',
                    duration: 1500
                  })
                }
              })
              // 文件下载成功
            } else {
              //  失败
            }
          }
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
      date:JSON.stringify(Y)+'-'+M
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