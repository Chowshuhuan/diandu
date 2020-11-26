// pages/family/family.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInfo:false,
    src:'../../images/index/footer/36.png',
    list:[{
      name:'那个村'
    },{
      name:'这家店'
    },{
      name:'这户人'
    }]
  },
  checkShow:function(e) {
    this.setData({
      showInfo: this.data.showInfo ? false : true,
      src: this.data.showInfo  ? '../../images/index/footer/36.png' : '../../images/index/footer/4.png',
    })
  },
  toVillage:function() {
    wx.navigateTo({
      url: '../village/village',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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