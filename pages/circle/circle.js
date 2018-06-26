
var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:["推荐","娱乐","军事","教育","经济","体育"],
    curTabIdx: 0,
    newsList: [{ id: 0, title: "星月同行是故意额是沙发水电费水电费斯蒂芬森电风扇上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 1, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 2, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 3, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 4, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 5, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 0, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 0, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 0, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  clickTab: function(e){
    this.setData({curTabIdx:e.currentTarget.id});
  },

  itemClick: function(e)
  {
    var id = e.currentTarget.id;
    console.log("点击的id是：",id);
    app.navTo("postDetail");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})