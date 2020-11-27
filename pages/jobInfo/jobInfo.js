// pages/jobInfo/jobInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:['../../images/index/footer/27.png','../../images/index/footer/28.png','../../images/index/footer/banner.png'],
    list:{},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log(options.id)
    // 获取详情
    let data ={
      id : '5',
      Authorization:wx.getStorageSync('token')
    }
    api.taskView(data).then(res => {
      console.log(res.data)
      if(res.data.code == 200){
        console.log(res.data.data)
         that.setData({
           list: res.data.data
         })
         if(that.data.list.sex =='1'){
          that.data.list.sex = '男'
         }else {
          that.data.list.sex = '女'
         }
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