<template>
  <el-dialog :title="title" :visible="dialogVisible" @close="closeModel">
    <div class="wrap">
      <slot name="content"></slot>
    </div>
    <div slot="footer">
      <el-button @click="closeModel">{{cancel || '取消'}}</el-button>
      <el-button type="primary" @click="doConfirm">{{confirm||'确定'}}</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
    props: ['title', 'dialogVisible', 'cancel', 'confirm'],
    methods: {
        closeModel () {
            this.$emit('close');
        },
        doConfirm () {
            this.$emit('doConfirm');
        }
    }
};
</script>
<style lang='scss' scoped>
</style>
