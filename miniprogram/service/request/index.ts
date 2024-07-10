import { BASE_URL } from './config'

import type { IRequestConfig, IPayload, IResponceData } from './type'
class WLRequest {
  request({ url, data = {}, method }: IRequestConfig, payload: IPayload = {}) {
    const {
      isShowToast400 = true,
      isShowToast401 = true,
      isShowToast403 = true,
      isShowToast500 = true,
      isShowToastErr = true
    } = payload
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        header: {
          'Sunshine-Auth': wx.getStorageSync('token')
        },
        method,
        data,
        success: async (res) => {
          const data = res.data as IResponceData
          if (data.code == 200) {
            resolve(data)
          } else if (data.code == 400) {
            if (isShowToast400) {
              wx.showToast({
                title: data.msg,
                icon: 'none'
              })
            }
            reject(data)
          } else if (data.code == 401) {
            if (isShowToast401) {
              wx.showToast({
                title: '用户未登录',
                icon: 'none'
              })
            }
            // if (autoLoginQuick) {
            //   try {
            //     // 静默登陆 or 告诉外面需要登录
            //     // await app.loginQuick(isShowLoading)
            //     reject('Need Auto Login')
            //   } catch (error) {
            //     reject(error)
            //   }
            // } else {
            //   reject(res)
            // }
            reject(data)
          } else if (data.code == 403) {
            if (isShowToast403) {
              wx.showToast({
                title: '请求过于频繁请稍后再试',
                icon: 'none'
              })
            }
            reject(data)
          } else if (data.code == 500) {
            if (isShowToast500) {
              wx.showToast({
                title: '服务器异常',
                icon: 'none'
              })
            }
            reject(data)
          }
        },
        fail: (err) => {
          if (isShowToastErr) {
            wx.showToast({
              title: '服务器异常',
              icon: 'none'
            })
          }
          reject(err)
        }
      })
    })
  }

  get({ url, data = {}, method = 'GET' }: IRequestConfig, payload: IPayload = {}) {
    return this.request(
      {
        url,
        data,
        method
      },
      payload
    )
  }
  post({ url, data = {}, method = 'POST' }: IRequestConfig, payload: IPayload = {}) {
    return this.request(
      {
        url,
        data,
        method
      },
      payload
    )
  }
}

export default new WLRequest()
