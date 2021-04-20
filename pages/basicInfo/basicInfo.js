// pages/basicInfo/basicInfo.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [], //户籍所在地
    regionDwell: [], //居住所在地
    showWork: false,
    showText: false,
    showIll: false,
    // 病史选择框
    illRadio: [{
      name: '无',
      text: '无',
      value: 0,
      checked: false
    }, {
      name: '有',
      text: '有',
      value: 1,
      checked: false
    }],
    // 病史详细内容
    illContent: '',
    // 期望岗位
    workTag: [],
    unitIndex: [], //工种选择的下标
    name: '', //名字
    // sex: '',
    sex: [{
        value: 1,
        name: '男',
        checked: false,
        nan: ''
      },
      {
        value: 2,
        name: '女',
        checked: false,
        nan: ''
      },
    ], //性别
    id_num: '', //身份号
    birth_time: '请选择', //出生
    age: '', //年龄\
    phone: '', //电话
    census_address1: '请选择', //户籍所在地
    census_address2: '', //户籍所在地
    census_address3: '',
    census_address: [], //户籍所在地
    dwell_address: [],
    dwell_address1: '请选择', //居住所在地省
    dwell_address2: '', //居住所在地市
    dwell_address3: '', //居住所在地区/县
    dwell_address_details: '', //居住详细地址
    before_work: '', //曾经工作岗位
    compensation: '', //期望工资
    is_ill: '', //有无病史
    ill_details: '', //病史描述
    user_id: '', //bossid
    qiwang: '请选择',
    showModal: false,
    checkJob: '0', //所选择的工种
    all: '', //所有的工种
    jishu_prove: [],
    date: '',
    datePickerValue: ['', '', ''], //自定义时间选择器值
    datePickerIsShow: false, //自定义时间选择器
    inputVal: [],
    pathVal: [],
    index: '',
    realy: [], //真正确认选择的工种
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
    wx.setStorageSync('census_address1', this.data.census_address1)
    wx.setStorageSync('census_address2', this.data.census_address2)
    wx.setStorageSync('census_address3', this.data.census_address3)
    wx.setStorageSync('census_address', this.data.census_address)
  },
  // 居住所在地
  bindDwellChange: function (e) {
    let arr = []
    e.detail.value.forEach(v => {
      arr.push(v)
    })
    if (e.detail.value[0] == e.detail.value[1]) {
      this.setData({
        dwell_address1: e.detail.value[0],
        dwell_address2: '',
        dwell_address3: e.detail.value[2],
        dwell_address: arr
      })
    } else {
      this.setData({
        dwell_address1: e.detail.value[0],
        dwell_address2: e.detail.value[1],
        dwell_address3: e.detail.value[2],
        dwell_address: arr
      })
    }
    wx.setStorageSync('dwell_address1', this.data.dwell_address1)
    wx.setStorageSync('dwell_address2', this.data.dwell_address2)
    wx.setStorageSync('dwell_address3', this.data.dwell_address3)
    wx.setStorageSync('dwell_address', this.data.dwell_address)
  },
  // 居住详细地址
  bindTextdwell(e) {
    this.setData({
      dwell_address_details: e.detail.value
    })
    wx.setStorageSync('dwell_address_details', e.detail.value)
  },
  // 显示期望岗位
  toShowModal(e) {
    let arr= []
    if (this.data.workTag) {
      for (let i = 0; i < this.data.workTag.length; i++) {
        if(this.data.workTag[i].checked){
          this.data.workTag[i].selected = true
        }else{
          this.data.workTag[i].selected = false
        }
        // for (let j = 0; j < this.data.unitIndex.length; j++) {
        //   if (this.data.workTag[i].id == this.data.unitIndex[j]) {
        //     this.data.workTag[i].selected = true
        //     this.data.workTag[i].checked = true
        //   }
        // }
      }
      this.setData({
        workTag: this.data.workTag,
        unitIndex: this.data.unitIndex,
      })
    }
    this.data.workTag.forEach(v => {
      if(v.checked){
        arr.push(v)
      }
    })
    this.setData({
      showModal: true,
      checkJob:arr.length,
    })
  },
  // 隐藏工作岗位
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  // 详细病史的显示隐藏
  radioChange1: function (e) {

    if (e.detail.value == '1') {
      this.setData({
        showIll: true,
        is_ill: '1'
      })
      wx.setStorageSync('is_ill', '1')
    } else {
      this.setData({
        showIll: false,
        is_ill: '0'
      })
      wx.setStorageSync('is_ill', '0')
    }
  },
  //  获取期望岗位
  getList: function (e) {
    api.workTag().then(res => {
      if (res.data.code == 200) {
        for(let i=0;i<res.data.data.length;i++){
          if(res.data.data[i].tag == '不限'){
            res.data.data.splice(i,1)
          }
        }
        for(let i=0;i<res.data.data.length;i++){
          res.data.data[i].checked = false
        }
        this.setData({
          workTag: res.data.data,
          all: res.data.data.length
        })
        this.data.workTag.forEach(item => {
          item.selected = false
        })
        wx.setStorageSync('workTag', JSON.stringify(this.data.workTag))
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
    this.data.workTag.forEach(v => {
      if (v.selected == true) {
        arr.push(v.id)
      }
    })
    this.setData({
      unitIndex: arr,
      checkJob: arr.length
    })
  },
  // 取消选择工种
  cancelJob(e) {
    this.setData({
      showModal: false,
      unitIndex: this.data.realy
    })
    if (this.data.realy.length == 0) {
      this.setData({
        showModal: false,
        unitIndex: this.data.unitIndex
      })
    }
  },
  // 确认选择工种
  sureJob(e) {
    for(let i=0;i<this.data.workTag.length;i++){
       if(this.data.workTag[i].selected){
        this.data.workTag[i].checked = true
       }else{
        this.data.workTag[i].checked = false
       }
    }
    if (this.data.unitIndex.length !== 0) {
      this.setData({
        qiwang: '已选择' + this.data.unitIndex.length + '个',
        checkJob: this.data.unitIndex.length,
        showModal: false,
        realy: this.data.unitIndex
      })
      wx.setStorageSync('qiwang', this.data.qiwang)
      wx.setStorageSync('unitIndex', this.data.unitIndex)
    } else {
      this.setData({
        qiwang: '请选择',
        showModal: false,
      })
    }
  },
  // 姓名
  setusername: function (e) {
    this.setData({
      name: e.detail.value
    })
    wx.setStorageSync('name', e.detail.value)
  },
  // 性别
  changeSex: function (e) {
    wx.setStorageSync('index', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 身份证号
  setId: function (e) {
    this.setData({
      id_num: e.detail.value
    })
    wx.setStorageSync('id_num', e.detail.value)
  },
  // 出生日期
  changeDate: function (e) {
    let myDate = new Date()
    let year = myDate.getFullYear()
    let str = e.detail.value.slice(0, 4)
    if (Number(str) >= year) {
      wx.showToast({
        title: '出生年不能大于当前年',
        icon: 'none',
        duration: 1500
      })
    } else {
      this.setData({
        birth_time: e.detail.value
      })
      wx.setStorageSync('birth_time', e.detail.value)
    }
  },
  // 年龄
  changeAge: function (e) {
    this.setData({
      age: e.detail.value
    })
    wx.setStorageSync('age', e.detail.value)
  },
  // 电话
  changPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
    wx.setStorageSync('phone', e.detail.value)
  },
  // 曾经工作
  work: function (e) {
    this.setData({
      before_work: e.detail.value
    })
    wx.setStorageSync('before_work', e.detail.value)
  },
  // 薪资
  changeSalary: function (e) {
    this.setData({
      compensation: e.detail.value
    })
    wx.setStorageSync('compensation', e.detail.value)
  },
  // 病史内容
  bindTextAreaBlur: function (e) {
    this.setData({
      ill_details: e.detail.value
    })
    wx.setStorageSync('ill_details', e.detail.value)
  },
  // 上传证书
  toZhengShu(e) {
    wx.setStorageSync('user_id', this.data.user_id)
    wx.navigateTo({
      url: '../zhengShu/zhengShu',
    })
  },
  // 显示自定义出生年与日时间
  showDatePicker: function (e) {
    this.setData({
      datePickerIsShow: true,
    });
  },
  // 确定选择的时间
  datePickerOnSureClick: function (e) {
    let myDate = new Date()
    let year = myDate.getFullYear()
    if (e.detail.value[0] >= year) {
      wx.showToast({
        title: '出生年不能大于当前年',
        icon: 'none',
        duration: 1500
      })
    } else {
      let num1 = Number(e.detail.value[1])
      let num2 = Number(e.detail.value[2])
      this.setData({
        date: `${e.detail.value[0]}年${e.detail.value[1]}月${e.detail.value[2]}日`,
        datePickerValue: e.detail.value,
        datePickerIsShow: false,
        birth_time: e.detail.value[0] + '-' + num1 + '-' + num2
      });
      wx.setStorageSync('birth_time', this.data.birth_time)
    }
  },
  // 取消时间的按钮
  datePickerOnCancelClick: function (event) {
    this.setData({
      datePickerIsShow: false,
    });
  },
  // 提交
  sureAdd: function (e) {
    let data = {
      boss_id: this.data.user_id,
      // boss_id: '27',
      name: this.data.name,
      sex: this.data.index,
      id_num: this.data.id_num,
      birth_time: this.data.birth_time,
      // birth_time: this.data.birth_time,
      age: this.data.age,
      phone: this.data.phone,
      census_address: this.data.census_address,
      dwell_address: this.data.dwell_address,
      dwell_address_details: this.data.dwell_address_details,
      before_work: this.data.before_work,
      compensation: this.data.compensation,
      expect_work: this.data.unitIndex,
      is_ill: this.data.is_ill,
      ill_details: this.data.ill_details,
      jishu_prove: this.data.jishu_prove
    }
    api.fillInfo(data).then(res => {
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
    let pos = options.q.split("D")[1]
    this.setData({
      user_id: pos
    })
    wx.setStorageSync('user_id', this.data.user_id)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    let that = this
    if (wx.getStorageSync('user_id')) {
      that.setData({
        user_id: wx.getStorageSync('user_id')
      })
    } else {
      that.setData({
        user_id: that.data.user_id
      })
    }
    if (wx.getStorageSync('name')) {
      that.setData({
        name: wx.getStorageSync('name'),
        id_num: wx.getStorageSync('id_num'),
        birth_time: wx.getStorageSync('birth_time'),
        age: wx.getStorageSync('age'),
        phone: wx.getStorageSync('phone'),
        before_work: wx.getStorageSync('before_work'),
        compensation: wx.getStorageSync('compensation'),
        ill_details: wx.getStorageSync('ill_details'),
        is_ill: wx.getStorageSync('is_ill'),
        unitIndex: wx.getStorageSync('unitIndex'),
        dwell_address_details: wx.getStorageSync('dwell_address_details'),
        dwell_address: wx.getStorageSync('dwell_address'),
        dwell_address1: wx.getStorageSync('dwell_address1'),
        dwell_address2: wx.getStorageSync('dwell_address2'),
        dwell_address3: wx.getStorageSync('dwell_address3'),
        census_address1: wx.getStorageSync('census_address1'),
        census_address2: wx.getStorageSync('census_address2'),
        census_address3: wx.getStorageSync('census_address3'),
        census_address: wx.getStorageSync('census_address'),
        qiwang: wx.getStorageSync('qiwang'),
        checkJob: wx.getStorageSync('qiwang'),
        index: wx.getStorageSync('index'),
        workTag: JSON.parse(wx.getStorageSync('workTag')),
        unitIndex: wx.getStorageSync('unitIndex'),
      })
    }
    if (wx.getStorageSync('index')) {
      // 性别选择回显
      for (let i = 0; i < that.data.sex.length; i++) {
        if (that.data.sex[i].value == wx.getStorageSync('index')) {
          that.data.sex[i].checked = true
        }
      }
      that.setData({
        sex: that.data.sex,
      })
    }
    if (wx.getStorageSync('is_ill')) {
      // 有无病史回显
      for (let i = 0; i < that.data.illRadio.length; i++) {
        if (that.data.illRadio[i].value == wx.getStorageSync('is_ill')) {
          that.data.illRadio[i].checked = true
        }
      }
      that.setData({
        illRadio: that.data.illRadio,
      })
      // 是否显示病史内容框
      if (wx.getStorageSync('is_ill') == '1') {
        that.setData({
          showIll: true
        })
      } else {
        that.setData({
          showIll: false
        })
      }
    }
    if (wx.getStorageSync('jishu_prove')) {
      that.setData({
        jishu_prove: JSON.parse(wx.getStorageSync('jishu_prove'))
      })
    }
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