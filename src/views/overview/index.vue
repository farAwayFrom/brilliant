<template>
  <div>
    待办事项：

    自定义指令
    自定义组件

    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="0" disabled>
        <i class="el-icon-document" />
        <span slot="title">logo {{ test() }}</span>
      </el-menu-item>
      <template
        v-for="(item, index) in SYS_MENU"
      >
        <el-submenu v-if="item.child" :key="index" :index="index">
          <template slot="title">
            <i class="el-icon-location" />
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(child,i) in item.child">
            <el-menu-item :key="index+'-'+i" :index="index+'-'+i">{{ child.name }}</el-menu-item>
          </template>
        </el-submenu>

        <el-menu-item v-else :key="index" :index="index">
          <i class="el-icon-menu" />
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Overview',
  // components: { SocialSign },
  data() {
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    test() {
      console.log(this.SYS_MENU)
    },
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style scoped>
.el-menu-vertical {
  width: 200px;
  min-height: 400px;
}
</style>
