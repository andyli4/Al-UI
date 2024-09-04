
<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <Al-Tooltip content="this is a test" placement="top" @visible-change="handle">
      <Al-Button type="primary">top</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="bottom">
      <Al-Button type="warning">bottom</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="left">
      <Al-Button type="danger">left</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="right">
      <Al-Button type="success">right</Al-Button>
    </Al-Tooltip>
  </div>
  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <Al-Tooltip content="this is a test" placement="top" trigger="click">
      <Al-Button type="primary">top</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="bottom" trigger="click">
      <Al-Button type="warning">bottom</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="left" trigger="click">
      <Al-Button type="danger">left</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="right" trigger="click">
      <Al-Button type="success">right</Al-Button>
    </Al-Tooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <Al-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <Al-Button type="primary">right</Al-Button>
    </Al-Tooltip>
  </div>
  <div class="row">
    <Al-Button @click="openHandler">打开提示框</Al-Button>
    <Al-Button @click="closeHandler">关闭提示框</Al-Button>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <Al-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <Al-Button type="primary">top</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip
      content="this is a test"
      placement="bottom"
      :open-delay="2000"
      :close-delay="2000"
    >
      <Al-Button type="warning">bottom</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
      <Al-Button type="danger">left</Al-Button>
    </Al-Tooltip>
    <Al-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
      <Al-Button type="success">right</Al-Button>
    </Al-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle=(isShow)=>{
  if(isShow){
    console.log("show")
  }else{
    console.log("hidden")
  }
}
const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}

</script>