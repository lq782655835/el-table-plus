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
        :formModel="{
            name: '',
            age: '',
            address: '',
            sex: '男'
        }"
        :fieldList="[
            { label: '姓名', value: 'name', type: 'input' },
            { label: '年龄', value: 'age', type: 'input' },
            { label: '家庭住址', value: 'address', type: 'select', options: ['地址1', '地址2'].map(str => ({label: str, value: str})) },
            { label: '性别', value: 'sex', type: 'radio-group', options: ['男', '女'].map(str => ({label: str, value: str})) }
        ]"
    />
</template>
```

you can get preview by above code：

![image](https://user-images.githubusercontent.com/6310131/75845067-ea353800-5e12-11ea-98aa-66401d18aee6.png)

## API

### el-table-plus Props

基于el-table，所以Props支持el-form上所有props以及事件event。

Prop | Type | Default | Description
--- | --- | --- | ---
refObj | Object |  | 返回form引用，如果手动validate需要用到
formModel | Object |  {} | el-form的model属性包装
fieldList | Array | item配置列表 | 详细见[如下](#fieldList-Attrs)
rules | Object | {} | el-form的rules，可定义所有form-item的规则，优先级最高
labelWidth | string | 100px | el-form的labelWidth
labelPosition | string | left | el-form的labelPosition

### fieldList Attrs

Attr | Type | Default | Description
--- | --- | --- | ---
type | String |  | 必需。渲染的组件类型，支持input、textarea、select、radio-group、input-number、date、slot。同时支持动态组件，为约束完全的动态性，动态组件的命名请以`el-`或`dynamic-`开头。
value | String |   | 必需。值字段，v-model绑定的值为this.data[value]
label | String |   | form-item标题
tooltip | String |  | 标题附近的提示
disabled | Boolean |  false | 是否禁用
placeholder | String |  | 组件placeholder提示，默认input是‘请输入label’，select默认是‘请选择label’
required | Boolean |  false | 校验规则：是否必须
pattern | Regex |   | 校验规则：满足正则
validator | function |   | 校验规则：自定义函数，最灵活
rules | Array\<Rule> |   | 以上三种attr校验属于快速校验规则，使用rules可一次性定义form-item的规则
options | Array |   | 针对select和radio-group组件，配置options list

> 由于type=slot用到v-slot作用域插槽，vue版本需要v2.6+

## License

MIT
