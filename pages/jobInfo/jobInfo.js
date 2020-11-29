// pages/jobInfo/jobInfo.js
import QR from '../../utils/qrcode'
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['../../images/index/footer/27.png', '../../images/index/footer/27.png', '../../images/index/footer/banner.png'], //工作环境表
    list: {}, //详情列表
    welfare: [], //福利
    id: '',
    is_collect: false, //是否收藏
    codeShow: false, //遮罩层
    codeShow2: false, //二维码
    src: '../../images/index/footer/3.png',
    name: '赵钱孙李',
    mobile: '186****8999',
    codeImg: '../../images/index/footer/35.png',
    qrcodeURL: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('optionsId', options.id)
    let that = this
    that.setData({
      id: options.id
    })
    // 获取详情
    let data = {
      // id: '5',
      id:options.id,
      Authorization: wx.getStorageSync('token')
    }
    api.taskView(data).then(res => {
      if (res.data.code == 200) {
        if (res.data.data.is_collect == 1) {
          that.setData({
            is_collect: true
          })
        } else {
          that.setData({
            is_collect: false
          })
        }
        that.setData({
          list: res.data.data,
          //  background:res.data.data.work_env,
          welfare: res.data.data.welfare_name,
        })
        if (that.data.list.sex == '1') {
          that.data.list.sex = '男'
        } else {
          that.data.list.sex = '女'
        }
      }
    })
  },
  // 点击收藏
  collect: function (e) {
    let that = this
    console.log(that.data.id)
    let data = {
      //  id:that.data.id,
      id: '5',
      Authorization: wx.getStorageSync('token')
    }
    api.collect(data).then(res => {
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
        that.setData({
          is_collect: that.data.is_collect ? false : true,
        })
      }
    })
  },
  //  点击弹框二维码
  share: function (e) {
    this.setData({
      codeShow: this.data.codeShow ? false : true,
      codeShow2: this.data.codeShow2 ? false : true,
    })
    console.log(wx.getStorageSync('user_id'))
    this.drawImg()
  },
  // 隐藏二维码
  hiddenCode: function (e) {
    this.setData({
      codeShow: this.data.codeShow ? false : true,
      codeShow2: this.data.codeShow2 ? false : true,
    })
  },
  // 保存二维码
  saveCode: function (e) {
    this.setData({
      codeShow: this.data.codeShow ? false : true,
      codeShow2: this.data.codeShow2 ? false : true,
    })
  },
  // 生成二维码的方法
  drawImg: function () {
    let that = this,
      params = JSON.stringify(wx.getStorageSync('user_id')) // 二维码参数 

    var imgData = QR.drawImg(params, {
      typeNumber: 4, // 密度
      errorCorrectLevel: 'L', // 纠错等级
      size: 800, // 白色边框
    })

    this.setData({
      qrcodeURL: imgData
    })
  },
  // 输送人才
  express:function(e){
    // console.log(this.data.id)
    wx.navigateTo({
      url: '../expressPer/expressPer?id=' + this.data.id
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