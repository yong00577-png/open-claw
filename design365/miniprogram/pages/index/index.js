// pages/index —— 今日设计
const { getTodayDesign, toGradient } = require('../../utils/data')
const { isFavorite, toggleFavorite } = require('../../utils/store')

Page({
  data: {
    day: 0,
    design: null,
    gradient: '',
    favorited: false
  },

  onLoad() {
    this.loadToday()
  },

  onShow() {
    // 从详情页返回时刷新收藏态
    if (this.data.design) {
      this.setData({ favorited: isFavorite(this.data.design.id) })
    }
  },

  loadToday() {
    const app = getApp()
    const { day, design } = getTodayDesign(app.globalData.launchDate)
    this.setData({
      day,
      design,
      gradient: toGradient(design.palette),
      favorited: isFavorite(design.id)
    })
  },

  onToggleFav() {
    const { favorited } = toggleFavorite(this.data.design.id)
    this.setData({ favorited })
    wx.showToast({
      title: favorited ? '已收藏' : '已取消',
      icon: 'none',
      duration: 800
    })
  },

  goDetail() {
    wx.navigateTo({ url: `/pages/detail/detail?id=${this.data.design.id}` })
  },

  goGallery() {
    wx.switchTab({ url: '/pages/gallery/gallery' })
  }
})
