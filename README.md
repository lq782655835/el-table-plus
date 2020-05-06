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
        { label: '存储卷名', value: 'name', type: 'copy' },
        { label: '总容量', value: 'storage', fn: val => `${val}G` },
        { label: '创建人', value: 'member.userId', type: 'el-tag' },
        { label: '邮箱', value: 'member.email' },
        { label: '创建时间', value: 'gmtCreate' }
      ]"
    />
</template>
```

you can get preview by above code：

![image](https://user-images.githubusercontent.com/6310131/75849382-adbc0900-5e1f-11ea-8201-22b5ebe97984.png)

## API

### el-table-plus Props

基于el-table，所以**Props支持el-table上所有props以及事件event**。

Prop | Type | Default | Description
--- | --- | --- | ---
loading | Boolean |  | 动效loading
data | Array |  [] | 列表数据
columns | Array | column item配置列表 | 详细见[如下columns Attrs](#columns-Attrs)

### columns Attrs

Attr | Type | Default | Description
--- | --- | --- | ---
label | String |   | 列名称
prop | String |   | 列数据字段，支持多层对象嵌套，如user.email.prefix
fn | Function |   | 自定义format函数。函数参数(value, row, column, $index)
customRender | Function |   | 自定义render。函数参数(h, value, row, column, $index)
hidden | Boolean |   | 是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏
width | String |   | 列宽度
minWidth | String | 100px  | 最小列宽度，默认'100px'
fixed | Boolean |  false | 是否固定列
show-overflow-tooltip | Boolean | false  | 超出cell时，是否使用tips提示，默认超过显示tips

## License

MIT
