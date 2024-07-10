export interface IRequestConfig {
  url: string
  data?: any
  method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
}

export interface IPayload {
  isShowToast400?: boolean
  isShowToast401?: boolean
  isShowToast403?: boolean
  isShowToast500?: boolean
  isShowToastErr?: boolean
  autoLoginQuick?: boolean
}

export interface IResponceData {
  code: number
  data: any
  msg: string
  success: boolean
}
