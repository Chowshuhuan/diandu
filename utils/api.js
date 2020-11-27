import Request from "./request.js"
//创建Request对象
let request = new Request();
export default{
  // 获取Openid
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
      return request.$get('/api/Task/view', data);
    },
}