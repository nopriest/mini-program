
//const BASE_URL = "http://123.207.32.32:9001"
const BASE_URL = "http://123.207.32.32:9001"
class MyRequest{
    request(url, method, params){
        // wx.request({
        //   url: url,
        //   method: method,
        //   data: params,
        //   success: function(res) {

        //   },
        //   fail: function(err) {

        //   }
        // })
        return new Promise((resolve, reject) => {
            wx.request({
                url: BASE_URL+url,
                method: method,
                data: params,
                success (res)  {
                    resolve(res)
                },
                // fail: function(err) {
                //     reject(err)
                // }
                fail: reject
            })
        })
    }
    get(url, params){
        return this.request(url, "GET", params)
    }
    post(url, data){
        return this.request(url, "POST", data)
    }
}
const myRequest = new MyRequest()
export default myRequest