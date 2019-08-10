<template>
  <div class="contain">
    <el-page-header @back="goBack" :content="image.title" class="pageTitle"></el-page-header>
    <div class="imageShow">
      <el-image
        v-if="image.file_path"
        class="image"
        fit="contain"
        :src="image.file_path[currentIndex]"
      ></el-image>
      <el-pagination
        @current-change="doCurrent"
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="1"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {
            image: {},
            totalCount: 0,
            currentIndex: 0
        };
    },
    mounted () {
        let image = this.$route.params.image;
        this.image = image;
        this.totalCount = image.file_path.length;
    },
    methods: {
        goBack () {
            this.$router.back();
        },
        doCurrent (pageNo) {
            this.currentIndex = pageNo - 1;
        }
    }
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex-direction: column;
}
.pageTitle {
  margin: 10px 10px;
}
.imageShow {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.image {
  width: 80%;
  height: 600px;
  margin-bottom: 10px;
}
</style>
