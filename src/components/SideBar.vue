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
        v-show="item.showFlag"
      >{{item.title}}</el-menu-item>
      <el-submenu v-else :index="index.toString()" v-show="item.showFlag">
        <template slot="title">
          <span class="menuItem">{{item.title}}</span>
        </template>
        <div v-for="(object,i) in item.childern" :key="i">
          <el-menu-item
            :index="object.path"
            v-if="!object.childern"
            class="menuChildrenItem"
            v-show="object.showFlag"
          >{{object.title}}</el-menu-item>
          <el-menu-item-group v-else :title="object.title" class="menuChildrenItem">
            <el-menu-item
              :index="chirldItem.path"
              class="menuChildrenItem"
              v-for="(chirldItem,j) in object.childern"
              :key="j"
              v-show="chirldItem.showFlag"
            >{{chirldItem.title}}</el-menu-item>
          </el-menu-item-group>
        </div>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import Login from "./Login";
import { mapState } from "vuex";
import menu from "../config/menu_config";
export default {
    components: { Login },
    data() {
        return {
            activeIndex: "/",
            menuList: menu
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.user
        })
    },
    methods: {
        refeshList(user) {
            this.menuList.forEach(item => {
                if (item.hasJudge) {
                    if (item.title === "图片浏览") {
                        item.showFlag = this.$utils.hasPermission(user, ["watchImage"]);
                    }
                }
            });
        }
    },
    mounted() {
        this.refeshList(this.userInfo);
    },
    watch: {
        userInfo(val) {
            this.refeshList(val);
        }
    }
};
</script>
<style lang='scss' scoped>
.aside {
  display: flex;
  width: 150px;
  flex-direction: column;
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
.foot-image {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}
.menuChildrenItem {
  font-size: 12px;
}
</style>
