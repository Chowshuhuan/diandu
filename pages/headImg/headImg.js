// pages/headImg/headImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/index/footer/15.png'
  },
  // 取消
  cancel: function () {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  takePhoto() {
    var that = this
    wx.chooseImage({
      count:9,
      sizeType:['original','compressed'],
      sourceType:['camera'],
      success:function(res){
        that.setData({
         src:res.tempFilePaths[0]
        })
        console.log(res.tempFilePaths[0])
      }
    })
  },
  checkPhoto() {
    var that = this
    wx.chooseImage({
      count:9,
      sizeType:['original','compressed'],
      sourceType:['album'],
      success:function(res){
        that.setData({
          src:res.tempFilePaths[0]
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