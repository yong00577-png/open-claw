// utils/data.js —— 每日设计数据源（scaffold 阶段使用本地 mock 数据）
// 每个设计用一组渐变色作为“作品视觉”，避免依赖网络图片，离线也能预览。

const DESIGNS = [
  {
    id: 'd001',
    title: '晨雾渐层',
    author: 'Aki',
    category: '渐变',
    palette: ['#a29bfe', '#6c5ce7', '#341f97'],
    desc: '以紫罗兰为主调的柔和渐层，灵感来自清晨山间的薄雾。适合登录页与品牌氛围背景。',
    tags: ['紫色', '柔和', '背景']
  },
  {
    id: 'd002',
    title: '珊瑚日落',
    author: 'Mika',
    category: '渐变',
    palette: ['#ff9a9e', '#fad0c4', '#fbc2eb'],
    desc: '暖色珊瑚过渡到粉调，营造亲和、温暖的情绪，常用于生活方式类产品。',
    tags: ['暖色', '粉调', '情绪']
  },
  {
    id: 'd003',
    title: '薄荷气泡',
    author: 'Leo',
    category: '配色',
    palette: ['#43e97b', '#38f9d7'],
    desc: '清新的薄荷绿到青绿渐变，传达健康与活力，适合健身、健康类应用。',
    tags: ['绿色', '清新', '活力']
  },
  {
    id: 'd004',
    title: '午夜霓虹',
    author: 'Nova',
    category: '深色',
    palette: ['#0f2027', '#203a43', '#2c5364'],
    desc: '深邃的午夜蓝黑，搭配霓虹点缀，塑造科技与高级感的暗色主题。',
    tags: ['深色', '科技', '高级']
  },
  {
    id: 'd005',
    title: '柑橘能量',
    author: 'Sora',
    category: '配色',
    palette: ['#f6d365', '#fda085'],
    desc: '明亮的柑橘黄到暖橙，充满能量与食欲感，适合餐饮与促销场景。',
    tags: ['橙色', '明亮', '食欲']
  },
  {
    id: 'd006',
    title: '深海潜行',
    author: 'Kai',
    category: '渐变',
    palette: ['#4facfe', '#00f2fe'],
    desc: '天蓝到青蓝的清澈过渡，像潜入海面下的宁静，适合金融与工具类界面。',
    tags: ['蓝色', '清澈', '专业']
  },
  {
    id: 'd007',
    title: '樱花信笺',
    author: 'Yui',
    category: '配色',
    palette: ['#ffecd2', '#fcb69f'],
    desc: '奶油色到蜜桃粉的低饱和搭配，柔软而治愈，常见于内容社区与阅读产品。',
    tags: ['奶油', '治愈', '阅读']
  },
  {
    id: 'd008',
    title: '极光边界',
    author: 'Rin',
    category: '渐变',
    palette: ['#00c6ff', '#0072ff'],
    desc: '强烈的蓝色对比，视觉张力足，适合按钮、强调色与运动品牌。',
    tags: ['蓝色', '张力', '强调']
  },
  {
    id: 'd009',
    title: '莓果慕斯',
    author: 'Aya',
    category: '配色',
    palette: ['#ee9ca7', '#ffdde1'],
    desc: '莓红到浅粉的甜美渐层，柔和不刺眼，适合美妆与女性向产品。',
    tags: ['粉色', '甜美', '美妆']
  },
  {
    id: 'd010',
    title: '苔原黎明',
    author: 'Tom',
    category: '深色',
    palette: ['#232526', '#414345'],
    desc: '中性的炭灰渐变，克制而耐看，是通用型深色界面的安全选择。',
    tags: ['灰色', '中性', '通用']
  },
  {
    id: 'd011',
    title: '柠檬苏打',
    author: 'Momo',
    category: '配色',
    palette: ['#d4fc79', '#96e6a1'],
    desc: '嫩黄到草绿的轻盈组合，清爽有夏日气息，适合饮品与轻食品牌。',
    tags: ['黄绿', '清爽', '夏日']
  },
  {
    id: 'd012',
    title: '紫棠余晖',
    author: 'Iris',
    category: '渐变',
    palette: ['#c471f5', '#fa71cd'],
    desc: '紫到品红的高饱和渐变，前卫且富有创意，适合潮流与娱乐类产品。',
    tags: ['紫红', '前卫', '潮流']
  }
]

// 分类列表（用于设计集筛选）
const CATEGORIES = ['全部', '渐变', '配色', '深色']

/**
 * 计算从起始日到今天经过的天数（从 1 开始），用于“第 N 天 / 365”。
 * @param {string} launchDate 形如 '2024-01-01'
 */
function daysSince(launchDate) {
  const start = new Date(launchDate + 'T00:00:00')
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diff = Math.floor((today - start) / (24 * 60 * 60 * 1000))
  return diff + 1 // 第一天记为 Day 1
}

/**
 * 返回“今日设计”。用天数对数据长度取模，保证每天稳定切换且循环复用。
 */
function getTodayDesign(launchDate) {
  const day = daysSince(launchDate)
  const index = ((day - 1) % DESIGNS.length + DESIGNS.length) % DESIGNS.length
  return { day, design: DESIGNS[index] }
}

function getAllDesigns() {
  return DESIGNS.slice()
}

function getDesignsByCategory(category) {
  if (!category || category === '全部') return getAllDesigns()
  return DESIGNS.filter((d) => d.category === category)
}

function getDesignById(id) {
  return DESIGNS.find((d) => d.id === id) || null
}

// 把一组颜色拼成 CSS 线性渐变，供 wxss 内联 background 使用
function toGradient(palette) {
  return `linear-gradient(135deg, ${palette.join(', ')})`
}

module.exports = {
  CATEGORIES,
  daysSince,
  getTodayDesign,
  getAllDesigns,
  getDesignsByCategory,
  getDesignById,
  toGradient
}
