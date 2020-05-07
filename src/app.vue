<template>
  <div id="app">
    <el-table-plus
      :data="list"
      :columns="columns"
    />
    <el-table-plus
      :data="list"
      :columns="columns"
      @row-click="rowClickHandle"
      @sort-change="sortChangeHandle"
      stripe
      border
      :pagination="{layout:'prev, pager, next', background: true, small: true}"
      :total="100"
      @page-change="pageChangeHandle"
    >
        <template #handle="text, row">
          <el-button type="primary" @click="detailHandle(row)">查看详情</el-button>
          <el-button type="danger" @lick="this.delHandle(row)">删除</el-button>
        </template>
        <template #handleTitle="column, index">
          <el-input
          size="mini"
          placeholder="输入关键字搜索"/>
        </template>
    </el-table-plus>
    <el-table
      :data="list"
      @row-click="rowClickHandle"
      @sort-change="sortChangeHandle"
      stripe
      border
    >
      <el-table-column 
        label='创建人' prop='member.userId'
        sortable="custom" :sort-orders="['ascending', 'descending']"
        />
    </el-table>
  </div>
</template>

<script>
const  listData = JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
export default {
  name: "app",
  data() {
    return {
      list: listData,
      columns: [
        { label: '', type: 'expand', customRender: (val, row, column) => {
          console.log(val, row, column, 111)
          return <div>{row.name}、{row.storage}</div>
        }},
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage', fn: val => `${val}G` },
        { label: '创建人', prop: 'member.userId', type: 'el-tag',
          sortable: 'custom', 'sort-orders': ['ascending', 'descending'] },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' },
        { label: '操作', fixed: 'right',  prop: 'handle',
          scopedSlots: { customRender: 'handle', customTitle: 'handleTitle' },
          // customRender: (val, row, column, index, h) => h('el-button', '查看详情')
          // customRender: (val, row, column, index) => {
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
    },

    rowClickHandle(row, column, event) {
      console.log(row, column, event)
    },
    sortChangeHandle(o) {
      console.log(o)
    },
    pageChangeHandle(e) {
      console.log(e)
      // console.log(pageSize, currentPage)
    },

    // formatter
    formatter(row, column, cellValue, index) {
      console.log(row, column, cellValue, index)
      return 111
    }
  }
};
</script>
