<template>
  <span>
    <slot>
      {{ label }}
      <el-tooltip placement="top" content="复制">
        <el-link
          type="primary"
          @click="copyHandle"
          icon="el-icon-document-copy"
        />
      </el-tooltip>
    </slot>
  </span>
</template>

<script>
import { copyToClipboard } from "@springleo/30-seconds-of-code";

export default {
  props: {
    label: String
  },
  methods: {
    copyHandle() {
      copyToClipboard(this.label);
      this.$message.success("复制成功");
    }
  }
};
</script>
