<template>
  <div class="contain">
    <div class="title">
      <div class="nameTitle">范 泽 华</div>
      <div class="descTitle">Sofrware Developer</div>
    </div>
    <div class="infoWrraper">
      <div class="leftInfo">
        <el-image src="static/default.png" class="header" fit="fill"></el-image>
        <div class="userInfo">联系方式：13984387205</div>
        <div class="userInfo">地址：贵州省贵阳市乌当区温泉路</div>
        <div class="userInfo">个人主页：http://www.fanzehua.cn</div>
      </div>
      <div class="rightInfo">
        <div class="experience">过往经历</div>
        <div class="experienceTitle">酒店财务</div>
        <div class="experienceText">从2010-2014担任贵州峰润喀斯特酒店财务</div>
        <div class="experienceTitle">自主创业</div>
        <div class="experienceText">从2014-2015自主创业经营一家桌游卡牌店</div>
        <div class="experienceTitle">开发人员</div>
        <div class="experienceText">从2017-2019在贵州亿隆四面通担任网页与手机APP的研发工作</div>
        <div class="experienceTitle">平台运维</div>
        <div class="experienceText">从2019至今在贵州亿隆智达网络有限公司担任平台运维</div>
        <div class="experience">S K I L L S</div>
        <div class="skillWarrper">
          <div class="skill">HTML5</div>
          <div class="skill">CSS3</div>
          <div class="skill">Python</div>
          <div class="skill">Node.js</div>
          <div class="skill">React</div>
          <div class="skill">VUE</div>
          <div class="skill">JS</div>
          <div class="skill">小程序</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {};
    },
    computed: {},
    methods: {}
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.title {
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.nameTitle {
  font-size: 30px;
  font-family: "SimSun";
  font-weight: 700;
}
.descTitle {
  color: #666;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
}
.infoWrraper {
  display: flex;
  flex: 1;
  margin: 0px 10px;
}
.leftInfo {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 50px;
}
.header {
  width: 180px;
  height: 200px;
}
.userInfo {
  font-size: 16px;
  text-align: center;
  line-height: 60px;
}
.rightInfo {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.experience {
  font-size: 18px;
  line-height: 40px;
}
.experienceTitle {
  font-size: 16px;
  line-height: 30px;
}
.experienceText {
  font-size: 14px;
  line-height: 30px;
}
.skillWarrper {
  display: flex;
  width: 400px;
  height: 200px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.skill {
  height: 60px;
  width: 60px;
  font-size: 16px;
  text-align: center;
  line-height: 60px;
  border: 1px solid #333;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
