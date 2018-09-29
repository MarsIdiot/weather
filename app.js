App({
  //创建变量保存纬度
  latitude: 40.137257,

  //创建变量保存经度
  longitude: 116.680165,

  //创建一个变量，保存当前城市信息
  city: '',
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log(111);
    var _this = this;
    //加载获取用户的位置信息
    wx.getLocation({
      success: function (res) {
        // 成功设置经度和纬度
        _this.latitude = res.latitude;
        _this.longitude = res.longitude;
        //根据经纬度获取城市信息，调用baiduAPI
        var bdAPI = "https://api.map.baidu.com/geocoder/v2/?location=" + _this.latitude + "," + _this.longitude + "&output=json&pois=1&ak=FE682f52d5170f3f11d267ec0b9ae2f1";
        console.log(222);

        //发送请求加载地址信息
        wx.request({
          url: bdAPI,
          success: function (res) {
            _this.city = res.data.result.addressComponent.city;
            console.log(333);
          }
        })
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
