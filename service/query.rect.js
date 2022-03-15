export default function queryRect(selector) {
    return new Promise((resolve)=>{
        const query = wx.createSelectorQuery()
        query.select(selector).boundingClientRect()
        //query.selectViewport().scrollOffset()   //滚动相关的数据
        
        //query.exec(resolv) //简写
        query.exec(res => {
           resolve(res)
        })
    })
   
}