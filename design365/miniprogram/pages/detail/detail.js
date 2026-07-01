// pages/detail —— 设计详情
const { getDesignById, toGradient } = require('../../utils/data')
const { isFavorite, toggleFavorite } = require('../../utils/store')

Page({
  data: {
    design: null,
    gradient: '',
    favorited: false
  },

  onLoad(query) {
    const design = getDesignById(query.id)
    if (!design) {
      wx.showToast({ title: '设计不存在', icon: 'none' })
      return
    }
    this.setData({
      design,
      gradient: toGradient(design.palette),
      favorited: isFavorite(design.id)
    })
    wx.setNavigationBarTitle({ title: design.title })
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

  copyColor(e) {
    const color = e.currentTarget.dataset.color
    wx.setClipboardData({
      data: color,
      success: () => wx.showToast({ title: `${color} 已复制`, icon: 'none' })
    })
  }
})
