import omit from 'lodash/omit'

export default {
  name: "el-table-plus",
  props: {
    loading: { type: Boolean }, // 动效loading
    data: { type: Array, default: () => [] }, // 列表数据
    columns: { type: Array, default: () => [] }, // 列配置
    // 翻页条设置
    pagination: { type: [Object, Boolean], default: false },
    total: { type: Number, default: 0 }
  },
  data() {
    return {
      pageSize: this.pagination && this.pagination.pageSize || 20,
      currentPage: this.pagination && this.pagination.currentPage || 1,
      tableWrap: null
    }
  },
  mounted() {
    const table = this.$refs.table
    this.tableWrap = table.bodyWrapper

    table.bodyWrapper.addEventListener('scroll', this.tableScroll)
    this.$once('hook:beforeDestroy', () => {
        this.tableWrap.removeEventListener('scroll', this.tableScroll)
    })
  },
  methods: {
    tableScroll(e) {
      e.preventDefault()
      this.$emit('scroll', e)
    },
    pageSizeChange(pageSize) {
      this.pageSize = pageSize
      this.emitPageChangeEvent()
    },
    currentChange(currentPage) {
      this.currentPage = currentPage
      this.emitPageChangeEvent()
    },
    emitPageChangeEvent() {
      this.$emit('page-change', {
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      })
    }
  },
  render(h) {
    const tableListeners = omit(this.$listeners, ['page-change'])

    const getCellValue = (column, row) => column.prop.split(".").reduce((obj, cur) => obj[cur], row);

    const renderColumns = columns => columns.filter(i => !i.hidden).map(c => {
      const options = Object.assign({scopedSlots: {}, prop: ''}, c)

      const scopedSlots = {
        default: ({ row, column: elColumn, $index}) => {
          const column = Object.assign({}, options, elColumn)

          // 支持链式. 如：xxx.xxx
          const defaultValue = getCellValue(column, row)

          // 自定义组件
          column.customRender = column.customRender || this.$scopedSlots[column.scopedSlots.customRender]
          if (column.customRender) {
            return column.customRender(defaultValue, row, column, $index, h)
          }
          // 兼容element-ui formatter属性
          if (column.formatter) {
            return column.formatter(row, column, defaultValue, $index)
          }

          return defaultValue
        },
        header: ({column: elColumn, $index}) => {
          const column = Object.assign({}, options, elColumn)

          column.customTitle = column.customTitle || this.$scopedSlots[column.scopedSlots.customTitle]
          if (column.customTitle) {
            return column.customTitle(elColumn, $index)
          }

          return column.label
        }
      }

      return <el-table-column key={options.prop} {...{props: options}} scopedSlots={scopedSlots} />
    })

    return (
      <div class="el-table-plus" v-loading={this.loading}>
        <el-table
          ref="table"
          data={this.data}
          {...{props: this.$attrs, on: tableListeners}}
        >
            {renderColumns(this.columns)}
        </el-table>
        {
          this.pagination && (
            <el-pagination
              {...{ props: this.pagination }}
              total={this.total}
              on-size-change={this.pageSizeChange}
              on-current-change={this.currentChange}
            />
          )
        }
      </div>
    )
  }
};
