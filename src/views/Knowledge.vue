<template>
  <div class="contain">
    <div class="titleWarrper">
      <h1 class="title">文字标注</h1>
      <el-divider class="divider"></el-divider>
      <p class="desc">
        支持输入一段中文短文本（64个汉字），识别短文本中的实体，
        并给出实体的分类、描述及百科实体链接等。
      </p>
    </div>
    <div class="inputWarrper">
      <el-input
        type="textarea"
        placeholder="请输入需要标注的文本"
        v-model="searchText"
        maxlength="64"
        show-word-limit
        autosize
        class="searchInput"
      ></el-input>
      <el-button
        @click="doSearchText"
        size="medium"
        class="markBtn"
        type="success"
        plain
        icon="el-icon-search"
      >标注</el-button>
    </div>
    <div class="tableWarrper" v-show="flag">
      <Table :data="dataArray" :title="titleArray"></Table>
    </div>
  </div>
</template>

<script>
import Table from './../components/Table';
export default {
    components: { Table },
    data () {
        return {
            searchText: '',
            dataArray: [],
            titleArray: [
                { concept: '标签' },
                { desc: '描述' },
                { mention: '标注主体' },
                { _bdbkUrl: '百度链接' }
            ],
            flag: false
        };
    },
    computed: {},
    methods: {
        doSearchText () {
            if (this.searchText) {
                this.$http
                    .post('/api/getknowledge', { searchText: this.searchText })
                    .then(res => {
                        let { success, msg, data } = res;
                        if (success) {
                            let dt = data.entity_annotation;
                            dt.forEach(item => {
                                item.concept = this._.values(item.concept).join(',');
                            });
                            this.dataArray = dt;
                            this.flag = true;
                        } else {
                            this.$alert(msg);
                        }
                    });
            } else {
                this.$alert('请输入需要标注的文本');
            }
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
.titleWarrper {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.title {
  display: flex;
  align-self: flex-start;
  font-size: 20px;
  padding: 20px 80px 0px 80px;
}
.desc {
  display: flex;
  align-self: flex-start;
  font-size: 16px;
  padding: 20px 80px 0px 80px;
}
.inputWarrper {
  display: flex;
  padding: 100px 0px 20px 50px;
  width: 450px;
  flex-direction: column;
}
.searchInput {
  font-size: 18px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.markBtn {
  height: 45px;
}
.tableWarrper {
  width: 80%;
  margin-bottom: 10%;
}
</style>
