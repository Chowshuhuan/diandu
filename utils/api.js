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
       group: function (data) {
        return request.$post('/api/User/group', data);
      },
}