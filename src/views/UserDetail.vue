<template>
  <div class="contain">
    <el-form
      :disabled="disabled"
      ref="form"
      :model="user"
      :rules="rules"
      label-width="120px"
      class="contain"
    >
      <h1 class="title">用户信息</h1>
      <div class="itemWarrper">
        <el-form-item prop="head">
          <UpLoad @imageUrl="setImageUrl" :img="userInfo.head"></UpLoad>
        </el-form-item>
        <el-form-item label="用户名" prop="name" class="item">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" class="item">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" class="item">
          <el-input v-model="user.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="生日" prop="birthday" class="item">
          <el-date-picker v-model="user.birthday" type="date" placeholder="选择日期"/>
        </el-form-item>
      </div>
    </el-form>
    <div class="btnWarrper">
      <el-button v-show="disabled" type="primary" class="itemBtn" @click="modifyPwd">修改密码</el-button>
      <el-button
        type="primary"
        class="itemBtn"
        @click="doUpdate('form')"
      >{{disabled ? '修改' : '确认修改'}}</el-button>
      <el-button v-if="!disabled" type="danger" class="itemBtn" @click="doCancel">取消</el-button>
    </div>
    <showModel
      title="修改密码"
      :dialogVisible="modifyVisible"
      @close="closeModel"
      @doCancel="closeModel"
      @doConfirm="modifyPwd"
    >
      <div slot="content">
        <el-form :model="passwordInfo" ref="modifyPwd" class="loginWrapper" :rules="pwdRules">
          <el-form-item label="旧密码" label-width="70px" class="loginItem" prop="oldPassword">
            <el-input v-model="passwordInfo.oldPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" label-width="70px" class="loginItem" prop="newPassword">
            <el-input v-model="passwordInfo.newPassword" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </showModel>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import UpLoad from '../components/UpLoad';
import showModel from '../components/showModel';
export default {
    components: { UpLoad, showModel },
    data () {
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value === this.passwordInfo.oldPassword) {
                callback(new Error('新密码不能与旧密码一致'));
            } else {
                callback();
            }
        };
        let validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!this.$utils.isvalidPhone(value)) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        return {
            pwdRules: {
                oldPassword: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' },
                    { min: 3, max: 16, message: '长度在 3 到 16 位', trigger: 'blur' }
                ],
                newPassword: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 3, max: 16, message: '长度在 3 到 16 位', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ]
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 16, message: '长度在 3 到 16 位', trigger: 'blur' }
                ],
                phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
                email: [
                    { required: true, message: '请输入电子邮箱', trigger: 'blur' },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }
                ],
                birthday: [
                    {
                        type: 'string',
                        required: true,
                        message: '请选择日期',
                        trigger: 'blur'
                    }
                ],
                head: [{ required: true, message: '请选择头像', trigger: 'blur' }]
            },
            passwordInfo: {
                oldPassword: '',
                newPassword: ''
            },
            disabled: true,
            user: {},
            modifyVisible: false
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.user
        })
    },
    mounted () {
        this.user = { ...this.userInfo };
    },
    methods: {
        ...mapMutations('user', ['updateUser']),
        setImageUrl (url) {
            this.$set(this.user, 'head', url);
        },
        doUpdate (formName) {
            if (this.disabled) {
                this.disabled = false;
            } else {
                this.user.birthday = this.$moment(this.user.birthday).format(
                    'YYYY-MM-DD hh:mm:ss'
                );
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$http
                            .post('/api/userUpdate', { user: this.user })
                            .then(res => {
                                let { success, msg, user } = res;
                                if (success) {
                                    this.updateUser(user);
                                    this.$router.replace({
                                        path: '/'
                                    });
                                } else {
                                    this.$alert(msg);
                                }
                            });
                    } else {
                        this.$alert('请认真核对信息!');
                    }
                });
            }
        },
        doCancel () {
            this.disabled = true;
            this.user = { ...this.userInfo };
        },
        closeModel () {
            this.modifyVisible = false;
            this.$refs['modifyPwd'].resetFields();
        },
        modifyPwd () {
            if (this.modifyVisible) {
                this.$refs['modifyPwd'].validate(valid => {
                    if (valid) {
                        this.$http
                            .post('/api/modifyPassword', {
                                password: this.passwordInfo.newPassword,
                                oldPassword: this.passwordInfo.oldPassword,
                                userId: this.userInfo._id
                            })
                            .then(res => {
                                let { success, msg } = res;
                                if (success) {
                                    this.modifyVisible = false;
                                    this.$alert('修改成功');
                                    this.updateUser('');
                                    this.$router.replace({
                                        path: '/'
                                    });
                                } else {
                                    this.modifyVisible = false;
                                    this.$refs['modifyPwd'].resetFields();
                                    this.$alert(msg);
                                }
                            });
                    } else {
                        this.$alert('请认真核对信息!');
                    }
                });
            } else {
                this.modifyVisible = true;
            }
        }
    }
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #333;
  font-size: 22px;
  margin-bottom: 30px;
}
.itemWarrper {
  margin-right: 120px;
}
.item {
  width: 400px;
}
.itemBtn {
  width: 300px;
  margin-bottom: 20px;
}
.btnWarrper {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}
.modify {
  display: flex;
  font-size: 12px;
  align-self: flex-end;
  padding-right: 150px;
  color: #666;
}
.loginWrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.loginItem {
  width: 250px;
}
</style>
