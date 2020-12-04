// pages/QRCode/QRCode.js
import QR from '../../utils/qrcode'
let app = getApp()
const api = app.globalData.api;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeImg: '../../images/index/footer/code.png',
    list: {},
    path: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.info(data).then(res => {
      console.log(res.data)
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
  saveCode: function () {
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
  savePhoto() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.path,
      success(res) {
        console.log(res)
        wx.showToast({
          title: '保存成功',
          icon: 'none',
          duration: 1500
        })
      },
      fail(error) {
        console.log(res)
        wx.showToast({
          title:'保存失败',
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // drawImg: function () {
  //   let that = this,
  //     params = JSON.stringify(wx.getStorageSync('user_id')) // 二维码参数 

  //   var imgData = QR.drawImg(params, {
  //     typeNumber: 4, // 密度
  //     errorCorrectLevel: 'L', // 纠错等级
  //     size: 800, // 白色边框
  //   })
  //   that.setData({
  //     codeImg: imgData
  //   })
  // },
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