// pages/home-video/index.js
import {getTopMV} from '../../service/api.video'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMVs:[],
        hasMore:true
    },

    //未封装
    /**
     * 生命周期函数--监听页面加载
     */
    // onLoad: function (options) {
    //     const _this = this
    //     wx.request({
    //       url: 'http://123.207.32.32:9001/top/mv',
    //       data:{
    //         offset:0,
    //         limit:10
    //       },
    //       success: function(res){
    //           console.log(res)
    //           _this.setData({topMVs:res.data.data})
    //       },
    //       fail: function(err){
    //           console.log(err)
    //       }

    //     })
    // },

    /*
    onLoad: function (options) {
        //未封装
        // myRequest.get("/top/mv", { offset:0, limit:10 }).then(res => {
        //     this.setData({topMVs: res.data.data})
        // })

        //封装在service/api.video.js
        getTopMV(0, 15).then(res => {
            this.setData({topMVs: res.data.data})
        })
    },
    */

    //用async await写
    onLoad: async function (options) {
        // 未封装
        // const res = await  getTopMV(0)
        // this.setData({topMVs: res.data.data})
        
        // 封装后
        this.UpdateTopMbData(0)
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
    onPullDownRefresh: async function () {
        // console.log("pulling down!")
        // wx.showNavigationBarLoading()
        // let res = await getTopMV(0)
        // this.setData({
        //     topMVs:res.data.data
        // })
        // wx.hideNavigationBarLoading()

        //封装后
        this.UpdateTopMbData(0)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom:  async function () {
        //console.log("reached bottom!")
        // if(!this.data.hasMore) return
        // const res = await getTopMV(this.data.topMVs.length)
        // this.setData({
        //     topMVs:this.data.topMVs.concat(res.data.data),
        //     hasMore:res.data.hasMore
        // })
        this.UpdateTopMbData(this.data.topMVs.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    UpdateTopMbData: async function (offset) {
        //判断是否可以请求
        if(!this.data.hasMore ) return
        //展示加载动画
        wx.showNavigationBarLoading()
        
        //真正请求数据
        let newData = this.data.topMVs
        const res = await getTopMV(offset)
        if(offset===0){
            newData = res.data.data
        }else{
            newData = newData.concat(res.data.data)
        }
        this.setData({
            topMVs: newData,
            hasMore: res.data.hasMore
        })
        wx.hideNavigationBarLoading()
    },
    handleItemClick: function(event){
        const id = event.currentTarget.dataset.item.id
        console.log(id)
        wx.navigateTo({
          url: '/pages/detail-video/index?id=' + id,
        })
    }
})