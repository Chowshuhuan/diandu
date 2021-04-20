// import qrcode from '../../utils/qrcode';
// pages/QRCode/QRCode.js
// import QR from '../../utils/qrcode'
let app = getApp()
const api = app.globalData.api;
const QR = require("../../utils/code");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeImg: '',
    list: {},
    path: '',
    canvasHidden: false,
    imagePath: '',
    attr: '../../images/index/footer/3.png'
  },
  getList() {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.info(data).then(res => {

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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //option为上个页面传递过来的参数
    let jiaoyanCode = 'https://diandu.bonnidee.cn/diandu/?user_id=' + wx.getStorageSync('user_id')
    let size = this.setCanvasSize(); //动态设置画布大小	
    this.createQrCode(jiaoyanCode, "mycanvas", size.w, size.h);
    this.getList()
  },
  saveCode: function () {
    let that = this
    wx.getImageInfo({
      src: that.data.imagePath,
      success: function (ret) {
        console.log(ret)
        that.setData({
          path: ret.path
        })
        //若二维码未加载完毕，加个动画提高用户体验
        //判断用户是否授权"保存到相册"
        wx.getSetting({
          success(res) {
            console.log(res)
            if (res.errMsg == "getSetting:ok") {
              that.savePhoto();
            }
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
          },
        })
      }
    })
  },
  savePhoto() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imagePath,
      success(res) {
        wx.showToast({
          title: '保存成功',
          icon: 'none',
          duration: 1500
        })
      },
      fail(err) {
        wx.showToast({
          title: '保存失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function () {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 686; //不同屏幕下canvas的适配比例；设计稿是750宽  686是因为样式wxss文件中设置的大小
      var width = res.windowWidth / scale;
      var height = width; //canvas画布为正方形
      size.w = width;
      size.h = height;
    } catch (e) {
      // Do something when catch error
      console.log("获取设备信息失败" + e);
    }
    return size;
  },
  createQrCode: function (url, canvasId, cavW, cavH) {
    //调用插件中的draw方法，绘制二维码图片
    QR.api.draw(url, canvasId, cavW, cavH);
    setTimeout(() => {
      this.canvasToTempImage(canvasId);
    }, 1000);
  },
  /**
   * 获取临时缓存照片路径，存入data中
   */
  canvasToTempImage: function () {
    var that = this;
    //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath,
          canvasHidden: false
        });
      },
      fail: function (res) {
        wx.showToast({
          title: res,
          icon: 'none',
          duration: 1500
        })
      }
    });
  },
  previewImg: function (e) {
    var img = this.data.imagePath;
    console.log(img);
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.drawImg()
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