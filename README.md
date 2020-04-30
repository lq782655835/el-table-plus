# el-table-plus ![](https://img.shields.io/badge/license-MIT-F44336.svg)

## Install

``` bash
yarn add @springleo/el-table-plus
```

## Online Example

https://lq782655835.github.io/el-table-plus

## Quick Start

Import modules and set up settings in main.js:

``` js
import ElTablePlus from '@springleo/el-table-plus'
Vue.use(ElTablePlus)
```

use `<el-table-plus>` in your page

``` html
<template>
    <el-table-plus
      :data="list"
      :fieldList="[
        { label: 'ID', value: 'id', width: '80px' },
        { label: '存储卷名', value: 'name', type: 'copy' },
        { label: '总容量', value: 'storage', fn: val => `${val}G` },
        { label: '创建人', value: 'member.userId', type: 'el-tag' },
        { label: '邮箱', value: 'member.email' },
        { label: '创建时间', value: 'gmtCreate' }
      ]"
      :handle="{
        fixed: 'right',
        label: '操作',
        width: '150',
        btList: [
          { label: '查看详情', btType: 'primary', func: detailHandle },
          { label: '删除', btType: 'danger', func: delHandle }
        ]
      }"
    />
</template>
```

you can get preview by above code：

![image](https://user-images.githubusercontent.com/6310131/75849382-adbc0900-5e1f-11ea-8201-22b5ebe97984.png)

## API

### el-table-plus Props

基于el-table，所以Props支持el-form上所有props以及事件event。

Prop | Type | Default | Description
--- | --- | --- | ---
loading | Boolean |  | 动效loading
data | Array |  [] | 列表数据
fieldList | Array | column item配置列表 | 详细见[如下fieldList Attrs](#fieldList-Attrs)
handle | Object |  | 操作栏配置,主要针对点击事件，详细见[如下handle Attrs](#handle-Attrs)
extendData | Object |  | 扩展数据，解决组件只能传Array Table外数据，无法额外传入数据。

### fieldList Attrs

Attr | Type | Default | Description
--- | --- | --- | ---
label | String |   | 列名称
prop | String |   | 列数据字段，支持多层对象嵌套，如user.email.prefix
fn | Function |   | 自定义内容替换默认value。函数参数(value, row)
width | String |   | 列宽度
minWidth | String | 100px  | 最小列宽度，默认'100px'
fixed | Boolean |  false | 是否固定列
show-overflow-tooltip | Boolean | false  | 超出cell时，是否使用tips提示，默认超过显示tips
hidden | Boolean |   | 是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏

### handle Attrs

Attr | Type | Default | Description
--- | --- | --- | ---
width | String |   | 操作栏宽度
minWidth | String |   | 操作栏最小列宽度
fixed | Boolean |  false | 是否固定列
btnList | Array |   | 按钮列表。详细见[如下handle btnList Attrs](#handle-btnList-Attrs)

### handle btnList Attrs

Attr | Type | Default | Description
--- | --- | --- | ---
label | String \| Function |   | button显示名称
icon | String |   | el-link图标
btType | String |   | el-link的主题色,默认是primary
func | Function |   | button单击事件，参数(row, extendData)
disabled | Boolean \| Function |   | 是否禁用该button
hidden | Boolean \| Function |   | 是否隐藏该button

> 由于type=slot用到v-slot作用域插槽，vue版本需要v2.6+

## License

MIT
