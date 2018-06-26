var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: app.globalData.baseUrl,
    imgUrls:[1,1,1,1,1],
    newsList: [{ id: 0, title: "是故意额是沙发水电费水电费斯蒂芬森电风扇上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 1, title: "星月同行是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 2, title: "是故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }, { id: 3, title: "故意额是沙发上地方", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529581234860&di=95ffab22dfc58840d6e2066a0ecf3905&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%3D600%2C800%2Fsign%3D65ca97f4257f9e2f7060150e2f00c51c%2Fd31b0ef41bd5ad6e198541f883cb39dbb6fd3ca7.jpg" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  clickToSign: function()
  {
    wx.showLoading({
      title: '加载中...',
    })

    var that = this;
    wx.request({
      url: that.data.baseUrl + 'get_indexnav',
      data: {
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        if (res.data.res == 1) {

        }
        else {
          wx.showToast({
            title: res.data.msg,
          })
          console.log("requestSwiperUrl res not 1");
        }
      },
      fail: function (res) {
        wx.hideLoading();
      }
    })
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