// pages/matter/matter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 200,
    currentWordNumber: 0,
    white1: true,
    white2: false,
    white3: false,
    one: true,
    two: false,
    three: false,
    arr: [{
      caoacity: '城市合伙人',
      name: '赵钱孙李',
      area: '北京市 丰台区',
      address: '而我却无群无群二为王企鹅无群为请问请问',
      status: '待处理'
    }, {
      caoacity: '农村合伙人',
      name: '李四王五',
      area: '上海市 浦东新区',
      address: '请问几千万科技为其味无穷看第三方',
      status: '待处理'
    }],
    arr2: [{
      caoacity: '城市合伙人',
      name: '赵钱孙李',
      area: '北京市 丰台区',
      address: '而我却无群无群二为王企鹅无群为请问请问',
      status: '已驳回'
    }],
    arr3: [{
      caoacity: '城市合伙人',
      name: '赵钱孙李',
      area: '北京市 丰台区',
      address: '而我却无群无群二为王企鹅无群为请问请问',
      status: '已通过'
    }, {
      caoacity: '农村合伙人',
      name: '李四王五',
      area: '上海市 浦东新区',
      address: '请问几千万科技为其味无穷看第三方',
      status: '已通过'
    }, {
      caoacity: '乡镇合伙人',
      name: 'Monster',
      area: '江西省 南昌市',
      address: '发送到发送到，票玩儿玩儿绕弯儿问我让',
      status: '已通过'
    }],
    // 显示模态框
    showModal: false
  },
  // 待处理
  checkInfo: function () {
    this.setData({
      one: true,
      two: false,
      three: false,
      white1: true,
      white2: false,
      white3: false,
    })
  },
  // 已驳回
  checkInfo1: function () {
    this.setData({
      one: false,
      two: true,
      three: false,
      white1: false,
      white2: true,
      white3: false,
    })
  },
  // 已通过
  checkInfo2: function () {
    this.setData({
      one: false,
      two: false,
      three: true,
      white1: false,
      white2: false,
      white3: true,
    })
  },
  // 点击驳回按钮
  reject: function () {
    this.setData({
      showModal: true
    })
  },
  // 查看详情
  lookInfo:function(e){
    wx.navigateTo({
      url: '../applyInfo/applyInfo',
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  // 计算驳回内容的字数
  inputs: function (e) {
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    this.setData({
      currentWordNumber: len //当前字数 
    });
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