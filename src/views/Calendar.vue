<template>
  <div>
    <el-calendar>
      <template slot="dateCell" slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">{{ dataFormat(data.day) }}</p>
        <div v-for="(item,index) in wea" :key="index">
          <p class="itemText">{{dataFormat(data.day) === item.day ? item.weather : ''}}</p>
          <p
            class="itemText"
          >{{dataFormat(data.day) === item.day ? item.minTemp + '°C/' +item.maxTemp + '°C' : ''}}</p>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {
            wea: []
        };
    },
    mounted () {
        this.$http.post('/api/getWeaths').then(res => {
            let { success, msg, data } = res;
            if (success) {
                this.wea = data;
            } else {
                this.$alert(msg);
            }
        });
    },
    methods: {
        dataFormat (day) {
            return this.$moment(day).format('MM-DD');
        }
    }
};
</script>
<style lang='scss' scoped>
.itemText {
  line-height: 20px;
}
</style>
