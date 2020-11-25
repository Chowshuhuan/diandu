// pages/basicInfo/basicInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    showWork:false,
    showText:false,
    showIll:false,
    // 病史选择框
    illRadio:[{
      name:'有',
      checked:false,
      text:'有',
      value:1
    },{
      name:'无',
      checked:false,
      text:'无',
      value:2
    }],
    // 病史详细内容
    illContent:''
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 显示期望岗位
  checkWork:function(e) {
    this.setData({
      showWork: this.data.showWork ? false : true,
    })
  },
  // 详细病史的显示隐藏
  radioChange1: function (e) {
    let pages1 = e.detail.value;
    this.setData({
      seleted: "选中的value：" + pages1
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if(e.detail.value =='有'){
      this.setData({
        showIll: true
      })
    }else{
      this.setData({
        showIll: false
      })
    }
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