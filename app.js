//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'wolf-gytkl'
    })
  },
  globalData: {
    userInfo: null
  }
})