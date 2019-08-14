<template>
  <el-container id="app" style="backgroundColor:#f3f3f3">
    <transition name="sideBar">
      <el-aside v-if="showBar" width="151px" class="sidebar-container">
        <el-scrollbar style="height:100%">
          <SideBar />
        </el-scrollbar>
      </el-aside>
    </transition>
    <el-container>
      <el-scrollbar style="width:100%;height:100%;backgroundColor:#fff">
        <el-button
          @click="barFlag"
          class="showBarBtn"
          :icon="showBar?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"
        />
        <el-main class="main">
          <router-view class="mainContain"></router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: { SideBar },
  created() {
    this.$router.replace("/");
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  data() {
    return {
      showBar: true
    };
  },
  methods: {
    barFlag() {
      this.showBar = !this.showBar;
    }
  }
};
</script>
<style lang="scss" >
#app {
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
}
.main {
  height: 100%;
  margin: 0;
  padding: 0 !important;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
  margin-bottom: 0px !important;
}
.sidebar-container {
  overflow: hidden;
  background-color: #545c64;
}
.showBarBtn {
  padding: 0 !important;
  width: 15px !important;
  height: 50px !important;
  background-color: gray !important;
  color: #fff !important;
  position: absolute !important;
  top: 50% !important;
}
.sideBar-enter,
.sideBar-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.sideBar-leave,
.sideBar-enter-to {
  transform: translate3d(0, 0, 0);
}
.sideBar-enter-active,
.sideBar-leave-active {
  transition: all 0.3s;
}
</style>
