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
    page: 1, //页数
    limit: 10, //每页条数
    work_name: '', //岗位名称
    Authorization: '', //token参数
    list: [], //列表
    welfare: [], //福利列表
    address_sheng: '', //省
    address_shi: '', //市
    area: '', //全部的
    iv: '',
    encrypted_data: '',
    searchName: '',
    city: "全部",
    bannerList:[],//轮播图列表
  },
  // 选择城市
  bindRegionChange: function (e) {
    wx.navigateTo({
      url: '../city/city'
    })
  },
  // 搜索职位/公司
  search: function (e) {
    this.setData({
      searchName: e.detail.value
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
    if (this.data.address_sheng == this.data.address_shi) {
      this.data.address_shi = ''
    }
    if (this.data.area == '全部') {
      this.data.address_sheng = ''
      this.data.area = ''
    }
    switch (this.data.area) {
      case '上海':
        this.setData({
          address_sheng: '上海市',
          area: ''
        })
        break;
      case '天津':
        this.setData({
          address_sheng: '天津市',
          area: ''
        })
        break;
      case '重庆':
        this.setData({
          address_sheng: '重庆市',
          area: ''
        })
        break;
      case '北京':
        this.setData({
          address_sheng: '北京市',
          area: ''
        })
        break;
    }
    let data = {
      page: this.data.page,
      limit: this.data.limit,
      work_name: this.data.searchName,
      // Authorization:  wx.getStorageSync('token'),
      address_sheng: this.data.address_sheng,
      address_shi: this.data.area,
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
          console.log(res.data.data.data)
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
  // 获取banner
  getBanner:function(e){
    let arr = []
   api.bannerList().then(res => {
     res.data.data.forEach( v => {
         arr.push(v.complete_path)
     });
     this.setData({
       bannerList:arr
     })
   })
  },
  // 查看详情
  todetail(e) {
    wx.setStorageSync('taskId', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../jobInfo/jobInfo?id=' + e.currentTarget.dataset.id
    })
  },
  // 上拉刷新
  onReachBottom: function () {
    this.setData({
      page: this.data.page++,
      limit: this.data.limit * this.data.page,
    })
    this.getList()
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
      this.getList()
      this.getBanner()
  },
  onShow: function () {
    switch (wx.getStorageSync("locatecity").city) {
      case '全部':
        this.setData({
          city: '全部',
          area: '',
          address_sheng: ''
        })
        break;
      case '上海':
        this.setData({
          city: '上海',
          area: '',
          address_sheng: '上海'
        })
        break;
      case '天津':
        this.setData({
          city: '天津',
          area: '',
          address_sheng: '天津'
        })
        break;
      case '重庆':
        this.setData({
          city: '重庆',
          area: '',
          address_sheng: '重庆'
        })
        break;
      case '北京':
        this.setData({
          city: '北京',
          area: '',
          address_sheng: '北京'
        })
    }
    if (wx.getStorageSync("locatecity").city != ('全部' || '北京' || '天津' || '上海' || '重庆')) {
      this.setData({
        city: wx.getStorageSync("locatecity").city,
        area: wx.getStorageSync("locatecity").city,
        address_sheng: ''
      })
    }
    if (!wx.getStorageSync("locatecity").city) {
      this.setData({
        area: '',
        city: '全部',
        address_sheng: ''
      })
    }
    this.getList()
  },
})