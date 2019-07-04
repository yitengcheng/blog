<template>
  <div class="contain">
    <Tabs :tabsData="tabsData" ref="tabs" @tabClick="tabClick">
      <div slot="批次列表">
        <div class="searchWarpper">
          <div class="searchWarpper">
            <div class="search">
              <p class="searchTitle">批次名称：</p>
              <el-input maxlength="16" v-model="batchId" class="searchInput" placeholder="请输入批次名称"></el-input>
            </div>
            <div class="search">
              <p class="searchTitle">车牌号：</p>
              <el-input maxlength="7" v-model="plate" class="searchInput" placeholder="请输入车牌号"></el-input>
            </div>
          </div>
          <div class="searchBtnWarpper">
            <el-button type="primary" @click="getBatchs">搜索</el-button>
            <el-button type="danger" @click="resetSearch">清空</el-button>
          </div>
        </div>
        <ElTable
          :stripe="true"
          :hasCheck="true"
          :tableData="tableData"
          :tableKey="tableKey"
          :border="true"
        >
          <div slot-scope="data">
            <el-button
              @click.native.prevent="editorRow(data.data.$index, data.data.row)"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(data.data.$index, data.data.row)"
              type="text"
              size="small"
            >移除</el-button>
          </div>
        </ElTable>
      </div>
      <div slot="批次添加" class="listWarrper">
        <el-form
          v-if="refresh"
          ref="form"
          :rules="rules"
          :model="form"
          label-width="80px"
          label-position="right"
        >
          <FormInput label="车主" :form="form" value="name" @onChange="onChange" :rules="rules" />
          <FormInput label="联系电话" :form="form" value="phone" @onChange="onChange" :rules="rules" />
          <FormInput label="车牌号" :form="form" value="plate" @onChange="onChange" :rules="rules" />
          <FormDateTime
            label="到达时间"
            :form="form"
            value="arriveDate"
            @onChange="onChange"
            :rules="rules"
          />
          <FormInput label="车型" :form="form" value="carInfo" @onChange="onChange" />
          <FormInput
            :rows="6"
            label="备注"
            type="textarea"
            :form="form"
            value="remark"
            @onChange="onChange"
          />
          <el-button type="primary" class="addBtn" @click="doConfirm">添加</el-button>
        </el-form>
      </div>
    </Tabs>
  </div>
</template>

<script>
import Tabs from '../components/Tabs';
import FormInput from '../components/form/formInput';
import FormDateTime from '../components/form/formDateTime';
import ElTable from '../components/elComponent/el-table';
export default {
    components: { Tabs, FormInput, FormDateTime, ElTable },
    data () {
        let validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!this.$utils.isvalidPhone(value)) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        let validatePlate = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入车牌号'));
            } else if (!this.$utils.isvalidPlate(value)) {
                callback(new Error('请输入正确的车牌号'));
            } else {
                callback();
            }
        };
        return {
            tabsData: [{ name: '批次列表' }, { name: '批次添加' }],
            form: {
                name: '',
                phone: '',
                plate: '',
                arriveDate: '',
                carInfo: '',
                remark: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入车主姓名', trigger: 'blur' },
                    { max: 20, message: '姓名长度过长', trigger: 'blur' }
                ],
                phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
                plate: [{ required: true, validator: validatePlate, trigger: 'blur' }],
                arriveDate: [
                    { required: true, message: '请输入到达时间', trigger: 'blur' }
                ]
            },
            refresh: true,
            tableKey: [
                {
                    prop: 'batchId',
                    label: '批次名称',
                    width: '150'
                },
                { prop: 'name', label: '车主', width: '100' },
                { prop: 'phone', label: '联系电话', width: '100' },
                { prop: 'plate', label: '车牌', width: '100' },
                { prop: 'carInfo', label: '车型', width: '120' },
                { prop: 'arriveDate', label: '到达时间', width: '150' },
                { prop: 'createTime', label: '创建时间', width: '150' },
                { prop: 'remark', label: '备注', width: '150' },
                { label: '操作', width: '120' }
            ],
            tableData: [],
            action: '',
            batchId: '',
            plate: '',
            hasAction: false
        };
    },
    watch: {
        refresh () {
            this.$nextTick(() => {
                this.form = {
                    name: '',
                    phone: '',
                    plate: '',
                    arriveDate: '',
                    carInfo: '',
                    remark: ''
                };
                this.refresh = true;
            });
        }
    },
    mounted () {
        this.getBatchs();
    },
    methods: {
        deleteRow (index, row) {
            this.$http
                .post('/api/deleteBatch', { batchId: row.batchId })
                .then(res => {
                    let { success, msg, batchId } = res;
                    if (success) {
                        this.$alert('已成功删除，批次号：' + batchId);
                    } else {
                        this.$alert(msg);
                    }
                });
            this.getBatchs();
        },
        editorRow (index, row) {
            this.form = { ...row, batchId: row.batchId };
            this.hasAction = true;
            this.$refs.tabs.changeTab('1');
        },
        doConfirm () {
            for (const key in this.form) {
                if (
                    this.rules[key] &&
          this.rules[key][0].required &&
          this.form[key] === ''
                ) {
                    this.$alert('请认真核对信息');
                    return;
                }
            }
            if (this.hasAction) {
                this.$http.post('/api/updateBatch', { batch: this.form }).then(res => {
                    let { success, msg } = res;
                    if (success) {
                        this.refresh = false;
                        this.$refs.tabs.changeTab('0');
                    } else {
                        this.$alert(msg);
                    }
                });
            } else {
                this.$http.post('/api/addBatch', { batch: this.form }).then(res => {
                    let { success, msg, batchId } = res;
                    if (success) {
                        this.refresh = false;
                        this.$alert('批次添加成功，请记录批次号' + batchId);
                    } else {
                        this.$alert(msg);
                    }
                });
            }
            this.getBatchs();
        },
        onChange (value, formType) {
            this.form[formType] = value;
        },
        getBatchs () {
            this.$http
                .post('/api/getBatchs', {
                    batchId: this.batchId,
                    plate: this.plate
                })
                .then(res => {
                    let { success, msg, data } = res;
                    if (success) {
                        this.tableData = data;
                    }
                });
        },
        resetSearch () {
            this.plate = '';
            this.batchId = '';
        },
        tabClick () {
            this.form = {
                name: '',
                phone: '',
                plate: '',
                arriveDate: '',
                carInfo: '',
                remark: ''
            };
            this.refresh = false;
            this.hasAction = false;
        }
    }
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex: 1;
  justify-content: center;
}
.listWarrper {
  display: flex;
  flex: 0.5;
  min-width: 600px;
  flex-direction: column;
  align-self: center;
}
.addBtn {
  width: 100px;
  align-self: center;
  margin-left: 80px;
}
.searchWarpper {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
}
.search {
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin-right: 20px;
}
.searchTitle {
  width: 80px;
  line-height: 30px;
}
.searchInput {
  width: 150px;
}
.searchBtnWarpper {
  justify-self: flex-end;
}
</style>
