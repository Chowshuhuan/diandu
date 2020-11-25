Page({
  data:{

  },
  toInfo:function(){
    wx.navigateTo({
      url: '../perInfo/perInfo'
    })
  },
  toBalance:function() {
    wx.navigateTo({
      url: '../balance/balance'
    })
  },
  toFamily:function() {
    wx.navigateTo({
      url: '../family/family'
    })
  }
})