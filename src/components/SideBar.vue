<template>
  <el-menu
    :default-active="activeIndex"
    class="aside"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <Login class="login"></Login>
    <el-menu-item
      class="menuItem"
      v-for="(item,index) in menuList"
      :key="index"
      :index="item.path"
      v-show="(item.showFlag)"
    >{{item.title}}</el-menu-item>
    <div class="imageContainer">
      <el-image src="static/rbq.png" fit="contain" class="foot-image"></el-image>
    </div>
  </el-menu>
</template>

<script>
import Login from './Login';
import { mapState } from 'vuex';
export default {
    components: { Login },
    data () {
        return {
            activeIndex: '/',
            menuList: [
                {
                    path: '/',
                    title: '简历',
                    showFlag: true,
                    hasJudge: false
                },
                {
                    path: '/cssPhoto',
                    title: 'CSS动画',
                    showFlag: true,
                    hasJudge: false
                },
                {
                    path: '/calendar',
                    title: '日历',
                    showFlag: true,
                    hasJudge: false
                },
                {
                    path: '/knowledge',
                    title: '文字标注',
                    showFlag: true,
                    hasJudge: false
                },
                {
                    path: '/imageList',
                    title: '图片浏览',
                    showFlag: false,
                    hasJudge: true
                }
            ]
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.user
        })
    },
    methods: {
        refeshList (value) {
            this.menuList.forEach(item => {
                if (item.hasJudge) {
                    let flag = this._.findIndex(value.permissions, o => {
                        return o === 'watchImage';
                    });
                    item.showFlag = flag !== -1;
                }
            });
        }
    },
    watch: {
        userInfo (val, oldVal) {
            this.refeshList(val);
        }
    }
};
</script>
<style lang='scss' scoped>
.aside {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid #545c64;
  overflow: hidden;
}
.menuItem {
  text-align: center;
  font-size: 12px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imageContainer {
  display: flex;
  flex: 1;
  align-items: flex-end;
}
.foot-image {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}
</style>
