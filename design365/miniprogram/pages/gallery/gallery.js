// pages/gallery —— 设计集，支持分类筛选
const { CATEGORIES, getDesignsByCategory } = require('../../utils/data')

Page({
  data: {
    categories: CATEGORIES,
    active: '全部',
    designs: []
  },

  onLoad() {
    this.applyFilter('全部')
  },

  onSelectCategory(e) {
    const category = e.currentTarget.dataset.cat
    this.applyFilter(category)
  },

  applyFilter(category) {
    this.setData({
      active: category,
      designs: getDesignsByCategory(category)
    })
  },

  onSelectDesign(e) {
    const { id } = e.detail
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  }
})
