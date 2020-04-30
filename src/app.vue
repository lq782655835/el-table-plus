<template>
  <div id="app">
    <el-table-plus
      :data="list"
      :fieldList="[
        { label: 'ID', prop: 'id', width: '80px' },
        { label: '存储卷名', prop: 'name', type: 'copy' },
        { label: '总容量', prop: 'storage', fn: val => `${val}G` },
        { label: '创建人', prop: 'member.userId', type: 'el-tag' },
        { label: '邮箱', prop: 'member.email' },
        { label: '创建时间', prop: 'gmtCreate' }
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
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: JSON.parse(
        `{"code":200,"message":"success","data":[{"id":50745,"name":"rtBNhgqCDR","storage":8620,"member":{"id":50961,"userId":"51262","email":"Nu87YypnB@AK22e.rgu","projectRole":"Qa4ohl6qhT"},"mount":[{"mountType":"M8Rhh2Ntp6","mountName":"bFTDHyixr3","mountPath":"uwDTMtnbCW","userName":"nYIE5YoQve"},{"mountType":"8pUyKzNPjL","mountName":"TVaV7bjr1y","mountPath":"HoazVStmm5","userName":"nbGzaRjLjK"},{"mountType":"nD3hnojrY0","mountName":"vtJvtG05Jw","mountPath":"p5VWi1ptsi","userName":"8ERyVxGL3R"}],"gmtCreate":34327},{"id":51414,"name":"1A6ogTNZl1","storage":36580,"member":{"id":51767,"userId":"52603","email":"606UKO@AgasP.qmt","projectRole":"q8KkeQyD8f"},"mount":[{"mountType":"VG3JPYd4n5","mountName":"ijPznKZnUQ","mountPath":"SiQIq2ypee","userName":"rAhVP1UTUQ"},{"mountType":"B900pSNnAf","mountName":"MGFUwpuZq2","mountPath":"RQJOgsV806","userName":"acfdNaETLA"},{"mountType":"L81aEPhXWJ","mountName":"7hWszN6MpP","mountPath":"e99n7mLoHe","userName":"t2d5oVwRqV"}],"gmtCreate":78533},{"id":52659,"name":"srO0gfnHho","storage":46240,"member":{"id":52998,"userId":"53927","email":"M37YXor@949Y0.acq","projectRole":"2ikIgsSabL"},"mount":[{"mountType":"YjxjSNSyOv","mountName":"lRsFRwSWgc","mountPath":"Z1rMIGu0cR","userName":"CoUSbae92N"},{"mountType":"N716xNCa4q","mountName":"uxYPo7TGcG","mountPath":"pXyJpuZ1CX","userName":"oiubmGJ4dQ"},{"mountType":"r3PqYBkT9y","mountName":"Pp6B1yZXhi","mountPath":"SjbANI8SmS","userName":"9h8k3elmdM"}],"gmtCreate":98416}]}`
      ).data
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
