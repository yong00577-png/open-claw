// app.js —— 小程序入口
const { getFavorites } = require('./utils/store')

App({
  globalData: {
    // 每日设计的“起始日”，用于计算今天是第几天
    launchDate: '2024-01-01',
    favorites: []
  },

  onLaunch() {
    // 启动时把本地收藏读进内存，页面可直接使用 globalData.favorites
    this.globalData.favorites = getFavorites()
  }
})
