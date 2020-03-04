<template>
  <el-table
    ref="table"
    v-loading="loading"
    :data="data"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-table-column
      v-for="(item, index) in fieldList.filter(item => !item.hidden)"
      :key="index"
      :prop="item.value"
      :label="item.label"
      :fixed="item.fixed"
      :width="item.width"
      :min-width="item.minWidth || '100px'"
      :type="item.type"
      :show-overflow-tooltip="!item.notips"
    >
      <template v-if="item.type || item.fn" v-slot="scope">
        <!-- solt 自定义列-->
        <template v-if="item.type === 'slot'">
          <slot :name="item.value" :row="scope.row" />
        </template>
        <!-- 拷贝 -->
        <u-copy
          v-else-if="item.type === 'copy'"
          :label="$getDataValue(item, scope.row)"
        />
        <!-- 动态组件 -->
        <template
          v-else-if="
            ['el-', 'dynamic-'].some(
              prefix => item.type && item.type.startsWith(prefix)
            )
          "
        >
          <component :is="item.type" :label="$getDataValue(item, scope.row)">
            {{ $getDataValue(item, scope.row) }}
          </component>
        </template>
        <!-- 其他 -->
        <span v-else>{{ $getDataValue(item, scope.row) }}</span>
      </template>
    </el-table-column>
    <el-table-column
      v-if="handle"
      :key="'handle'"
      :label="handle.label"
      :fixed="handle.fixed"
      :width="handle.width"
      :min-width="handle.minWidth"
    >
      <template v-slot="scope">
        <template
          v-for="(item, index) in handle.btList.filter(btn => !fieldFunc(btn.hidden, scope.row))"
        >
          <!-- 自定义操作类型 -->
          <slot
            v-if="item.slot"
            :name="item.event"
            :data="{ item, row: scope.row }"
          />
          <!-- 操作按钮 -->
          <el-link
            v-else
            :key="index"
            :type="item.btType || 'primary'"
            :icon="item.icon"
            :disabled="fieldFunc(item.disabled, scope.row)"
            @click="fieldFunc(item.func, scope.row, item)"
          >
            {{
              fieldFunc(item.label, scope.row)
            }}
          </el-link>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
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
  }
};
</script>

<style scoped>
.el-link + .el-link {
  margin-left: 10px;
}
</style>
