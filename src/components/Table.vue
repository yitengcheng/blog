<template>
  <el-table :data="data" :stripe="stripe || true" :border="border || true">
    <el-table-column
      v-for="(item,index) in titleKey"
      :key="index"
      :prop="item"
      :label="title[index][item]"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
    props: ['data', 'title', 'stripe', 'border'],
    data () {
        return {
            titleKey: []
        };
    },
    mounted () {
        this.title.forEach(item => {
            this.titleKey = this._.concat(this.titleKey, Object.keys(item));
        });
    }
};
</script>
