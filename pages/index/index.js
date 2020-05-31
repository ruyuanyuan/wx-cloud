Page({
  sumNumber(){
    wx.cloud.callFunction({
      name: 'add',
      data: {
        a: 12,
        b: 19
      },
      success(res){
        console.log('请求成功',res)
      },
      fail(err){
        console.log('请求失败',err)
      }
    })
  },
  getopenid(){
    wx.cloud.callFunction(
      {
        name:'getopenid',
        success(res){
          console.log('获取openid成功',res.result.openid)
        },
        fail(err){
          console.log('获取openid失败',res)
        }
      }
    )
  }
})
