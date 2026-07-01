// components/design-card —— 设计卡片，用于设计集与收藏列表
const { toGradient } = require('../../utils/data')

Component({
  properties: {
    design: {
      type: Object,
      value: null
    }
  },
  data: {
    gradient: ''
  },
  observers: {
    design(design) {
      if (design && design.palette) {
        this.setData({ gradient: toGradient(design.palette) })
      }
    }
  },
  methods: {
    onTap() {
      const { design } = this.data
      if (!design) return
      // 冒泡给父页面处理跳转，组件本身不关心路由
      this.triggerEvent('select', { id: design.id })
    }
  }
})
