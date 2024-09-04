
<template>
  <h1 class="row">Default</h1>
  <div class="row">
    <Al-Button>Default</Al-Button>
    <Al-Button type="primary">Primary</Al-Button>
    <Al-Button type="info">Info</Al-Button>
    <Al-Button type="success">Success</Al-Button>
    <Al-Button type="warning">Warning </Al-Button>
    <Al-Button type="danger">Danger </Al-Button>
  </div>
  <h1 class="row-title">Light</h1>
  <div class="row">
    <Al-Button plain>Default</Al-Button>
    <Al-Button type="primary" plain>Primary</Al-Button>
    <Al-Button type="info" plain>Info</Al-Button>
    <Al-Button type="success" plain>Success</Al-Button>
    <Al-Button type="warning" plain>Warning</Al-Button>
    <Al-Button type="danger" plain>Danger </Al-Button>
  </div>
  <h1 class="row-title">Round</h1>
  <div class="row">
    <Al-Button round>Default</Al-Button>
    <Al-Button type="primary" round>Primary</Al-Button>
    <Al-Button type="info"    round>Info</Al-Button>
    <Al-Button type="success" round>Success</Al-Button>
    <Al-Button type="warning" round>Warning</Al-Button>
    <Al-Button type="danger"  round>Danger </Al-Button>
  </div>
  <h1 class="row-title">Disabled</h1>
  <div class="row">
    <Al-Button disabled>Default</Al-Button>
    <Al-Button type="primary" disabled>Primary</Al-Button>
    <Al-Button type="info"    disabled>Info</Al-Button>
    <Al-Button type="success" disabled>Success</Al-Button>
    <Al-Button type="warning" disabled>Warning</Al-Button>
    <Al-Button type="danger"  disabled>Danger </Al-Button>
  </div>
  <h1 class="row-title">Loading</h1>
  <div class="row">
    <Al-Button loading>Default</Al-Button>
    <Al-Button type="primary" loading>Primary</Al-Button>
    <Al-Button type="info"    loading>Info</Al-Button>
    <Al-Button type="success" loading>Success</Al-Button>
    <Al-Button type="warning" loading>Warning</Al-Button>
    <Al-Button type="danger"  loading>Danger </Al-Button>
  </div>
  <h1 class="row-title">Icon Button</h1>
  <div class="row">
    <Al-Button icon="file">File</Al-Button>
    <Al-Button type="primary" icon="gear">Gear</Al-Button>
    <Al-Button type="info"    icon="folder" plain>Folder</Al-Button>
    <Al-Button type="success" icon="bug" plain>Bug</Al-Button>
    <Al-Button type="warning" icon="code" round>Code</Al-Button>
    <Al-Button type="danger"  icon="cube" round>Cube </Al-Button>
  </div>
  <h1 class="row-title">Different Sizes</h1>
  <div class="row">
    <Al-Button icon="file">File</Al-Button>
    <Al-Button type="primary" icon="gear" size="small">Gear</Al-Button>
    <Al-Button type="info"    icon="folder" plain>Folder</Al-Button>
    <Al-Button type="success" icon="bug" plain>Bug</Al-Button>
    <Al-Button type="warning" icon="code" round size="small">Code</Al-Button>
    <Al-Button type="danger"  icon="cube" round size="large">Cube </Al-Button>
  </div>
  <h1 class="row-title">Circle</h1>
  <div class="row">
    <Al-Button icon="file" circle></Al-Button>
    <Al-Button type="primary" icon="gear" circle></Al-Button>
    <Al-Button type="info"    icon="folder" circle plain></Al-Button>
    <Al-Button type="success" icon="bug"    circle plain></Al-Button>
    <Al-Button type="warning" icon="code"   circle disabled></Al-Button>
    <Al-Button type="danger"  icon="cube"   circle disabled></Al-Button>
  </div>
  <h1 class="row-title">Button handler</h1>
  <div class="row">
    <Al-Button icon="file" @click="clickHandler" ref="btnRef"></Al-Button>
    <Al-Button type="primary" icon="gear" circle></Al-Button>
    <Al-Button type="info"    icon="folder" circle plain></Al-Button>
    <Al-Button type="success" icon="bug"    circle plain></Al-Button>
    <Al-Button type="warning" icon="code"   circle disabled></Al-Button>
    <Al-Button type="danger"  icon="cube"   circle disabled></Al-Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const btnRef=ref(null);
function clickHandler(){
  window.alert("This button has been clicked");
  console.log(btnRef.value.ref);
}
</script>

