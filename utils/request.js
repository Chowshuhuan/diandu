const postUrl = "https://diandu.bonnidee.cn"
// const postUrl = "http://192.168.10.48:8082"

export default class Request {
  $get(paramete, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${postUrl}${paramete}`,
        data: data,
        method: 'GET',
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          resolve(0);
        }
      })
    });
  };
  $post(paramete, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${postUrl}${paramete}`,
        data: data,
        method: 'POST',
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          resolve(0);
        }
      })
    });
  };
  $fromData(paramete, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${postUrl}${paramete}`,
        data: data,
        method: 'POST',
        dataType: 'json',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          resolve(0);
        }
      })
    });
  };
}