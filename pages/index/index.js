
//引入工具类
var util = require("../../utils/utils.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    errmsg:'正在定位...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var app= getApp();
      var time = setTimeout(() => {
        _this.setData({ city: app.city });
        console.log(1);
        util.getWeatherData(_this.data.city, function (wd) {
          _this.setData({ wd: wd });
        });
      }, 3000)
    console.log(3);
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