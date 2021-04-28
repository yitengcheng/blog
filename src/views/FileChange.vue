<template>
  <el-main class="contain">
    <el-form :model="sendFileInfo" ref="sendFileInfo" label-width="100px" label-position="right">
      <Upload label="文件" value="files" :form="sendFileInfo" listType="text" @onChange="onChange" />
    </el-form>
    <el-button @click="doUpload">传递</el-button>
    <div>
      <el-button
        class="downLoadBtn"
        v-for="(filePath,index) in filePaths"
        :key="index"
        @click="downLoad(filePath)"
      >下载{{index+1}}</el-button>
    </div>
  </el-main>
</template>

<script>
import Upload from "../components/form/formUpload";
import { mapState } from "vuex";
export default {
    components: { Upload },
    data() {
        return {
            sendFileInfo: {
                files: []
            },
            filePaths: []
        };
    },
    mounted() {
        this.getFileExchanges();
    },
    computed: {
        ...mapState({
            user: state => state.user.user
        })
    },
    methods: {
        onChange(file, formType) {
            this.sendFileInfo[formType] = file;
        },
        getFileExchanges() {
            this.$http
                .post("/api/getFileExchanges", { userId: this.user._id })
                .then(res => {
                    let { filePaths, success } = res;
                    if (success) {
                        this.filePaths = filePaths;
                    }
                });
        },
        downLoad(file) {
            window.open(file.url);
        },
        doUpload() {
            if (this.sendFileInfo.files.length === 0) {
                this.$alert("请先上传文件");
            } else {
                this.$http
                    .post("/api/uploadFile", { files: this.sendFileInfo.files })
                    .then(res => {
                        let { success, msg } = res;
                        if (success) {
                            this.$alert("上传成功");
                        } else {
                            this.$alert(msg);
                        }
                    });
            }
        }
    }
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
}
.downLoadBtn {
  margin-top: 20px;
}
</style>