# el-table-plus

## 基本用法

 `data` 和 `columns` 两个属性

:::demo
``` vue
<template>
    <el-table-plus
      :data="list"
      :columns="columns"
    />
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  data() {
    return {
      list: listData,
      columns: [
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name' },
        { label: '总容量', prop: 'storage' },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' }
      ]
    };
  }
};
</script>
```
:::

## 全属性和事件支持

自动集成el-table 和el-table-column所有属性和事件。el-table属性包括`stripe、border`等；el-table-column属性包括`fixed、align、show-overflow-tooltip`等。

更多可看[element官方属性和事件列表](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)

:::demo
``` vue
<template>
    <el-table-plus
      :data="list"
      :columns="columns"
      @row-click="rowClickHandle"
      @sort-change="sortChangeHandle"
      stripe
      border
    />
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  data() {
    return {
      list: listData,
      columns: [
        { label: 'ID', prop: 'id', width: '80px', fixed: 'left' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage' },
        { label: '邮箱', prop: 'member.email', 'show-overflow-tooltip': true },
        { label: '创建时间', prop: 'gmtCreate', align: 'right' }
      ]
    };
  },
  methods: {
    rowClickHandle(row, column, event) {
      console.log(row, column, event)
    },
    sortChangeHandle(o) {
      console.log(o)
    },
  }
};
</script>
```
:::

## 格式化列

element-ui字段列中有 [formatter](https://element.eleme.cn/#/zh-CN/component/table) - Function(row, column, cellValue, index) 属性支持格式化，这里el-table-plus兼容该写法。

同时为简便函数参数，同时提供fn - (cellValue, row, column, index)属性

:::demo
``` vue
<template>
    <el-table-plus
      :data="list"
      :columns="columns"
    />
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  data() {
    return {
      list: listData,
      columns: [
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage', fn: val => `${val}G` },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' }
      ]
    };
  }
};
</script>
```
:::

## 自定义渲染

支持jsx/slot/h函数三种方式的自定义渲染。

熟悉slot语法，可以在`scopedSlots.customRender`中设置slot名称，然后在template模板中书写slot。

熟悉jsx语法，可直接`customRender`函数中返回JSX（注意此时需要babel支持，vue-cli3自带），或者直接书写h函数创建最终VNode。

:::demo
``` vue
<template>
    <el-table-plus
      :data="list"
      :columns="columns"
    >
      <template #handle="text, row">
        <el-button type="primary" @click="detailHandle(row)">查看详情</el-button>
        <el-button type="danger" @lick="this.delHandle(row)">删除</el-button>
      </template>
    </el-table-plus>
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  data() {
    return {
      list: listData,
      columns: [
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage', fn: val => `${val}G` },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' },
        { label: '操作', fixed: 'right',  prop: 'handle',
          scopedSlots: { customRender: 'handle' },
          // 同时customRender/customTitle支持JSX，返回VNode
          // customRender: (val, row, column, index, h) => {
          //   return (<div>
          //     <el-button type="primary" onClick={() => this.detailHandle(row)}>查看详情</el-button>
          //     <el-button type="danger" onClick={() => this.delHandle(row)}>删除</el-button>
          //   </div>)
          // }
        }
      ]
    };
  },
  methods: {
    detailHandle({ name }) {
      this.$message.success(`${name} 详情`);
    },
    delHandle({ name }) {
      this.$message.error(`删除 ${name}`);
    }
  }
};
</script>
```
:::

## sort

## expand

## slot支持

跟element一致，支持自定义列的内容以及自定义表头的内容，分别对应`customRender`和`customTitle`。参数顺序和element一致，分别是 { row, column, $index }和 { column, $index }

:::demo
``` vue
<template>
    <el-table-plus
      :data="list"
      :columns="columns"
    >
      <template #handle="text, row">
        <el-button type="primary" @click="detailHandle(row)">查看详情</el-button>
        <el-button type="danger" @lick="this.delHandle(row)">删除</el-button>
      </template>
      <template #handleTitle="column, index">
        <el-input size="mini" placeholder="输入关键字搜索"/>
      </template>
    </el-table-plus>
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  data() {
    return {
      list: listData,
      columns: [
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage', fn: val => `${val}G` },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' },
        { label: '操作', fixed: 'right',  prop: 'handle',
          scopedSlots: { customRender: 'handle', customTitle: 'handleTitle' },
        }
      ]
    };
  },
  methods: {
    detailHandle({ name }) {
      this.$message.success(`${name} 详情`);
    },
    delHandle({ name }) {
      this.$message.error(`删除 ${name}`);
    }
  }
};
</script>
```
:::

## 集成pagination