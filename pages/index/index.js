//index.js
//获取应用实例
const app = getApp()
const api = app.globalData.api;

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
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
    iv:'',
    encrypted_data:'',
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
        Authorization:  wx.getStorageSync('token'),
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
      console.log(e.currentTarget.dataset.id)
      wx.setStorageSync('taskId', e.currentTarget.dataset.id)
      wx.navigateTo({
        url: '../jobInfo/jobInfo?id=' + e.currentTarget.dataset.id
      })
    },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    this.getList()
  },
})
