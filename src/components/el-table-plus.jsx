import UCopy from './u-copy'
import { isFunction } from '@springleo/30-seconds-of-code'

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
    /**
     * 表格字段列表配置。以下是每个字段可配置内容：
     * label：列名称
     * value：对应字段
     * fn: 自定义内容
     * type: 内置规则，有slot、filter、badge
     * width： 宽度
     * minWidth：最小宽度
     * fixed：是否固定
     * hidden：是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏（此时tableConfig也需要是一个computed）
     */
    fieldList: { type: Array, default: () => [] },
    /****
     * 操作栏配置,主要针对点击事件
     * width： 宽度
     * minWidth：最小宽度
     * fixed：是否固定
     * btList: 按钮列表。以下是每个列表可配内容：
     ** label: 名称，可配置为string或function
     ** event(移除)：事件名(作用类似上面的value)。详细见func
     ** func(新增): 按钮处理事件，单独设置事件，不再通过统一的emit发送到父组件处理。为了兼容以前的代码，优先执行func（记住不能同时拥有func和handleClick）
     ** btType： el-link的主题色,默认是primary
     ** icon： 图标
     ** disabled：可配置为boolean或function
     ** hidden：是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏（此时tableConfig也需要是一个computed）
     */
    handle: { type: Object },
    noData: Object, // {label, href, command}
    extendData: Object // 组件扩展数据，解决组件只能传Array Table外数据，无法额外传入数据。
  },
  methods: {
    fieldFunc(field, ...args) {
      if (isFunction(field)) {
        return field(...args, this.extendData)
      } else {
        return field
      }
    }
  },
  render(h) {
    const getDataValue = (item, row) => item.prop.split(".").reduce((obj, cur) => obj[cur], row);
    const renderColumns = columns => columns.filter(i => !i.hidden).map((item) => {
      const scopedSlots = {
        default: ({ row, $index}) => {
          // 支持链式. 如：xxx.xxx
          const defaultValue = getDataValue(item, row)

          // 预设组件
          if (item.type === 'copy') {
            return <u-copy label={defaultValue} />
          }
          // 动态组件
          if (['el-', 'dynamic-'].some(prefix => item.type && item.type.startsWith(prefix))) {
            return h(item.type, defaultValue)
          }

          // 自定义组件
          if (item.customRender) {
            return item.customRender(h, item, $index, row)
          }
          // 自定义文字
          if (item.fn) {
            return item.fn(defaultValue, row, item)
          }

          return defaultValue
        }
      }

      return <el-table-column key={item.prop} {...{props: item}} scopedSlots={scopedSlots} />
    })

    return (<el-table
    ref="table"
    v-loading={this.loading}
    data={this.data}
    {...{props: this.$attrs, on: this.$listeners}}
  >
      {renderColumns(this.fieldList)}
  </el-table>)
  }
};
