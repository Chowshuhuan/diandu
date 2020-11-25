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
  }
}