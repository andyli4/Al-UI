
<template>
  <h1 class="row-title">基础用法</h1>
  <div class="row">
    <Al-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      hideAfterClick
    >
      <Al-Button type="primary">点击打开下拉菜单</Al-Button>
    </Al-Dropdown>
  </div>
  <h1 class="row-title">手动打开和关闭</h1>
  <div class="row">
    <Al-Dropdown
      placement="bottom"
      trigger="click"
      manual
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      ref="dropdownRef"
    >
      <Al-Button type="primary">手动打开下拉菜单</Al-Button>
    </Al-Dropdown>
  </div>
  <div class="row">
    <Al-Button @click="openClick">打开</Al-Button>
    <Al-Button @click="closeClick">关闭</Al-Button>
  </div>
  <h1 class="row-title">支持VNode节点</h1>
  <div class="row">
    <Al-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options2"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <Al-Button type="primary">点击打开下拉菜单</Al-Button>
    </Al-Dropdown>
  </div>
</template>

<script setup>
import {ref,h} from 'vue'
const dropdownRef = ref(null)


const options=[
  {key:1,label:'item1'},
  {key:2,label:'item2'},
  {key:3,label:'item3',disabled:true},
  {key:4,label:'item4',divided:true},
]
const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' }
]
//callback function for state changing of dropdown
const visibleChangeHandler=(e)=>{
  console.log(`visibleChangeHandler:${e? 'display' :'hidden'}`);
}
//callback function for selecting options in the dropdown
const selectHandler=(item)=>{
  console.log(`selecthandler: ${item.label}`)
}

const openClick = () => {
  dropdownRef.value.show()
}

const closeClick = () => {
  dropdownRef.value.hide()
}
</script>
