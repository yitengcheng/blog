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
    <div v-for="(item,index) in menuList" :key="index">
      <el-menu-item
        v-if="!item.childern"
        class="menuItem"
        :index="item.path"
        v-show="(item.showFlag)"
      >{{item.title}}</el-menu-item>
      <el-submenu v-else :index="index.toString()">
        <template slot="title">
          <span class="menuItem">{{item.title}}</span>
        </template>
        <div v-for="(object,i) in item.childern" :key="i">
          <el-menu-item
            :index="object.path"
            v-if="!object.childern"
            class="menuChildrenItem"
          >{{object.title}}</el-menu-item>
          <el-menu-item-group v-else :title="object.title" class="menuChildrenItem">
            <el-menu-item
              :index="chirldItem.path"
              class="menuChildrenItem"
              v-for="(chirldItem,j) in object.childern"
              :key="j"
            >{{chirldItem.title}}</el-menu-item>
          </el-menu-item-group>
        </div>
      </el-submenu>
    </div>

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
                },
                {
                    title: '订单管理',
                    showFlag: true,
                    hasJudge: false,
                    childern: [
                        {
                            title: '订单添加',
                            showFlag: true,
                            hasJudge: false,
                            childern: [
                                {
                                    path: '/batchAdd',
                                    title: '批次添加',
                                    showFlag: true,
                                    hasJudge: false
                                },
                                {
                                    path: '/orderAdd',
                                    title: '订单添加',
                                    showFlag: true,
                                    hasJudge: false
                                },
                                {
                                    path: '/orderAdd',
                                    title: '批量添加',
                                    showFlag: true,
                                    hasJudge: false
                                }
                            ]
                        }
                    ]
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
    mounted () {
        this.refeshList(this.userInfo);
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
.menuChildrenItem {
  font-size: 12px;
}
</style>
