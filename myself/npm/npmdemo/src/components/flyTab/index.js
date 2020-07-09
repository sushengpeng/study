import flyTabs from './tab.vue'
import flyTab from './flyTabItem.vue'
const fly = {}
fly.install = function (Vue, options) {
  Vue.component(flyTabs.name, flyTabs) // testPanel.name 组件的name属性
  Vue.component(flyTab.name, flyTab) // testPanel.name 组件的name属性
}
export default fly