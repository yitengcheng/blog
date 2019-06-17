<template>
  <div class="contain">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      ref="upload"
      action="/api/upload"
      :http-request="upload"
      multiple
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
export default {
    name: 'upload',
    props: ['img'],
    data () {
        return {
            imageUrl: ''
        };
    },
    mounted () {
        this.imageUrl = this.img;
    },
    methods: {
        upload () {
            const formData = new FormData();
            const uploadFiles = this.$refs.upload.uploadFiles;
            const fileIndex = uploadFiles.length - 1;
            const file = uploadFiles[fileIndex];
            const headerConfig = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            formData.append('image', file.raw);
            this.$http.post('/api/upload', formData, headerConfig).then(res => {
                let { success, url } = res;
                this.$emit('imageUrl', this.$API + url);
                this.imageUrl = this.$API + url;
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.contain {
  display: flex;
  flex-direction: column;
}
.avatar-uploader {
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  border: 1px dashed #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 200px;
  height: 200px;
}
</style>
