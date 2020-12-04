// pages/applyInfo/applyInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 200,
    currentWordNumber: 0,
    // 显示模态框
    showModal: false,
    id: '',
    list: {},
    showType: false,
    cause: '', //驳回的内容
    shenPi:'',
    src:'',
    src:'../../images/index/footer/9.png',
    src1:'../../images/index/footer/12.png',
    src2:'../../images/index/footer/pass.png',
  },
  // 获取列表
  getList: function (e) {
    let data = {
       id:this.data.id,
      // id: '6',
      Authorization: wx.getStorageSync('token')
    }
    api.toDoInfo(data).then(res => {
      console.log(res.data)
      switch (res.data.data.shenfen) {
        case 1:
          res.data.data.shenfen = '城市合伙人'
          break;
        case 2:
          res.data.data.shenfen = '县级合伙人'
          break;
        case 3:
          res.data.data.shenfen = '乡镇合伙人'
          break;
      }
      switch (res.data.data.boss_shenfen) {
        case 1:
          res.data.data.boss_shenfen = '城市合伙人'
          break;
        case 2:
          res.data.data.boss_shenfen = '县级合伙人'
          break;
        case 3:
          res.data.data.boss_shenfen = '乡镇合伙人'
          break;
      }
      switch (res.data.data.sex) {
        case 1:
          res.data.data.sex = '男'
          break;
        case 2:
          res.data.data.sex = '女'
          break;
      }
      console.log(res.data.data.type)
      switch (res.data.data.type) {
        case 0:
          this.setData({
            showType:true,
            shenPi:'已通过',
            src:'../../images/index/footer/pass.png'
          })
          break;
        case 1:
          this.setData({
            showType:false,
            shenPi:'待审核',
            src:'../../images/index/footer/9.png'
          })
          break;
        case 2:
          this.setData({
            showType:false,
            shenPi:'待审核',
            src:'../../images/index/footer/9.png'
          })
          break;
        case 3:
          this.setData({
            showType:false,
            shenPi:'待审核',
            src:'../../images/index/footer/9.png'
          })
          break;
        case 4:
          this.setData({
            showType:true,
            shenPi:'未通过',
            src:'../../images/index/footer/12.png'
          })
          break;
        case 5:
          this.setData({
            showType:false,
            shenPi:'未申请入驻',
            src:''
          })
          break;
      }
      if (res.data.code == 200) {
        this.setData({
          list: res.data.data
        })
      }
    })
  },
  // 点击驳回按钮
  reject: function () {
    this.setData({
      showModal: true
    })
  },
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
    if (this.data.cause == '') {
      wx.showToast({
        title: '请输入有效内容',
        icon: 'none',
        duration: 1000
      })
    } else {
      let data = {
        id: this.data.id,
        type: '4',
        cause: this.data.cause,
        Authorization: wx.getStorageSync('token')
      }
      api.setType(data).then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
          this.getList()
          // this.hideModal();
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
        }
      })
    }
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
    this.setData({
      id: options.id
    })
    this.getList()
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