// pages/family/family.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInfo: false,
    src: '../../images/index/footer/88.png',
    src1: '../../images/index/footer/88.png',
    showInfo1: false,
    list: [{
      name: '那个村'
    }, {
      name: '这家店'
    }, {
      name: '这户人'
    }],
    familyList: {},
    shenfen: '',
    list2: [{
      name: '',
      child: [{
        name: '',
        child: [{
          name: '',
          child: []
        }]
      }]
    }],
    bossName: '', //所属上级
    showBoss: '',
    xianSh1: false,
    xianShi2: false,
    xianShi3: false,
    list3: [{
      name: '',
      child: []
    }],
    list1:[],
    listIndex:'',
    showIndex: 0
  },
  checkShow: function (e) {
    this.setData({
      showInfo: this.data.showInfo ? false : true,
      src: this.data.showInfo ? '../../images/index/footer/88.png' : '../../images/index/footer/89.png',
    })
  },
  checkShow2: function (e) {
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.id
    this.setData({
      showInfo1: this.data.showInfo1 ? false : true,
      listIndex:index,
      src1: this.data.showInfo1 ? '../../images/index/footer/88.png' : '../../images/index/footer/89.png',
    })
  },
  //  折叠面板
  panel: function (e) {
    console.log(e.currentTarget.dataset.index)
    let index =e.currentTarget.dataset.index
    this.setData({
      listIndex: index,
      showInfo1: this.data.showInfo1 ? false : true,
      src1: this.data.showInfo1 ? '../../images/index/footer/88.png' : '../../images/index/footer/89.png',
      // src2: this.data.showInfo1 ? '../../images/index/footer/89.png' : '../../images/index/footer/88.png',
    })
    // if (e.currentTarget.dataset.index != this.data.showIndex) {
    //   this.setData({
    //     showIndex: e.currentTarget.dataset.index,
    //     listIndex:e.currentTarget.dataset.index
    //   })
    // } else {
    //   this.setData({
    //     showIndex: 0
    //   })
    // }
  },
  // 获取族群的列表
  getList: function (e) {
    let data = {
      Authorization: wx.getStorageSync('token')
    }
    api.group(data).then(res => {
      if (res.data.code == 200) {
        if(!res.data.data.enter_xian){
          res.data.data.enter_xian = ''
        }
        if(!res.data.data.enter_xiang){
          res.data.data.enter_xiang = ''
        }
        this.setData({
          familyList: res.data.data,
        })
        console.log(res.data.data.shenfen)
        switch (res.data.data.shenfen) {
          case 1:
            this.setData({
              shenfen: '城市合伙人',
              bossName: '',
              showBoss: false,
              xianSh1: true,
              xianShi2: false,
              xianShi3: false,
              list1:res.data.data.yizhan
            })
            break;
          case 2:
            this.setData({
              shenfen: '县级合伙人',
              bossName: '城市合伙人',
              showBoss: true,
              list2: res.data.data.yizhan,
              xianSh1: false,
              xianShi2: true,
              xianShi3: false,
            })
            break;
          case 3:
            this.setData({
              shenfen: '乡镇合伙人',
              bossName: '县级合伙人',
              showBoss: true,
              xianSh1: false,
              xianShi2: false,
              xianShi3: true,
              list3: res.data.data.yizhan,
            })
            break;
        }
        this.data.list1.child.forEach(v => {
          v.isOpen = false
        })
        console.log(this.data.list1)
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