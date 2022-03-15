// pages/home-music/index.js
import {getBanners} from '../../service/api.music'
import queryRect from '../../service/query.rect'
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect, 1000)

Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners:[],
        swiper_height: 0,  //如何去获取一张网络图片的高度 我们下载轮播图图片的过程是：1.请求轮播图数据 2.image src="url字符串" 3.图片加载完成
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
    },
    //轮播图加载完计算图片高度
    handleSwiperImageLoaded: function() {
        //获取图片高度(如何获取image组件的高度)
        throttleQueryRect(".swiper-image").then(res => {
           console.log("获取图片高度")
           const rect = res[0]
           this.setData({swiper_height:rect.height})
       })
    },
})