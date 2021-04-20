// import qrcode from '../../utils/qrcode';
// import code from '../../utils/code';
// pages/jobInfo/jobInfo.js
let WxParse = require('../../utils/wxParse/wxParse')
let app = getApp()
const api = app.globalData.api;
let QR = require("../../utils/code");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [], //工作环境表
    list: {}, //详情列表
    welfare: [], //福利
    id: '',
    is_collect: false, //是否收藏
    codeShow: false, //遮罩层
    codeShow2: false, //二维码
    src: '../../images/index/footer/3.png',
    name: '赵钱孙李',
    mobile: '186****8999',
    codeImg: '',
    qrcodeURL: '',
    word: '', //word下载的地址
    canvasHidden: false,
    imagePath: '',
    sex: '', //性别
    content: '', //工作内容
  },
  // 获取列表
  getList() {
    let that = this
    // 获取详情
    let data = {
      // id: '5',
      id: wx.getStorageSync('taskId'),
      Authorization: wx.getStorageSync('token')
    }
    api.taskView(data).then(res => {
      if (res.data.code == 200) {
        console.log(res.data.data)
        if (res.data.data.is_collect == 1) {
          that.setData({
            is_collect: true
          })
        } else {
          that.setData({
            is_collect: false
          })
        }
        switch (res.data.data.sex) {
          case 1:
            that.setData({
              sex: '男'
            })
            break;
          case 2:
            that.setData({
              sex: '女'
            })
            break;
          case 3:
            that.setData({
              sex: '不限'
            })
            break;
        }
        that.setData({
          list: res.data.data,
          background: res.data.data.work_env,
          welfare: res.data.data.welfare_name,
          word: res.data.data.word,
          content: res.data.data.work_desc
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  // 点击收藏
  collect: function (e) {
    if (!wx.getStorageSync('token')) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    let that = this
    let data = {
      //  id:that.data.id,
      // id: '5',
      id: wx.getStorageSync('taskId'),
      Authorization: wx.getStorageSync('token')
    }
    api.collect(data).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
        that.setData({
          is_collect: that.data.is_collect ? false : true,
        })
      }
    })
  },
  //  点击弹框二维码
  share: function (e) {
    if (!wx.getStorageSync('token')) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    wx.navigateTo({
      url: '../share/share' 
    })
    // this.setData({
    //   codeShow: this.data.codeShow ? false : true,
    //   codeShow2: this.data.codeShow2 ? false : true,
    // })
  },
  // 输送人才
  express: function (e) {
    if (!wx.getStorageSync('token')) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    // console.log(this.data.id)
    wx.navigateTo({
      url: '../expressPer/expressPer?id=' + this.data.id
    })
  },
  // word下载
  downLoad: function (e) {
    if (!wx.getStorageSync('token')) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    if (!this.data.word) {
      wx.showToast({
        title: 'word文档为空,无法下载',
        icon: 'none',
        duration: 1500
      })
      return
    }
    wx.downloadFile({
      url: this.data.word,
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
            console.log(res)
            // wx.showToast({
            //   title: 'word 为空，打开失败',
            //   icon: 'none',
            //   duration: 1500
            // })
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: 'word为空',
          icon: 'none',
          duration: 1500
        })
      },
      complete: function (res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getList()
    var that = this
    wx.request({
      url: 'https://diandu.bonnidee.cn/api/Task/view' ,
      method:'post',
      data:{
        id: wx.getStorageSync('taskId'),
        Authorization: wx.getStorageSync('token')
      },
      header:{
        'content-type':'application/json'
      },
      success:function(res) {
        var article = res.data.data.work_desc
        WxParse.wxParse('article','html',article,that,5)
      },
      fail:function(res){
      },
      complete:function(res){
      }
    })
    wx.request({
      url: 'https://diandu.bonnidee.cn/api/Task/view' ,
      method:'post',
      data:{
        id: wx.getStorageSync('taskId'),
        Authorization: wx.getStorageSync('token')
      },
      header:{
        'content-type':'application/json'
      },
      success:function(res) {
        var article1 = res.data.data.company_profile
        WxParse.wxParse('article1','html',article1,that,5)
      },
      fail:function(res){
      },
      complete:function(res){
      }
    })
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