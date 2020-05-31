
const db = wx.cloud.database().collection('list')
let name=''
let age = ''
let delId = ''
let updateId = ''
Page({
  addName(event){
    console.log(event.detail.value)
    name = event.detail.value
  },
  addAge(event){
    console.log(event.detail.value)
    age = event.detail.value
  },
  delDataId(event){
    console.log(event.detail.value)
    delId = event.detail.value
  },
  updateDataId(event){
    updateId = event.detail.value
  },
  // 添加数据
  addData(){
    db.add({
      data:{
        name:name,
        age:age
      },
      success(res){
        console.log('添加成功：',res)
      },
      fail(err){
        console.log('添加失败：',err)
      }
    })
  },
  //查询数据
  getData(){
    db.get({
      success(res){
        console.log('查询成功：',res)
      },
      fail(err){
        console.log('查询失败：',err)
      }
    })
  },
  //删除数据
  delData(){
    console.log(delId)
    db.doc(delId).remove({
      success(res) {
        console.log('删除数据成功',res)
      },
      fail(err){
        console.log('删除数据失败',err)
      }
    })
  },
  //update数据
  updateData(){
    db.doc(updateId).update({
      data:{
        name:name
      },
      success(res) {
        console.log('更新数据成功',res)
      },
      fail(err){
        console.log('更新数据失败',err)
      }
    })
  }
})
