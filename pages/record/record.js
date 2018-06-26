// pages/record/record.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var getList = wx.getStorageSync("list_key");
    if(getList!=undefined && getList!="")
    {
      this.setData({ recordList: getList });
    }

  },

  clickToScan: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res);
        that.pushRecord("2018.6.23|项目经营会议");
         that.doStorage();
      }

    })
  },

  pushRecord: function (rd) {
    var strArray = new Array();
    strArray = rd.split('|');
    var content = app.globalData.userInfo.nickName + "   " + strArray[0] + "   " + strArray[1] + "   已签到";

    var listObj = new Object();
    listObj.type = 0;
    listObj.text = content;
    this.data.recordList.push(listObj);
    this.setData({ recordList: this.data.recordList });
  },

  clickToPic: function () {

    var that = this;
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        var listObj = new Object();
        listObj.type = 1;
        listObj.imgs = tempFilePaths;
        that.data.recordList.push(listObj);
        that.setData({ recordList: that.data.recordList });

      }
    })
  },

  clickToPreview: function (e) {
    var url = e.currentTarget.dataset.url;
    var urlList = new Array();
    urlList.push(url);

    wx.previewImage({
      urls: urlList // 需要预览的图片http链接列表
    })
  },

  doStorage: function () {
    wx.setStorageSync("list_key", this.data.recordList);
  },

  clickToDetail: function(){
    app.navTo("detail");
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