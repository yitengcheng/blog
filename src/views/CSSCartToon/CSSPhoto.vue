<template>
  <div class="box">
    <!-- 图片 -->
    <el-image :src="img" alt fit="contain" />
    <!-- 内容 -->
    <div class="box-inner-content">
      <h3 class="title">FanZehua</h3>
      <span class="post">Web Developer</span>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            img: require("@/assets/women.jpg")
        };
    }
};
</script>
<style lang='scss' scoped>
.box {
  margin: 100px auto;
  width: 300px;
  height: 500px;
  overflow: hidden;
  position: relative;
}
.box:before {
  content: "";
  display: block;
  border: 30px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 5px;
  left: 5px;
  bottom: 5px;
  right: 5px;
  opacity: 1;
  z-index: 2;
  transition: all 0.3s ease 0s;
}
.box:hover:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 10px solid rgba(172, 50, 50, 0.18);
}
.box:after {
  content: "";
  display: block;
  border: 8px solid #fff;
  position: absolute;
  top: 35px;
  left: 35px;
  bottom: 35px;
  right: 35px;
  opacity: 1;
  z-index: 1;
  transition: all 0.5s ease 0s;
}
.box:hover:after {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}

/* 图片 */
.box img {
  width: 100%;
  height: auto;
  transform: scale(1.2);
  transition: all 0.5s ease 0s;
}
.box:hover img {
  transform: scale(1);
}

/* 文字内容 */
.box .box-inner-content {
  position: absolute;
  left: 45px;
  bottom: 5px;
  right: 45px;
  text-align: center;
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease 0s;
}
.box:hover .box-inner-content {
  opacity: 1;
  bottom: 20px;
  text-shadow: 0 0 10px #000;
}

/* 标题 */
.box .title {
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  color: #fff;
}

/* 文本 */
.box .post {
  display: block;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 10px;
}
</style>
