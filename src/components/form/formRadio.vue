<template>
  <el-form-item :label="label" :prop="value">
    <el-radio-group v-model="input" @change="onChange">
      <el-radio v-for="(check,index) in checks" :key="index" :label="check"></el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
    props: ["form", "label", "value", "checks"],
    watch: {
        input: {
            handler(newValue) {
                this.input = newValue;
            }
        },
        form: {
            handler(newValue) {
                this.input = this.checks[newValue[this.value]] || this.checks[0];
            },
            deep: true
        }
    },
    data() {
        return {
            input: ""
        };
    },
    mounted() {
        this.input = this.checks[this.form[this.value]] || this.checks[0];
    },
    methods: {
        onChange(value) {
            this.input = value;
            this.$emit("onChange", this._.indexOf(this.checks, value), this.value);
        },
        reset() {
            this.input = "";
        }
    }
};
</script>
<style lang='scss' scoped>
</style>
