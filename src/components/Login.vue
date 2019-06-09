<template>
  <div>
    <el-button v-if="!user" class="el-icon-user-solid button" type="text" @click="login">未登录</el-button>
    <div class="user" v-else>
      <el-image :src="user.head ||'static/default.png'" class="head"></el-image>
      <div class="userName">admin</div>
    </div>
    <showModel
      title="登录"
      :dialogVisible="modelVisible"
      v-on:close="closeModel"
      v-on:doConfirm="doConfirm"
    >
      <div slot="content">
        <el-form :model="form" class="loginWrapper" :rules="rules">
          <el-form-item label="用户名" label-width="70px" class="loginItem" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="70px" class="loginItem" prop="password">
            <el-input show-password v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </showModel>
  </div>
</template>

<script>
import showModel from './showModel';
export default {
    components: { showModel },
    data () {
        return {
            modelVisible: false,
            form: {
                name: '',
                password: ''
            },
            user: '',
            rules: {
                name: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 位', trigger: 'blur' }
                ]
            }
        };
    },
    computed: {},
    methods: {
        login () {
            this.modelVisible = true;
        },
        closeModel () {
            this.modelVisible = false;
        },
        doConfirm () {
            this.modelVisible = false;
        }
    }
};
</script>
<style lang='scss' scoped>
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
}
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.head {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.userName {
  color: #409eff;
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
