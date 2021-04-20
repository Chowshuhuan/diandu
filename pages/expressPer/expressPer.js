const {
  default: api
} = require("../../utils/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showWork: false,
    showAge: false,
    showSex: false,
    id: '',
    list: [],
    workList: [],
    name: '',
    workTag: [], //工种，期望岗位
    unitIndex: [], //工种选择的下标
    ageIndex: '', //年龄选择的下标
    sexIndex: '', //性别选择的下标
    tagIndex: '', //工种下标
    ageList: [{
      id: 1,
      age: '不限',
    }, {
      id: 2,
      age: '18-24',
    }, {
      id: 3,
      age: '24-30',
    }, {
      id: 4,
      age: '30-35',
    }, {
      id: 5,
      age: '35-40',
    }, {
      id: 6,
      age: '40-50',
    }, {
      id: 7,
      age: '50岁以上',
    }], //年龄列表
    icon: '../../images/index/footer/4.png', // 显示的图标
    icon2: '../../images/index/footer/2.png', // 显示的图标
    sex: '', //性别
    min_age: '', //最小年龄
    max_age: '', //最大年龄
    work_tag: [], //工种
    sexList: [{
        id: 0,
        sex: '不限'
      },
      {
        id: 1,
        sex: '男'
      },
      {
        id: 2,
        sex: '女'
      },
    ],
    activeSex: '',
    express: [], //输送的元
    checkLength: '0', //输送的人数
    tagIndex1:''
  },
  // 显示工种
  checkWork: function (e) {
    this.setData({
      showWork: this.data.showWork ? false : true,
      showAge: false,
      showSex: false,
      tagIndex:'31'
    })
  },
  // 显示性别
  checkSex: function (e) {
    this.setData({
      showSex: this.data.showSex ? false : true,
      showAge: false,
      showWork: false
    })
  },
  // 形式年龄
  checkAge: function (e) {
    this.setData({
      showAge: this.data.showAge ? false : true,
      showWork: false,
      showSex: false,
      ageIndex:'不限'
    })
  },
  // 获取列表
  getList: function (e) {
    let data = {
      name: this.data.name,
      sex: this.data.sex,
      min_age: this.data.min_age,
      max_age: this.data.max_age,
      Authorization: wx.getStorageSync('token'),
      work_tag: this.data.tagIndex1
    }
    api.staffList(data).then(res => {
      if (res.data.code == 200) {
        this.setData({
          list: res.data.data
        })
        this.data.list.forEach(item => {
          item.checked = false
        })
      } else {
        this.setData({
          list: []
        })
      }
    })
  },
  // 隐藏工作岗位
  hideModal() {
    this.setData({
      showWork: false
    });
  },
  // 隐藏性别
  hideModal1() {
    this.setData({
      showSex: false
    });
  },
  // 隐藏年龄
  // 隐藏性别
  hideModal2() {
    this.setData({
      showAge: false
    });
  },
  // 获取工种
  getWork: function (e) {
    api.workTag().then(res => {
      if (res.data.code == 200) {
        this.setData({
          workTag: res.data.data,
        })
      }
    })
  },
  // 搜索
  search: function (e) {
    this.setData({
      name: e.detail.value
    })
    this.getList()
  },
  // 选择工种
  checkTag: function (e) {
    let index = e.currentTarget.dataset.id
    if (index == 31) {
      this.setData({
        tagIndex1: '',
        tagIndex: index,
      })
    } else {
      this.setData({
        tagIndex: index,
        tagIndex1: index,
      })
    }
    this.getList()
  },
  // 选择性别
  checkSexInfo(e) {
    let index = e.currentTarget.dataset.id
    this.setData({
      sexIndex: index,
      sex: JSON.stringify(index)
    })
    this.getList()
  },
  // 选择年龄
  checkAge2(e) {
    let index = e.target.dataset.index;
    this.setData({
      ageIndex: index,
    })
    switch (e.currentTarget.dataset.index) {
      case '不限':
        this.setData({
          min_age: '',
          max_age: ''
        })
        break;
      case '18-24':
        this.setData({
          min_age: '18',
          max_age: '24'
        })
        break;
      case '24-30':
        this.setData({
          min_age: '24',
          max_age: '30'
        })
        break;
      case '30-35':
        this.setData({
          min_age: '30',
          max_age: '35'
        })
        break;
      case '35-40':
        this.setData({
          min_age: '35',
          max_age: '40'
        })
        break;
      case '40-50':
        this.setData({
          min_age: '40',
          max_age: '50'
        })
        break;
      case '50岁以上':
        this.setData({
          min_age: '50',
          max_age: ''
        })
        break;
    }
    this.getList()
  },
  //选中员工box
  checkboxChange: function (e) {
    this.setData({
      express: e.detail.value,
      checkLength: JSON.stringify(e.detail.value.length)
    })
  },
  //  输送
  expressPer: function (e) {
    if (this.data.checkLength == 0) {
      wx.showToast({
        title: '请选择至少一个需要输送的人才',
        icon: 'none',
        duration: 2000
      })
      return
    }
    let data = {
      task_id: wx.getStorageSync('taskId'),
      // task_id:'5',
      staff_id: this.data.express,
      Authorization: wx.getStorageSync('token'),
    }
    api.sendStaff(data).then(res => {
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
        // this.getList()
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    that.setData({
      id: options.id
    })
    that.getList()
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
    this.getWork()
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