// pages/home-music/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //点击搜索框
    handleSearchClick :function(){
        console.log("搜索框clicked!")
        wx.navigateTo({
            url:"/pages/detail-search/index"
        })
    }
})