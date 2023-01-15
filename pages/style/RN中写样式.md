# RN 中写样式

> 大部分属性与 CSS 相同, 但也有不同

- 通过组件的 style 属性绑定样式

  - 支持对象, 数组, 或者通过 StyleSheet API 创建的样式
  - 注意: 不同的组件支持的 style 样式属性不同(如 <View> style 不支持 fontSize...)

- 只有 <Text> 组件会继承样式
- 没有单位尺寸: px/rem...
  - 支持百分号 %
- Flexbox 与 CSS Flexbox 略有不同
  - 默认 flexDirection:"column"
