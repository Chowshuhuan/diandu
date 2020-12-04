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
    codeImg: '../../images/index/footer/code.png',
    qrcodeURL: '',
    word: '', //word下载的地址
  },
  // 获取列表
  getList(){
    let that = this
       // 获取详情
    let data = {
      // id: '5',
      id: wx.getStorageSync('taskId'),
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
          word: res.data.data.word
        })
        if (that.data.list.sex == '1') {
          that.data.list.sex = '男'
        } else {
          that.data.list.sex = '女'
        }
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
    if(!wx.getStorageSync('token')){
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
      id:wx.getStorageSync('taskId'),
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
    if(!wx.getStorageSync('token')){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    this.setData({
      codeShow: this.data.codeShow ? false : true,
      codeShow2: this.data.codeShow2 ? false : true,
    })
    // this.drawImg()
  },
  // 隐藏二维码
  hiddenCode: function (e) {
    this.setData({
      codeShow: this.data.codeShow ? false : true,
      codeShow2: this.data.codeShow2 ? false : true,
    })
  },
  // 授权相册
  saveCode: function (e) {
    let that = this
    wx.getImageInfo({
      src: that.data.codeImg,
      success: function (ret) {
        that.setData({
          path: ret.path
        })
        //若二维码未加载完毕，加个动画提高用户体验
        //判断用户是否授权"保存到相册"
        wx.getSetting({
          success(res) {
            //没有权限，发起授权
            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success() { //用户允许授权，保存图片到相册
                  that.savePhoto();
                },
                fail() { //用户点击拒绝授权，跳转到设置页，引导用户授权
                  wx.openSetting({
                    success() {
                      wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success() {
                          that.savePhoto();
                        }
                      })
                    }
                  })
                }
              })
            } else { //用户已授权，保存到相册
              that.savePhoto()
            }
          }
        })
      }
    })
  },
  // 保存图片
  savePhoto() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.path,
      success(res) {
        wx.showToast({
          title: '保存成功',
          icon: 'none',
          duration: 1500
        })
      },
      fail(error) {
        wx.showToast({
          title: '保存失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  // 生成二维码的方法
  // drawImg: function () {
  //   let that = this,
  //     params = JSON.stringify(wx.getStorageSync('user_id')) // 二维码参数 

  //   var imgData = QR.drawImg(params, {
  //     typeNumber: 4, // 密度
  //     errorCorrectLevel: 'L', // 纠错等级
  //     size: 800, // 白色边框
  //   })

  //   this.setData({
  //     qrcodeURL: imgData
  //   })
  // },
  // 输送人才
  express: function (e) {
    if(!wx.getStorageSync('token')){
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
    if(!wx.getStorageSync('token')){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
      return
    }
    
    wx.downloadFile({
      url: this.data.word,
      success: function (res) {
        if (res.errMsg == 'downloadFile:ok') {
          let filePath = res.tempFilePath;
          wx.saveImageToPhotosAlbum({
            filePath:filePath,
            success: function (res) {
              wx.showToast({
                title: '下载成功',
                icon: 'none',
                duration: 1500
              })
              // wx.saveFile({
              //   tempFilePath: tempFilePaths[0],
              //   success(res) {
              //     const savedFilePath = res.savedFilePath
              //   }
              // })
            }
          })
          console.log('成功')
          // 文件下载成功
        } else {
          //  失败
          console.log('失败')
        }
      }
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