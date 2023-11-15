# RN 中写样式

> RN 中大部分样式属性与 CSS 相同, 但也有不同

- 通过组件 props 属性 style 绑定样式, 支持对象和数组
- 不同的组件支持的样式属性不一样, 如 <View> 不支持字体相关属性
- RN 组件不会继承样式, 但 `<Text>` 组件会继承
- 没有尺寸单位, 如 px/rem..., 但是支持百分号
- Flexbox 与 CSS Flexbox 略有不同
  - flexDirection 默认值是 "column"
  - RN 组件 display 默认值 flex, 且只有 none 和 flex
- RN 中有一些独有的样式属性: marginHorizontal/marginVertical...
- 可以借助 Dimensions API 获取屏幕宽高, 代替 vh/vw 单位
