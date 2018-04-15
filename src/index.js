import KButton from '../packages/button'

const components = [
  KButton
]

const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  KButton
}

export default [
  install
]
