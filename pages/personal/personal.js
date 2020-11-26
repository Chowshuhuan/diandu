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
  // 族群
  toFamily:function() {
    wx.navigateTo({
      url: '../family/family'
    })
  },
  // 待办事项
  toMaster:function() {
    wx.navigateTo({
      url: '../matter/matter'
    })
  },
  // 工时
  toWorkHour:function() {
    wx.navigateTo({
      url: '../workHour/workHour'
    })
  },
  // 在职
  toEmploy:function() {
    wx.navigateTo({
      url: '../employ/employ'
    })
  },
  // 离职
  toLeave:function() {
    wx.navigateTo({
      url: '../leave/leave'
    })
  },
  // 入职
  toIntoWork:function() {
    wx.navigateTo({
      url: '../intoWork/intoWork'
    })
  }
})