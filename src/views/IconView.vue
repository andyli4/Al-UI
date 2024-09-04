<template>
  <h1 class="row-title">Normal</h1>
  <div class="row">
    <Al-Icon icon="user-secret" />
    <Al-Icon icon="bars" />
    <Al-Icon icon="shield-halved" />
    <Al-Icon icon="file" />
    <Al-Icon icon="filter" />
  </div>
  <h1 class="row-title">Different Sizes</h1>
  <div class="row">
    <Al-Icon icon="user-secret" size="2xs" />
    <Al-Icon icon="bars" size="xs" />
    <Al-Icon icon="shield-halved" size="sm" />
    <Al-Icon icon="file" size="lg" />
    <Al-Icon icon="filter" size="xl" />
  </div>
  <h1 class="row-title">Rotation and Flip</h1>
  <div class="row">
    <Al-Icon icon="user-secret" rotation="90" size="xl"></Al-Icon>
    <Al-Icon icon="bars" rotation="270" size="xl"></Al-Icon>
    <Al-Icon icon="shield-halved" flip="horizontal" size="xl"></Al-Icon>
    <Al-Icon icon="file" flip="vertical" size="xl"></Al-Icon>
    <Al-Icon icon="filter" flip="both" size="xl"></Al-Icon>
  </div>
  <h1 class="row-title">Rotation and Flip</h1>
  <div class="row">
    <Al-Icon icon="user-secret" rotation="90" size="xl"></Al-Icon>
    <Al-Icon icon="bars" rotation="270" size="xl"></Al-Icon>
    <Al-Icon icon="shield-halved" flip="horizontal" size="xl"></Al-Icon>
    <Al-Icon icon="file" flip="vertical" size="xl"></Al-Icon>
    <Al-Icon icon="filter" flip="both" size="xl"></Al-Icon>
  </div>
  <h1 class="row-title">Animation</h1>
  <div class="row">
    <Al-Icon icon="user-secret" size="xl" beat-fade />
    <Al-Icon icon="bars" size="xl" bounce />
    <Al-Icon icon="shield-halved" size="xl" shaken />
    <Al-Icon icon="file" size="xl" spin />
    <Al-Icon icon="filter" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">Custom Icon</h1>
  <div class="row">
    <Al-Icon icon="user-secret" size="xl" type="primary" />
    <Al-Icon icon="bars" size="xl" type="success" />
    <Al-Icon icon="shield-halved" size="xl" type="info" />
    <Al-Icon icon="file" size="xl" color="#8cc154" />
    <Al-Icon icon="filter" size="xl" color="rgba(122,42,12,.3)" />
  </div>
</template>

<script></script>
<style></style>
