<template>
  <el-container id="app" style="backgroundcolor: #f3f3f3">
    <transition name="sideBar">
      <el-aside v-if="showBar" width="151px" class="sidebar-container">
        <SideBar />
      </el-aside>
    </transition>
    <el-main style="overflow: hidden; padding: 0px">
      <el-button
        @click="barFlag"
        class="showBarBtn"
        :icon="showBar ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"
      />
      <router-view style="height: calc(100% - 60px)"></router-view>
      <el-footer class="bottom">
      <el-link href="http://www.beian.miit.gov.cn" target="_blank" style="color: #fff">网站备案号：黔ICP备19005795号-1</el-link>
    </el-footer>
    </el-main>
    
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
    mounted() {
        setTimeout(() => {
            window.L2Dwidget.init({
                pluginRootPath: "live2dw/",
                pluginJsPath: "lib/",
                pluginModelPath: "live2d-widget-model-miku/assets/",
                tagMode: false,
                debug: false,
                model: {
                    jsonPath:
            "/blog/live2dw/live2d-widget-model-miku/assets/miku.model.json",
                },
                display: { position: "right", width: 200, height: 300 },
                mobile: { show: true },
                log: false,
            });
        }, 1000);
    },
    data() {
        return {
            showBar: true,
        };
    },
    methods: {
        barFlag() {
            this.showBar = !this.showBar;
        },
    },
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
  overflow: hidden;
}
.sidebar-container {
  overflow: hidden;
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
.bottom {
    background-color: #409EFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
