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
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

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
