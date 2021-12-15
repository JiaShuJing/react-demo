import http from "./http"

/**
 * 获取供应商列表
 */
function getMerchantList() {
  return new Promise((resolve, reject) => {
    http("get", "/merchantList").then(
      (res) => {
        resolve(res)
      },
      (error) => {
        console.log("网络异常~", error)
        reject(error)
      }
    )
  })
}

/**
 * 新增供应商
 */
//@ts-ignore
function addMerchant(params) {
  return new Promise((resolve, reject) => {
    http("post", "/addMerchant", params).then(
      (res) => {
        resolve(res)
      },
      (error) => {
        console.log("网络异常~", error)
        reject(error)
      }
    )
  })
}

/**
 * 获取商品默认属性信息
 */
function getDefaultGoodsProperty() {
  return new Promise((resolve, reject) => {
    http("get", "/defaultGoodsProperty").then(
      (res) => {
        resolve(res)
      },
      (error) => {
        console.log("网络异常~", error)
        reject(error)
      }
    )
  })
}

export { getMerchantList, addMerchant, getDefaultGoodsProperty }
