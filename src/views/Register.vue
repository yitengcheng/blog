<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="120px" class="contain">
    <h1 class="title">注册</h1>
    <div class="itemWarrper">
      <el-form-item label="用户名" prop="name" class="item">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="输入密码" prop="password" class="item">
        <el-input show-password v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码" prop="repassword" class="item">
        <el-input show-password v-model="form.repassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone" class="item">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" class="item">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="birthday" class="item">
        <el-input v-model="form.birthday" autocomplete="off"></el-input>
      </el-form-item>
    </div>
    <el-button type="primary" class="itemBtn" @click="doRegister('form')">注册</el-button>
    <el-button type="danger" class="itemBtn">重置</el-button>
  </el-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    components: {},
    data () {
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致'));
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
            form: {
                name: '',
                password: '',
                repassword: '',
                phone: '',
                email: '',
                birthday: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 位', trigger: 'blur' }
                ],
                repassword: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
                email: [
                    { required: true, message: '请输入电子邮箱', trigger: 'blur' },
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: ['blur', 'change']
                    }
                ]
            }
        };
    },
    computed: {
        ...mapState({
            user: state => state.user.user
        })
    },
    methods: {
        ...mapMutations('user', ['updateUser']),
        doRegister (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$http.post('/api/register', { user: this.form }).then(res => {
                        let { success, msg, user } = res;
                        if (success) {
                            this.updateUser(user);
                        } else {
                            alert(msg);
                        }
                    });
                } else {
                    alert('请认真核对信息!');
                }
            });
        }
    }
};
</script>
<style lang='scss'>
.contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/static/fantasy.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
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
  .el-form-item__label {
    color: #fff;
  }
}
.itemBtn {
  width: 300px;
  margin-bottom: 20px;
}
</style>
