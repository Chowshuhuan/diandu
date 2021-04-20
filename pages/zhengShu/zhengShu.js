// pages/tianjia/tianjia.js
let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    items: [],
    startX: 0, //开始坐标
    startY: 0,
    inputVal: [],
    pathVal: [],
    imageVal: [],
    Loadingtime: '', //定时器变量
  },

  onLoad: function (e) {},

  //手指触摸动作开始 记录起点X坐标

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })

  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  addInput(e) {
    wx.navigateTo({
      url: '../addImg/addImg',
    })
  },
  //删除事件
  del: function (e) {   
    for (let i = 0; i < this.data.items.length; i++) {
      if (i == e.currentTarget.dataset.index) {
        this.data.items.splice(i, 1)
      }
    }
    this.setData({
      items:this.data.items
    })
    wx.setStorageSync('jishu_prove', JSON.stringify(this.data.items))
  },
  // 保存
  saveImg(e) {
    wx.setStorageSync('jishu_prove', JSON.stringify(this.data.items))
    wx.showToast({
      title: '保存成功,两秒后跳转至申请信息页面',
      icon: 'none',
      duration: 1500
    })
    this.setData({
      // 定时三秒跳转对比页面
      Loadingtime: setInterval(function () {
        // 跳转页面
        wx.navigateTo({
          url: '../basicInfo/basicInfo',
        })
      }, 2000)
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
    console.log(JSON.parse(wx.getStorageSync('jishu_prove')))
    this.setData({
      items: JSON.parse(wx.getStorageSync('jishu_prove')),
      isTouchMove: false //默认隐藏删除
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.Loadingtime);
    this.setData({
      Loadingtime: null
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.Loadingtime);
    this.setData({
      Loadingtime: null
    })
  },
})