// pages/shenqing/shenqing.js
// pages/settled/settled.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    showCheck: false,
    showId: false,
    items: [{
        name: '城市合伙人',
        value: '1'
      },
      {
        name: '县级合伙人',
        value: '2'
      },
      {
        name: '乡镇合伙人',
        value: '3'
      },
    ],
    showDialog: false,
    name: '', //合伙人名称
    name1: '', //合伙人名称
    showHehuo: false, //显示所属上级
    region: [],
    areaTxt: '',
    enter_xiang: '',
    idType: '', //申请身份的类型 1 2 
    bossName: '', //所属上级的名字
    bossId: '', //所属上级类型合伙人
    bossIdName: '', //根据不同类型合伙人显示
    showBossName: false, //选择后显示boss名字
    showXiang: false,
    mingzi: '', //个人信息 名字
    region1: [],
    // 提交上传的数据
    shenfen: '', //申请的申请
    boss_id: '', //所属上级id
    enter_sheng: '请选择', //省份
    enter_shi: '', //市
    enter_xian: '', //县级
    enter_xiang: '', //乡镇
    enter_address_details: '', //详细地址
    name: '', //姓名
    sex: '', //性别
    birth_time: '请选择', //出生年月
    id_num: '', //身份证号
    phone: '', //联系电话
    census_address: [], //户籍详细地址
    census_address_details: '', //户籍详细地址
    region1: '请选择所在地区',
    region2: '',
    region3: '',
    bossMingzi: '',
    bossShenfen: '', //选择申请的身份
    showBossMing:false,//显示boss名字
  },
  // 选择性别
  radioChange1: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  // 选择出生年月日
  changeDate: function (e) {
    this.setData({
      birth_time: e.detail.value
    })
  },
  // 点击申请身份选择
  showCheck: function (e) {
    this.setData({
      showCheck: this.data.showCheck ? false : true,
    })
  },
  // 选择户籍所在地
  bindRegionChange1: function (e) {
    if (e.detail.value[0] == e.detail.value[1]) {
      this.setData({
        region1: e.detail.value[0],
        region2: e.detail.value[2],
      })
    } else {
      this.setData({
        region1: e.detail.value[0],
        region2: e.detail.value[1],
        region3: e.detail.value[2],
      })
    }
    this.setData({
      census_address: e.detail.value,
    })
  },
  /*点击变色*/
  click: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id
    })
  },
  // 选择合伙人
  radioChange: function (e) {
    switch (e.detail.value) {
      case '城市合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '1'
        })
        break;
      case '县级合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '2'
        })
        break;
      case '乡镇合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '3'
        })
        break;
    }
    this.setData({
      value: e.detail.value,
      name1: e.detail.value
    })
  },
  // 显示合伙人框
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  // 确定选择合伙人
  sureCheck: function (e) {
    this.setData({
      name: this.data.name1,
      showDialog: !this.data.showDialog,
    })
    if (this.data.name == '县级合伙人') {
      this.setData({
        showHehuo: true,
        hehuoren: '乡镇合伙人',
        idType: '2',
        showXiang: false,
        bossId: '2',
        bossIdName: '城市合伙人',
        bossShenfen:'2'
      })
    } else if (this.data.name == '乡镇合伙人') {
      this.setData({
        showHehuo: true,
        hehuoren: '城市合伙人',
        idType: '3',
        showXiang: true,
        bossId: '3',
        bossIdName: '县级合伙人',
        bossShenfen:'3'
      })
    } else {
      this.setData({
        showHehuo: false,
        showXiang: false,
        bossId: '',
        idType: '1',
        bossShenfen:''
      })
    }
    if (this.data.enter_sheng !== '请选择' || '') {
      let data = {
        Authorization: wx.getStorageSync('token'),
        shenfen: this.data.bossShenfen,
        enter_sheng: this.data.enter_sheng,
        enter_shi: this.data.enter_shi,
        enter_xian: this.data.enter_xian,
      }
      api.getBossId(data).then(res => {
        if (res.data.code == 200) {
          if (res.data.data.length == 0) {
            this.setData({
              bossMingzi: '管理员',
              bossIdName: '',
              showBossName: false,
              showBossMing:true,
            })
          } else {
            switch (res.data.data.shenfen) {
              case '1':
                this.setData({
                  bassId: '城市合伙人'
                })
                break;
              case '2':
                this.setData({
                  bassId: '县级合伙人'
                })
                break;
              case '3':
                this.setData({
                  bassId: '乡镇合伙人'
                })
                break;
            }
            if(res.data.data[0].id){
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossName: true,
                showBossMing:true,
                boss_id: res.data.data[0].id
              })
            }else{
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossMing:true,
                showBossName: false,
                boss_id: ''
              })
            }
            // this.setData({
            //   bossMingzi: res.data.data[0].name,
            //   showBossName: true,
            //   boss_id: res.data.data[0].id
            // })
          }
        } else {
           console.log(res.data.msg)
        }
      })
    } else {
      console.log('无')
    }
  },
  // 取消选择合伙人
  cancelCheck: function () {
    var that = this
    if (that.data.name != '') {
      that.setData({
        name: that.data.name
      })
    }
    that.setData({
      showDialog: !this.data.showDialog,
      value: 'show',
      checked: false,
    })
  },
  // 选择城市
  bindRegionChange: function (e) {
    let that = this
    if (e.detail.value[0] == e.detail.value[1]) {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: '',
        enter_shi: e.detail.value[1],
        enter_xian: e.detail.value[2],
      })
    } else {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: e.detail.value[1],
        enter_shi: e.detail.value[1],
        enter_xian: e.detail.value[2],
      })
    }
    if (that.data.enter_sheng) {
      let data = {
        Authorization: wx.getStorageSync('token'),
        shenfen: that.data.idType,
        enter_sheng: that.data.enter_sheng,
        enter_shi: that.data.enter_shi,
        enter_xian: that.data.enter_xian,
      }
      api.getBossId(data).then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data.length)
          if(res.data.data.length == 0) {
            that.setData({
              bossMingzi: '管理员',
              bossIdName: '',
              showBossName: false,
              showBossMing:true,
            })
            console.log('无所属上级')
          }else{
            switch (res.data.data.shenfen) {
              case '1':
                that.setData({
                  bassId: '城市合伙人'
                })
                break;
              case '2':
                that.setData({
                  bassId: '县级合伙人'
                })
                break;
              case '3':
                that.setData({
                  bassId: '乡镇合伙人'
                })
                break;
            }
            if(res.data.data[0].id){
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossName: true,
                showBossMing:true,
                boss_id: res.data.data[0].id
              })
            }else{
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossMing:true,
                showBossName: false,
                boss_id: ''
              })
            }
          }
        } else {
         console.log(res.data.msg)
        }
      })
    } else {
      console.log('无')
    }
  },
  // 申请区域乡镇
  blurChange1: function (e) {
    this.setData({
      enter_xiang: e.detail.value
    })
  },
  // 申请区域详细地址
  bindTextAreaBlur: function (e) {
    this.setData({
      enter_address_details: e.detail.value
    })
  },
  // 申请姓名
  blurChange2: function (e) {
    this.setData({
      mingzi: e.detail.value
    })
  },
  // 身份证
  blurChange3: function (e) {
    this.setData({
      id_num: e.detail.value
    })
  },
  // 电话
  blurChange4: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 户籍区域详细地址
  bindTextAreaBlur1: function (e) {
    this.setData({
      census_address_details: e.detail.value
    })
  },
  // 提交全部资料
  tijiaoInfo: function (e) {
    let data = {
      shenfen: this.data.idType,
      enter_sheng: this.data.enter_sheng,
      enter_shi: this.data.enter_shi,
      enter_xian: this.data.enter_xian,
      enter_xiang:this.data.enter_xiang,
      enter_address_details: this.data. enter_address_details,
      boss_id: this.data.bossShenfen,
      name: this.data.mingzi,
      sex: this.data.sex,
      birth_time: this.data.birth_time,
      id_num: this.data.id_num,
      phone: this.data.phone,
      census_address: this.data.census_address,
      census_address_details: this.data.census_address_details,
      Authorization: wx.getStorageSync('token')
    }
    api.create(data).then(res => {
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
  // 提交全部资料
  // tijiaoInfo: function (e) {
  //   let data = {
  //     shenfen: this.data.idType,
  //     enter_sheng: this.data.enter_sheng,
  //     enter_shi: this.data.enter_shi,
  //     enter_xian: this.data.enter_xian,
  //     enter_xiang: this.data.enter_xiang,
  //     enter_address_details: this.data.enter_xiang,
  //     boss_id: this.data.boss_id,
  //     name: this.data.mingzi,
  //     sex: this.data.sex,
  //     birth_time: this.data.birth_time,
  //     id_num: this.data.id_num,
  //     phone: this.data.phone,
  //     census_address: this.data.census_address,
  //     census_address_details: this.data.census_address_details,
  //     Authorization: wx.getStorageSync('token')
  //   }
  //   api.create(data).then(res => {
  //     if (res.data.code == 200) {
  //       wx.showToast({
  //         title: res.data.msg,
  //         icon: 'none',
  //         duration: 1000
  //       })
  //     } else {
  //       wx.showToast({
  //         title: res.data.msg,
  //         icon: 'none',
  //         duration: 1000
  //       })
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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