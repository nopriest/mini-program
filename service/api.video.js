import myRequest from './index'
export function getTopMV(offset, limit=10){
    return myRequest.get("/top/mv", {offset:offset, limit: limit})
}

/**
 * 请求MV的播放地址
 * @param {number} id MV的id
 */
export function getMvUrl(id) {
    return myRequest.get("/mv/url", {
        id
    })
}

/**
 * 请求MV的详情
 * @param {number} mvid MV的id
 */
export function getMvDetail(mvid) {
    return myRequest.get("/mv/detail", {
        mvid
    })
}

/**
 * 请求相关Mv
 * @param {number} id MV的id 
 */
export function getRelatedMv(id) {
    return myRequest.get("/related/allVideo", {
        id
    })
}