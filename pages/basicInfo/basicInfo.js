// pages/basicInfo/basicInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    showWork: false,
    showText: false,
    showIll: false,
    // 病史选择框
    illRadio: [{
      name: '有',
      checked: false,
      text: '有',
      value: 1
    }, {
      name: '无',
      checked: false,
      text: '无',
      value: 2
    }],
    // 病史详细内容
    illContent: '',
    // 期望岗位
    workTag: [],
    unitIndex: [], //工种选择的下标
    name: '', //名字
    sex: '', //性别
    id_num: '', //身份号
    brith_time: '请选择', //出生
    age: '', //年龄\
    phone: '', //电话
    census_address1: '请选择', //户籍所在地
    census_address2: '', //户籍所在地
    census_address3: '',
    census_address: [], //户籍所在地
    before_work: '', //曾经工作岗位
    compensation: '', //期望工资
    is_ill: '', //有无病史
    ill_details: '', //病史描述
  },
  // 户籍所在地
  bindRegionChange: function (e) {
    let arr = []
    e.detail.value.forEach(v => {
      arr.push(v)
    })
    if (e.detail.value[0] == e.detail.value[1]) {
      this.setData({
        census_address1: e.detail.value[0],
        census_address2: '',
        census_address3: e.detail.value[2],
        census_address: arr
      })
    } else {
      this.setData({
        census_address1: e.detail.value[0],
        census_address2: e.detail.value[1],
        census_address3: e.detail.value[2],
        census_address: arr
      })
    }
  },
  // 显示期望岗位
  checkWork: function (e) {
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
    if (e.detail.value == '有') {
      this.setData({
        showIll: true,
        is_ill: '1'
      })
    } else {
      this.setData({
        showIll: false,
        is_ill: '0'
      })
    }
  },
  //  获取期望岗位
  getList: function (e) {
    api.workTag().then(res => {
      if (res.data.code == 200) {
        this.setData({
          workTag: res.data.data
        })
        this.data.workTag.forEach(item => {
          item.selected = false
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
        this.setData({
          list: []
        })
      }
    })
  },
  // 选择工种
  checkTag: function (e) {
    let arr = []
    let string = "workTag[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.workTag[e.target.dataset.index].selected
    })
    this.data.unitIndex.push(e.target.dataset.index)
    this.data.workTag.forEach(v => {
      if (v.selected == true) {
        arr.push(v.id)
      }
    })
    this.setData({
      unitIndex: arr
    })
  },
  // 姓名
  setusername: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  // 性别
  changeSex: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  // 身份证号
  setId: function (e) {
    this.setData({
      id_num: e.detail.value
    })
  },
  // 出生日期
  changeDate: function (e) {
    console.log(e.detail.value)
    this.setData({
      brith_time: e.detail.value
    })
    console.log(this.data.brith_time)
  },
  // 年龄
  changeAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  // 电话
  changePhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 曾经工作
  work: function (e) {
    this.setData({
      before_work: e.detail.value
    })
  },
  // 薪资
  changeSalary: function (e) {
    this.setData({
      compensation: e.detail.value
    })
  },
  // 病史内容
  bindTextAreaBlur: function (e) {
    this.setData({
      ill_details: e.detail.value
    })
  },
  // 提交
  sureAdd: function (e) {
    let data = {
      boss_id: wx.getStorageSync('user_id'),
      name: this.data.name,
      sex: this.data.sex,
      id_num: this.data.id_num,
      birth_time: this.data.brith_time,
      age: this.data.age,
      phone: this.data.phone,
      census_address: this.data.census_address,
      before_work: this.data.before_work,
      compensation: this.data.compensation,
      expect_work: this.data.unitIndex,
      is_ill: this.data.is_ill,
      ill_details: this.data.ill_details
    }
    api.fillInfo(data).then(res => {
      console.log(res.data)
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
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