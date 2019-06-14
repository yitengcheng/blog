<template>
  <el-container id="app">
    <el-aside width="120px">
      <SideBar></SideBar>
    </el-aside>
    <el-main>
      <router-view class="contain"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import SideBar from './components/SideBar';
export default {
    name: 'App',
    components: { SideBar },
    created () {
        this.$router.replace('/');
    }
};
</script>
<style>
#app {
  display: flex;
  flex: 1;
  flex-direction: row;
  min-height: 100%;
}
.contain {
  display: flex;
  flex: 1;
  min-height: 100%;
}
</style>
