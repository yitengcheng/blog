<template>
  <el-form-item :label="label" :prop="value">
    <el-input
      v-model="input"
      :type="type"
      :rows="rows"
      @change="onChange"
      :placeholder="placeholder"
      :show-password="showPassword"
      :maxlength="maxlength"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
    props: [
        'form',
        'label',
        'value',
        'placeholder',
        'showPassword',
        'type',
        'rows',
        'maxlength'
    ],
    watch: {
        input: {
            handler (newValue, oldValue) {
                this.input = newValue;
            }
        },
        form: {
            handler (newValue, oldValue) {
                this.input = newValue[this.value] || '';
            },
            deep: true
        }
    },
    data () {
        return {
            input: ''
        };
    },
    mounted () {
        this.input = this.form[this.value] || '';
    },
    methods: {
        onChange (value) {
            this.input = value;
            this.$emit('onChange', value, this.value);
        },
        reset () {
            this.input = '';
        }
    }
};
</script>
<style lang='scss' scoped>
</style>
