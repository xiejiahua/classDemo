var app = getApp();

var countDown = 60;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnWord:"60秒",
    phoneNum:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone = options.phone;
    this.setData({ phoneNum:phone});
    this.startCountDown();
  },

  startCountDown: function () {
    var that = this;
    countDown = 60;
    var interval = setInterval(function () {
      countDown -= 1;
      that.setData({ btnWord: countDown+"秒" });
      if (countDown == 0) {
        that.setData({ btnWord: "" });
        clearInterval(interval);
      }
    }, 1000)
  },

  clickToResend: function(){
    if(countDown <= 0)
    {
      this.startCountDown();
    }
    else{
      return;
    }
  },

  clickToNext: function(){
    console.log("clickToNext");
    wx.switchTab({
      url: '../home/home',
    });
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