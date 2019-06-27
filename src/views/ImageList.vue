<template>
  <div class="contain">
    <div class="imageWarrper">
      <div
        class="imageItem"
        v-for="(image, index) in data"
        :key="index"
        @click="toImageDetail(image)"
      >
        <el-image class="image" v-if="image.file_path" :src="image.file_path[0]"></el-image>
        <p class="title">{{image.title}}</p>
      </div>
    </div>
    <el-pagination
      @current-change="doCurrent"
      background
      layout="prev, pager, next"
      :total="totalCount"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    components: {},
    data () {
        return {
            data: [],
            totalCount: 0
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.user
        })
    },
    mounted () {
        this.getImageList();
    },
    methods: {
        doCurrent (val) {
            this.getImageList(val);
        },
        getImageList (pageNo) {
            this.$http
                .post('/api/getImageList', {
                    pageNo: pageNo || 1,
                    pageSize: 10,
                    userId: this.userInfo._id
                })
                .then(res => {
                    let { count, msg, data, success } = res;
                    if (success) {
                        this.totalCount = count - 10;
                        this.data = data;
                    } else {
                        this.$alert(msg);
                    }
                });
        },
        toImageDetail (image) {
            this.$router.push({
                name: 'ImageDetail',
                params: { image }
            });
        }
    }
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imageWarrper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.imageItem {
  display: flex;
  flex-direction: column;
  width: 22%;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
}
.image {
  width: 100%;
  height: 300px;
}
.title {
  text-align: center;
  margin-top: 10px;
}
</style>
