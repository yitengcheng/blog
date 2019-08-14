<template>
  <div class="contain">
    <el-menu
      :default-active="activeIndex"
      class="titleMenu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item
        class="menuItem"
        v-for="(item,index) in menuList"
        :key="index"
        :index="item.path"
      >{{item.title}}</el-menu-item>
    </el-menu>
    <router-view class="contain"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "/cssPhoto",
      menuList: [
        { path: "/cssPhoto", title: "图片动画特效（相框）" },
        { path: "/weatherEffects", title: "天气动画特效" },
        { path: "/storeLoading", title: "商店" }
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {
    let flag = window.screen.width < 600;
    if (flag) {
      this.menuList.splice(0, 1);
      this.activeIndex = "/weatherEffects";
      this.$router.replace({
        path: "/weatherEffects"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.titleMenu {
  width: 100%;
  height: 60px;
}
.contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100%;
}
</style>
