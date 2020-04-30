<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
      Here we use window.print() to implement the feature of downloading PDF.
    </aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">
        Click to download PDF
      </el-button>
    </router-link>
    <div class="move-container" style="margin-top:20px" :class="disable">
      <div
        class="move"
        style="border-radius: 2px;margin-top: 5px;position:absolute; width:100px; height:100px; background:#5bc0de"
        @mousedown="move"
      >
        <div
          class="handle handle-mr"
          style="display: block;"
          @mousedown="scale('right')"
        />
        <div
          class="handle handle-ml"
          style="display: block;"
          @mousedown="scale('left')"
        />
      </div>
      <div
        v-if="showDrag"
        style="border-radius: 2px;position:absolute; width:100px; height:110px; background:#cdecf5"
      >
        <!-- <div class="handle handle-mr" style="display: block;" @mousedown="scale('right')" />
        <div class="handle handle-ml" style="display: block;" @mousedown="scale('left')" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScale: false,
      direction: null,
      disable: false,
      showDrag: false
    };
  },
  mounted() {},
  methods: {
    scale(direction) {
      this.isScale = true;
      this.direction = direction;
    },
    move(e) {
      this.showDrag = true;
      const odiv = document.querySelector(".move"); // 获取目标元素
      const x = e.clientX;
      const oBoxW = odiv.offsetWidth;
      // 算出鼠标相对元素的位置
      const disX = x - odiv.offsetLeft;
      // const disY = e.clientY - odiv.offsetTop

      // 设置宽
      document.onmousemove = e => {
        // 鼠标按下并移动的事件
        const left = e.clientX - disX;
        if (!this.isScale) {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          // 移动当前元素
          odiv.style.left = left + "px";
        } else {
          if (this.direction === "right") {
            odiv.style.width = oBoxW + e.clientX - x + "px";
          } else {
            odiv.style.left = left + "px";
            odiv.style.width = oBoxW - e.clientX + x + "px";
          }
        }
      };
      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.isScale = false;
      };
    }
  }
};
</script>
<style scoped>
.handle-ml {
  top: 50%;
  margin-top: -5px;
  left: -10px;
  cursor: w-resize;
}
.handle-mr {
  top: 50%;
  margin-top: -5px;
  right: -10px;
  cursor: e-resize;
}
.handle {
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  background: #eee;
  border: 1px solid #333;
  display: block;
}
.disable {
  pointer-events: none;
}
</style>
