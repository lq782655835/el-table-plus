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
      :columns="[
        { label: 'ID', value: 'id', width: '80px' },
        { label: '存储卷名', value: 'name' },
        { label: '总容量', value: 'storage', fn: val => `${val}G` },
        { label: '创建人', value: 'member.userId' },
        { label: '邮箱', value: 'member.email' },
        { label: '创建时间', value: 'gmtCreate' }
      ]"
    />
</template>
```

## API

### el-table-plus 属性

支持el-table上所有[原有属性](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)，同时扩展以下api。

参数 | 类型 | 默认值 | 说明
--- | --- | --- | ---
loading | Boolean | false | 动效loading
data | Array |  [] | 列表数据
columns | Array | [] | column item配置列表，详细见[如下columns Attrs](#columns-属性)
pagination | Object | | 翻页器配置，默认未设置，不显示翻页器。相关api可查看[el-pagination](https://element.eleme.cn/#/zh-CN/component/pagination#attributes)
total | Number | 0 | 翻页器条数总数

### el-table-plus 事件

支持el-table上所有[原有事件](https://element.eleme.cn/#/zh-CN/component/table#table-events)，同时扩展以下api。

事件名称 | 说明 | Description
--- | --- | ---
scroll | table滚动条事件 | e
page-change | 翻页器改变事件 | { pageSize, currentPage }

### columns 属性

支持el-table-column所有[原有属性](https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes)、[Scoped Slot](https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot),同时扩展以下api：

Attr | Type | Default | Description
--- | --- | --- | ---
label | String |   | 列名称
prop | String |   | 列数据字段，支持多层对象嵌套，如user.email.prefix
fn | Function |   | 格式化列。函数参数(value, row, column, $index)
hidden | Boolean |   | 是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏
customRender | Function |   | 自定义列数据渲染。函数参数(value, row, column, $index, h)，**支持jsx和h函数**
customTitle | Function |   | 自定义列头部渲染。函数参数(column, $index, h)，**支持jsx和h函数**
scopedSlots | Object |   | **使用slot方式自定义渲染**，替换customRender/customTitle函数。比如：{ customRender: 'slotName1', customTitle: 'slotName2' }

## License

MIT
