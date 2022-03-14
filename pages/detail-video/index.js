// pages/detail-video/index.js
import {getMvUrl, getMvDetail, getRelatedMv} from "../../service/api.video"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvURLInfo:{},
        mvDetail:{},
        relatedVideo:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const id = options.id
        console.log("options.id", id)

        //获取页面数据
        this.getPageDate(id)
       

    },

    getPageDate: function(id) {
        //请求播放地址
        getMvUrl(id).then(res => {
            this.setData({mvURLInfo:res.data.data})
        })
        // console.log(res1)
        //请求视频信息
        getMvDetail(id).then(res => {
            this.setData({mvDetail: res.data.data})
        })
        // console.log(res2)
        //请求相关视频
        getRelatedMv(id).then(res => {
            this.setData({relatedVideo: res.data.data})
        })
        // console.log(res3)
    }
})