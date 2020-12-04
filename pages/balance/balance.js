// pages/balance/balance.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: '444444',
    price1: '343434',
    month: '',
    money: '￥200.05',
    income: '￥454',
    showInfo: false,
    list: {},
    all: '', //合计
    took: '', //已提现
    yizhan: [],
    src: '../../images/index/footer/36.png',
    benyue: '',
    date: '',
    date1:''
  },
  // g获取列表
  getList: function (e) {
    let data = {
      time: this.data.date1,
      Authorization: wx.getStorageSync('token')
    }
    api.waitPay(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        this.setData({
          list: res.data.data.info,
          all: res.data.data.all,
          benyue: res.data.data.benyue,
          yizhan: res.data.data.yizhan
        })
      } else {

      }
    })
  },
  // 选择时间
  bindDateChange: function (e) {
    let s1 = e.detail.value.substring(0, e.detail.value.length - 3)
    let month = s1.slice(5)
    this.setData({
      date1: e.detail.value,
      date: s1,
      month:month
    })
    this.getList()
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
      date: JSON.stringify(Y) + '-' + M,
      month:M
    })
    this.getList()
  },
  // 显示期望岗位
  showInfo: function (e) {
    this.setData({
      showInfo: this.data.showInfo ? false : true,
      src: this.data.showInfo ? '../../images/index/footer/36.png' : '../../images/index/footer/4.png'
    })
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