// utils/store.js —— 收藏的本地持久化（wx.storage）
const FAV_KEY = 'design365:favorites'

function getFavorites() {
  try {
    return wx.getStorageSync(FAV_KEY) || []
  } catch (e) {
    return []
  }
}

function isFavorite(id) {
  return getFavorites().indexOf(id) !== -1
}

function setFavorites(ids) {
  try {
    wx.setStorageSync(FAV_KEY, ids)
  } catch (e) {
    // 存储失败时静默降级，不阻断交互
  }
  // 同步到全局，供其他页面读取
  const app = getApp()
  if (app && app.globalData) {
    app.globalData.favorites = ids
  }
  return ids
}

/**
 * 切换收藏状态，返回切换后的结果。
 * @returns {{ favorited: boolean, favorites: string[] }}
 */
function toggleFavorite(id) {
  const list = getFavorites()
  const idx = list.indexOf(id)
  if (idx === -1) {
    list.push(id)
    setFavorites(list)
    return { favorited: true, favorites: list }
  }
  list.splice(idx, 1)
  setFavorites(list)
  return { favorited: false, favorites: list }
}

module.exports = {
  getFavorites,
  isFavorite,
  setFavorites,
  toggleFavorite
}
