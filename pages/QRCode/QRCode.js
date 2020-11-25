// pages/QRCode/QRCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/index/footer/3.png',
    name: '赵钱孙李',
    mobile: '186****8999',
    codeImg: '../../images/index/footer/35.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  saveCode: function () {
    let that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.codeImg,
      success: function (data) {
        console.log(data)
        wx.showToast({
          title: '图片保存成功',
          icon: 'success',
          duration: 2000
        })
      }
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