<template>
  <el-container id="app">
    <el-aside width="150px">
      <Header></Header>
    </el-aside>
    <el-main>
      <router-view class="contain"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from './components/Header';
export default {
    name: 'App',
    components: { Header }
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
