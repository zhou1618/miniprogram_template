let BASE_URL = ''
const TIME_OUT = 60000

// 获取小程序信息
const accountInfo = wx.getAccountInfoSync()
console.log(accountInfo.miniProgram.envVersion)

if (accountInfo.miniProgram.envVersion === 'develop') {
  BASE_URL = ''
} else if (accountInfo.miniProgram.envVersion === 'trial') {
  BASE_URL = ''
} else if (accountInfo.miniProgram.envVersion === 'release') {
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }
