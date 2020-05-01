import UCopy from './u-copy'

export default {
  name: "el-table-plus",
  components: {
    UCopy
  },
  props: {
    // 动效loading
    loading: { type: Boolean },
    // 列表数据
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] }
  },
  render(h) {
    const getDataValue = (column, row) => column.prop.split(".").reduce((obj, cur) => obj[cur], row);
    const renderColumns = columns => columns.filter(i => !i.hidden).map((column) => {
      const scopedSlots = {
        default: ({ row, $index}) => {
          // 支持链式. 如：xxx.xxx
          const defaultValue = getDataValue(column, row)

          // 预设组件
          if (column.type === 'copy') {
            return <u-copy label={defaultValue} />
          }
          // 动态组件
          if (['el-', 'dynamic-'].some(prefix => column.type && column.type.startsWith(prefix))) {
            return h(column.type, { props: column }, defaultValue)
          }

          // 自定义组件
          if (column.customRender) {
            return column.customRender(h, defaultValue, row, column, $index)
          }
          // 自定义文字
          if (column.fn) {
            return column.fn(defaultValue, row, column, $index)
          }
          // 兼容element-ui formatter属性
          if (column.formatter) {
            return column.formatter(row, column, defaultValue, $index)
          }

          return defaultValue
        }
      }

      return <el-table-column key={column.prop} {...{props: column}} scopedSlots={scopedSlots} />
    })

    return (<el-table
    ref="table"
    v-loading={this.loading}
    data={this.data}
    {...{props: this.$attrs, on: this.$listeners}}
  >
      {renderColumns(this.columns)}
  </el-table>)
  }
};
