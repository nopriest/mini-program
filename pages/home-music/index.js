// pages/home-music/index.js
import {getBanners} from '../../service/api.music'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取页面数据
        this.getPageData()
    },

    //网络请求
    getPageData: function(){
        getBanners().then(res => {
            console.log(res)
            this.setData({banners:res.data.banners})
        })
    },

    //点击搜索框
    handleSearchClick :function(){
        console.log("搜索框clicked!")
        wx.navigateTo({
            url:"/pages/detail-search/index"
        })
    }
})