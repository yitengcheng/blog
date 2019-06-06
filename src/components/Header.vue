<template>
  <el-menu
    :default-active="activeIndex"
    class="aside"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router="true"
  >
    <el-menu-item v-for="(item,index) in menuList" :key="index" :index="item.path">{{item.title}}</el-menu-item>
  </el-menu>
</template>

<script>
export default {
    components: {},
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
</style>
