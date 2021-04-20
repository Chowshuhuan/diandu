import Request from "./request.js"
//创建Request对象
let request = new Request();
export default{
          // 用code获取 openid 和session_key
  getOpenid:function (data) {
    return request.$post('/api/Account/getOpenid', data)
  },
  // 获取手机号openid
  getMobileByOpenid:function (data) {
    return request.$post('/api/Account/getMobileByOpenid', data)
  },
    // 获取验证码
    sendsms: function (data) {
      return request.$get('/api/Account/sendSms', data);
    },
    //验证码登录
    login: function (data) {
      return request.$get('/api/Account/login', data);
    },
    // 注册
    register: function (data) {
      return request.$get('/api/Account/register', data);
    },
     // 忘记密码，通过短信修改
     forgetPassword: function (data) {
      return request.$get('/api/Account/forgetPassword', data);
    },
     // 任务列表
     taskList: function (data) {
      return request.$get('/api/Task/list', data);
    },
     // 轮播图列表
     bannerList: function (data) {
      return request.$get('/api/Task/bannerList', data);
    },
    // 查看详情
    taskView: function (data) {
      return request.$post('/api/Task/view', data);
    },
     // 收藏
     collect: function (data) {
      return request.$post('/api/Task/collect', data);
    },
    // 输送人才
    sendStaff: function (data) {
      return request.$post('/api/Task/sendStaff', data);
    },
    // 人才列表
    staffList: function (data) {
      return request.$post('/api/Task/staffList', data);
    },
    // 工种.期望岗位
    workTag: function (data) {
      return request.$post('/api/Staff/workTag', data);
    },
      // 点击输送
      sendStaff: function (data) {
        return request.$post('/api/Task/sendStaff', data);
      },
       // 个人中心
       info: function (data) {
        return request.$post('/api/User/info', data);
      },
      // 待结算金额
      waitPay: function (data) {
        return request.$post('/api/User/waitPaymenMoney', data);
      },
      // 在职人员列表
      onJobList: function (data) {
        return request.$post('/api/User/onJobList', data);
      },
       // 离职人员列表
       leaveJobList: function (data) {
        return request.$post('/api/User/leaveJobList', data);
      },
      // 本月工时
      workHour: function (data) {
        return request.$post('/api/User/workHour', data);
      },
       // 代入职
       waitOnJobList: function (data) {
        return request.$post('/api/User/waitOnJobList', data);
      },
       // 代办事项
       toDo: function (data) {
        return request.$post('/api/User/toDo', data);
      },
       //  族群
       group: function (data) {
        return request.$post('/api/User/group', data);
      },
       // 获取上级所属id
       getBossId: function (data) {
        return request.$post('/api/Enter/getBossId', data);
      },
       // 提交入驻
       create: function (data) {
        return request.$post('/api/Enter/create', data);
      },
      // 通过。驳回入驻申请
      setType: function (data) {
        return request.$post('/api/User/setType', data);
      },
      // 代办详情
      toDoInfo: function (data) {
        return request.$post('/api/User/toDoInfo', data);
      },
      // 期望岗位
      workTag: function (data) {
        return request.$post('/api/Staff/workTag', data);
      },
      // 员工填写信息
      fillInfo: function (data) {
        return request.$post('/api/Staff/fillInfo', data);
      },
      // 文件上传
      upload: function (data) {
        return request.$post('/api/Acount/upload', data);
      },
       // 我的收藏列表
       getCollectList: function (data) {
        return request.$post('/api/User/getCollectList', data);
      },
       // 上传证书
       upload: function (data) {
        return request.$post('/api/Account/upload', data);
      },
      // 绑定手机号
      bindMobile:function(data){
        return request.$post('/api/User/bindMobile', data);
      },
       // 绑定微信号
       bindWeChat:function(data){
        return request.$post('/api/User/bindWeChat', data);
      },
}