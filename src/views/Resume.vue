<template>
  <div class="contain">
    <div class="title">
      <div class="nameTitle">范 泽 华</div>
      <div class="descTitle">Sofrware Developer</div>
    </div>
    <div class="infoWrraper">
      <div class="leftInfo">
        <el-image :src="headImg" class="header" fit="fill"></el-image>
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
        <div class="experienceTitle">系统开发</div>
        <div class="experienceText">从2019至今在贵州亿隆智达网络有限公司担任办公软件开发负责人</div>
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
    <div class="pastProjectsContain">
      <h2 class="pastProjects">过往项目</h2>
      <p class="pastProjectsTitle">四面通平台手机APP</p>
      <p class="pastProjectsText">工作职责：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>
        负责司机端，客户端，店面端页面搭建与业务逻辑编写，集成其他第三方库，带领小组攻克技术难点。
        负责审核小组成员代码。负责项目中所有公用代码封装及优化，配合后端完成项目中测试环境与线上环境的数据完整性。
      </p>
      <p class="pastProjectsText">工作业绩：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>使用reactNative及周边技术栈对项目进行编写，提高项目可维护性。
      </p>
      <p class="pastProjectsTitle">四面通平台网页端</p>
      <p class="pastProjectsText">工作职责：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>负责客户端，店面端页面搭建与业务逻辑编写。
      </p>
      <p class="pastProjectsText">工作业绩：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>使用react.js及周边技术栈对项目进行编写，学会了使用react的相关知识与语法。
      </p>
      <p class="pastProjectsTitle">四面通平台小程序</p>
      <p class="pastProjectsText">工作职责：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>负责业务员小程序页面搭建与业务逻辑编写。
      </p>
      <p class="pastProjectsText">工作业绩：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>使用微信小程序原生语言对项目进行编写，学会了微信小程序的相关内容。
      </p>
      <p class="pastProjectsText">工作业绩：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>使用react.js及周边技术栈对项目进行编写，学会了使用react的相关知识与语法。
      </p>
      <p class="pastProjectsTitle">亿隆集团OA办公系统</p>
      <p class="pastProjectsText">工作职责：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>
        负责项目前端页面搭建与业务逻辑编写。负责项目技术选型，搭建项目框架，集成第三方库。
        审核小组成员代码。负责项目中所有公用代码封装及优化。负责服务端的逻辑编写，数据库搭建。负责项目部署与实施。负责与其他部门沟通，分析不同部门业务需求。
      </p>
      <p class="pastProjectsText">工作业绩：</p>
      <p class="pastProjectsText">
        <span style="marginLeft:40px"></span>
        使用Vue及周边技术栈完成项目，前后端分离提高前后端开发效率。
        借助Vuex存储数据的状态，划分model数据使项目数据流更清晰。
        接入第三方excel生成工具实现项目表格导出。
        封装可复用组件及功能函数，方便重复使用。
      </p>
    </div>
    <div class="bottom">
        <a href="http://www.beian.miit.gov.cn">网站备案号：黔ICP备19005795号-1</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      headImg: require("@/assets/default.png")
    };
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
.pastProjectsContain {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin-left: 180px;
  margin-bottom: 50px;
  align-self: center;
}
.pastProjects {
  font-size: 18px;
  line-height: 40px;
  align-self: center;
}
.pastProjectsTitle {
  font-size: 16px;
  line-height: 30px;
}
.pastProjectsText {
  font-size: 14px;
  line-height: 30px;
}
.bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background-color: #666;
}
</style>
