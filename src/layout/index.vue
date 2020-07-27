<template>
  <div>
    <div class="header">1234555555555554564444444444</div>
    <div class="sideBar">

      <el-menu
        default-active="1"
        class="el-menu-vertical"
        background-color="#304156"
        text-color="rgb(191, 203, 217)"
        active-text-color="#409EFF"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="0" disabled>
          <i class="el-icon-document" />
          <span slot="title">logo</span>
        </el-menu-item>
        <template
          v-for="(item, index) in SYS_MENU"
        >
          <el-submenu v-if="item.child" :key="(item.child||{}).index" :index="item.index">
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ item.name }} {{ test(item.child) }}</span>
            </template>
            <template v-for="(child,i) in item.child">
              <el-menu-item :key="index+'-'+i" :index="child.index">{{ child.name }}</el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item v-else :key="item.index" :index="item.index">
            <i class="el-icon-menu" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div>
      <div class="footer">1234555555555554564444444444</div>
    </div>

    <!-- <div style="height:100%;overflow:hidden;width: 200px !important;background-color: #304156;position: fixed;top: 0; bottom: 0;left: 0;"> -->
    <!-- 待办事项：

    自定义指令
    自定义组件 -->

  </div>
</template>
<script>
export default {
  name: 'Layout',
  // components: { SocialSign },
  data() {
    return {

    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    test(a) {
      console.log(a)
    },
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style scoped>
/* .el-menu-vertical {
  width: 200px;
  min-height: 400px;
} */
.sideBar {
  height:100%;
  overflow:hidden;
  width: 200px !important;
  background-color: #304156;
  position: fixed;
  top: 50px;
  bottom: 50px;
  left: 0;
}
.header {
  position: fixed;
  width: 100%;
  background-color: antiquewhite;
  top: 0px;
  height: 50px;
  left: 0px;
}
.footer {
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: cadetblue;
  bottom: 0;
  left: 0;
}
</style>

