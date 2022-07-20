// 界面布局
export enum layout {
    classic = 'classic', // 经典模式
    tradition = 'tradition', // 传统模式
    pageFullScreen = 'pageFullScreen', // 页面全屏
    horizontal = 'horizontal' // 横向
}
// 默认 primary 主题颜色
export enum primary {
    value = '#42b983'
}
// 开启暗黑模式
export enum dark {
    turnOff,
    turnOn
}
// slideBar颜色风格
export enum menuStyle {
    bgColor = '#304161',
    textColor = '#bfcbd9',
    darkBgColor = '#1D1E25'
}
// 是否展示折叠菜单按钮
export enum showCollapse {
    hide,
    show
}
// 是否展示全屏按钮
export enum screenfull {
    hideScreenfull,
    showScreenfull
}
// 是否展示LOGO
export enum logo {
    hideLogo,
    showLogo
}
// 是否固定Header
export enum header {
    unFixed,
    fixed
}
// 是否展示TagsView
export enum tagsView {
    hide,
    show
}
// 是否开启灰色模式
export enum gray {
    turnOff,
    turnOn
}
// 是否开启色弱模式
export enum invert {
    turnOff,
    turnOn
}
// 是否开启菜单水平折叠
export enum collapse {
    turnOff,
    turnOn
}
// 是否开启菜单只展开一个
export enum uniqueOpened {
    turnOff,
    turnOn
}
// 默认的登录页面样式
// export enum loginStyle {
//     defalutBg,
//     dynamicBg
// }
export enum loginStyle {
    default,
    dynamic,
    colorBg
}
// 登录页背景色
export enum loginBg {
    default = '#2c3e50'
}
// 页面切换效果
export enum pageAnimationStyle {
    fadeRight = 'fade-transform',
    opacity = 'opacitys'
}
