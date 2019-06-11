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
    >{{item.title}}</el-menu-item>
    <div class="imageContainer">
      <el-image src="static/rbq.png" fit="contain" class="foot-image"></el-image>
    </div>
  </el-menu>
</template>

<script>
import Login from './Login';
export default {
    components: { Login },
    data () {
        return {
            activeIndex: '/',
            menuList: [
                { path: '/', title: '简历' },
                { path: '/utils', title: '工具' },
                { path: '/game', title: '游戏' }
            ]
        };
    }
};
</script>
<style lang='scss' scoped>
.aside {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
}
.menuItem {
  text-align: center;
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
