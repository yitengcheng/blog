<template>
  <el-form-item :label="label" :prop="value">
    <el-checkbox-group v-model="inputList" @change="onChange">
      <el-checkbox v-for="(check,index) in checks" :key="index" :label="check"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
    props: ["form", "label", "value", "checks"],
    watch: {
        inputList: {
            handler(newValue) {
                this.inputList = newValue;
            }
        },
        form: {
            handler(newValue) {
                this.inputList = newValue[this.value] || [];
            },
            deep: true
        }
    },
    data() {
        return {
            inputList: []
        };
    },
    methods: {
        onChange(value) {
            this.inputList = value;
            this.$emit("onChange", value, this.value);
        },
        reset() {
            this.inputList = [];
        }
    }
};
</script>
<style lang='scss' scoped>
</style>
