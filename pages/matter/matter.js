// pages/matter/matter.js
let app = getApp()
const api = app.globalData.api;
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
    // 显示模态框
    showModal: false,
    type: '1',
    list: [],
    shenfen: '',
    id: '', //点击选择的id
    cause: '', //驳回的内容
    typeTxt: ''
  },
  // 获取列表
  getList: function (e) {
    let data = {
      Authorization: wx.getStorageSync('token'),
      page: '',
      limut: '',
      type: this.data.type
    }
    api.toDo(data).then(res => {
      if (res.data.code == 200) {
        res.data.data.data.forEach(v => {
          if (v.shenfen == 1) {
            v.shenfen = '城市合伙人'
          } else if (v.shenfen == 2) {
            v.shenfen = '县级合伙人'
          } else {
            v.shenfen = '乡镇合伙人'
          }
        })
        res.data.data.data.forEach(v => {
          switch (v.type) {
            case 0:
              this.setData({
                typeTxt: '已通过'
              })
              break;
            case 1:
              this.setData({
                typeTxt: '待处理'
              })
              break;
            case 2:
              this.setData({
                typeTxt: '待处理'
              })
              break;
            case 3:
              this.setData({
                typeTxt: '待处理'
              })
              break;
            case 4:
              this.setData({
                typeTxt: '已驳回'
              })
              break;
            case 5:
              this.setData({
                typeTxt: '未申请'
              })
              break;
          }
        })
        this.setData({
          list: res.data.data.data
        })
        if (this.data.list.length == 0) {
          wx.showToast({
            title: '数据为空',
            icon: 'none',
            duration: 1000
          })
        }
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
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
      type: '1'
    })
    this.getList()
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
      type: '2',
    })
    this.getList()
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
      type: '3',
    })
    this.getList()
  },
  // 点击驳回按钮
  reject: function (e) {
    this.setData({
      showModal: true,
      id: e.currentTarget.dataset.id
    })
  },
  // 查看详情
  lookInfo: function (e) {
    wx.setStorageSync('lookId', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../applyInfo/applyInfo?id=' + e.currentTarget.dataset.id
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
  // 计算驳回内容的字数
  inputs: function (e) {
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    this.setData({
      currentWordNumber: len, //当前字数 
      cause: value
    });
  },
  // 判断是否有内容
  checkTxt: function (e) {
    if (e.detail.value == '') {
      wx.showToast({
        title: '请输入有效内容',
        icon: 'none',
        duration: 1000
      })
    } else {
      this.setData({
        cause: e.detail.value
      })
    }
  },
  /**
   * 驳回的确定按钮
   */
  onConfirm: function (e) {
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
        if (res.data.code == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
          this.setData({
            showModal: false
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
  // 通过的按钮
  pass: function (e) {

    let data = {
      id: e.currentTarget.dataset.id,
      type: '1',
      cause: '',
      Authorization: wx.getStorageSync('token')
    }
    api.setType(data).then(res => {
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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