<template>
  <div>
    <el-calendar>
      <template slot="dateCell" slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">{{ dataFormat(data.day) }}</p>
        <p
          v-for="(item,index) in wea"
          :key="index"
        >{{dataFormat(data.day) === item.day ? item.weather : ''}}</p>
        <p
          v-for="(item,index) in wea"
          :key="index"
        >{{dataFormat(data.day) === item.day ? item.minTemp + '°C/' +item.maxTemp + '°C' : ''}}</p>
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
</style>
