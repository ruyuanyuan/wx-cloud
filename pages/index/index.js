Page({
  data:{
    imgUrl:""
  },
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
  },
  uploadEvent(){
    wx.chooseImage({
      success: chooseResult => {
        console.log(chooseResult)
        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: new Date().getTime()+'.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)
            this.setData({
              imgUrl:res.fileID
            })
          },
        })
      },
    })
  },
  uploadvideo(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
  }
})
