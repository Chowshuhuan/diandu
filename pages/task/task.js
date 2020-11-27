let app = getApp()
const api = app.globalData.api;
Page({
  data: {
    region: [],
    customItem: '全部',
    page: '', //页数
    limit: '', //每页条数
    work_name: '', //岗位名称
    Authorization: '', //token参数
    list: [], //列表
    welfare: [], //福利列表
    address_sheng: '', //省
    address_shi: '', //市
    area: '全部', //全部的
  },
  // 选择城市
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
      address_sheng: e.detail.value[0],
      address_shi: e.detail.value[1],
      area: e.detail.value[1]
    })
    this.getList()
  },
  // 搜索职位/公司
  search: function (e) {
    this.setData({
      work_name:e.detail.value
    })
    this.getList()
  },
  // 点击搜索职位/公司按钮
  search2: function (e) {
    this.getList()
  },
  // 获取任务列表
  getList: function (e) {
    if (this.data.address_sheng == '全部') {
      this.data.address_sheng = ''
    }
    if (this.data.address_shi == '全部') {
      this.data.address_shi = ''
    }
    let data = {
      page: this.data.page,
      limit: this.data.limit,
      work_name: this.data.work_name,
      Authorization: this.data.Authorization,
      address_sheng: this.data.address_sheng,
      address_shi: this.data.address_shi,
    }
    api.taskList(data).then(res => {
      if (res.data.code == 200) {
        if (res.data.data.count == 0) {
          wx.showToast({
            title: '当前城市无此工作岗位',
            icon: 'none',
            duration: 1000
          })
          this.setData({
            list: [],
          })
        } else {
          this.setData({
            list: res.data.data.data,
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
  // 查看详情
  todetail(e) {
    // console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '../jobInfo/jobInfo?id=' + e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      Authorization: wx.getStorageSync('token')
    })
    wx.getStorageSync('token')
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