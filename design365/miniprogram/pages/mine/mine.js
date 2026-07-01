// pages/mine —— 我的收藏
const { getFavorites } = require('../../utils/store')
const { getDesignById, daysSince } = require('../../utils/data')

Page({
  data: {
    favorites: [],
    day: 0
  },

  onShow() {
    this.loadFavorites()
  },

  loadFavorites() {
    const app = getApp()
    const ids = getFavorites()
    const favorites = ids.map(getDesignById).filter(Boolean)
    this.setData({
      favorites,
      day: daysSince(app.globalData.launchDate)
    })
  },

  onSelectDesign(e) {
    const { id } = e.detail
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  goGallery() {
    wx.switchTab({ url: '/pages/gallery/gallery' })
  }
})
