// pages/addImg/addImg.js
let app = getApp()
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    array: [0], //默认显示一个
    inputVal: [], //所有input的内容
    imageVal: [], //所有图片的内容
    imgIndex: '',
    pathVal: [], //上传的图片地址
    pathdex: '', //上传的图片的下标
    val: '',
    inputIndex: 0,
    imgShow: false,
    Loadingtime: '', //定时器变量
    jishu_prove: [], //添加的图片列表
    jishu_proveSave: [], //本地已保存的图片列表
  },
  // 填写技能名称
  getInputVal: function (e) {
    this.data.inputVal.push(e.detail.value)
    this.setData({
      val: e.detail.value
    })
  },
  // 添加图片
  addImage: function (e) {
    var that = this;
    if (that.data.inputVal) {
      that.data.inputVal.forEach((v, i) => {
        if (that.data.inputVal[e.currentTarget.dataset.idx]) {
          that.setData({
            val: that.data.inputVal[e.currentTarget.dataset.idx]
          })
        } else {
          that.setData({
            val: ''
          })
        }
      })
    }
    that.setData({
      num: e.currentTarget.dataset.num,
      imgIndex: e.currentTarget.dataset.idx
    })
    if (!that.data.val) {
      wx.showToast({
        title: '请填写技能名称',
        icon: 'none',
        duration: 1000
      })
      return
    }
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#4350B6",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseimage('album')
          } else if (res.tapIndex == 1) {
            that.chooseimage('camera')
          }
        }
      }
    })
  },
  // 上传
  chooseimage: function (type) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [type], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        if (res.errMsg == 'chooseImage:ok') {
          wx.uploadFile({
            url: 'https://diandu.bonnidee.cn/api/Account/upload',
            filePath: res.tempFilePaths[0],
            name: 'file',
            success(res) {
              var oldVal = that.data.imageVal;
              var oldVal1 = that.data.pathVal;
              var nowIdx = that.data.imgIndex
              oldVal[nowIdx] = JSON.parse(res.data).data.complete_file_path //修改对应索引值的内容
              oldVal1[nowIdx] = JSON.parse(res.data).data.file_path //修改对应索引值的内容
              that.setData({
                imageVal: oldVal,
                pathVal: oldVal1,
                imgShow: true,
                val: ''
              })
              let arr = []
              let arr1 = []
              let arr2 = []
              that.data.inputVal.forEach((v, i) => {
                let obj = {}
                obj.name = v
                arr.push(obj)
              })
              that.data.pathVal.forEach((v, i) => {
                let obj = {}
                obj.path = v
                arr1.push(obj)
              })
              that.data.imageVal.forEach((v, i) => {
                let obj = {}
                obj.logo = v
                arr2.push(obj)
              })
              let arr3 = arr.map((item, index) => {
                return {
                  ...item,
                  ...arr1[index],
                  ...arr2[index]
                }
              })
              that.setData({
                jishu_prove: arr3,
              })
              if (wx.getStorageSync('jishu_prove')) {
                that.data.jishu_proveSave.push(...that.data.jishu_prove)
              }
              console.log(that.data.jishu_prove)
              console.log(that.data.jishu_proveSave)
              if (that.data.imageVal[nowIdx - 1] == undefined && that.data.imageVal[nowIdx] && (that.data.imageVal[nowIdx + 1] || that.data.imageVal[nowIdx + 2] || that.data.imageVal[nowIdx + 3] || that.data.imageVal[nowIdx + 4] || that.data.imageVal[nowIdx + 5] || that.data.imageVal[nowIdx + 6] || that.data.imageVal[nowIdx + 7] || that.data.imageVal[nowIdx + 8] || that.data.imageVal[nowIdx + 9]) == undefined) {
                var old = that.data.array;
                old.push(1); //这里不管push什么，只要数组长度增加1就行
                that.setData({
                  array: old
                })
              }
              if (that.data.imageVal[nowIdx - 1] && that.data.imageVal[nowIdx] && (that.data.imageVal[nowIdx + 1] || that.data.imageVal[nowIdx + 2] || that.data.imageVal[nowIdx + 3] || that.data.imageVal[nowIdx + 4] || that.data.imageVal[nowIdx + 5] || that.data.imageVal[nowIdx + 6] || that.data.imageVal[nowIdx + 7] || that.data.imageVal[nowIdx + 8] || that.data.imageVal[nowIdx + 9]) == undefined) {
                var old = that.data.array;
                old.push(1); //这里不管push什么，只要数组长度增加1就行
                that.setData({
                  array: old
                })
              }
            }
          })
        } else {
          wx.showToast({
            title: res.errMsg,
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },
  // 删除图片
  delImage(e) {
    if (this.data.jishu_prove) {
      for (let i = 0; i < this.data.jishu_prove.length; i++) {
        if (i == e.currentTarget.dataset.idx) {
          this.data.jishu_prove.splice(i, 1)
        }
      }
    }
    var nowidx = e.currentTarget.dataset.idx; //当前索引
    var oldInputVal = this.data.inputVal; //所有的input值
    var oldImageVal = this.data.imageVal; //所有的input值
    var oldarr = this.data.array; //循环内容
    // console.log(e.currentTarget.dataset.idx)
    oldarr.splice(nowidx, 1); //删除当前索引的内容，这样就能删除view了
    oldInputVal.splice(nowidx, 1); //view删除了对应的input值也要删掉
    oldImageVal.splice(nowidx, 1); //view删除了对应的input值也要删掉
    if (oldarr.length < 1) {
      oldarr = [0] //如果循环内容长度为0即删完了，必须要留一个默认的。这里oldarr只要是数组并且长度为1，里面的值随便是什么
    }
    this.setData({
      array: oldarr,
      inputVal: oldInputVal,
      imageVal: oldImageVal,
    })
  },
  //保存
  saveImg() {
    if(wx.getStorageSync('jishu_prove')){
      wx.setStorageSync('jishu_prove', JSON.stringify(this.data.jishu_proveSave))
    }else{
      wx.setStorageSync('jishu_prove', JSON.stringify(this.data.jishu_prove))
    }
    wx.showToast({
      title: '保存成功,两秒后跳转至技术证书页面',
      icon: 'none',
      duration: 1500
    })
    this.setData({
      // 定时三秒跳转对比页面
      Loadingtime: setInterval(function () {
        // 跳转页面
        wx.navigateTo({
          url: '../zhengShu/zhengShu',
        })
      }, 2000)
    })
  },
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
    if (wx.getStorageSync('jishu_prove')) {
      this.setData({
        jishu_proveSave: JSON.parse(wx.getStorageSync('jishu_prove'))
      })
    }
    console.log(this.data.jishu_proveSave)
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