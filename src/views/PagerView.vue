<template>
  <h1 class="row-title">Situation one :The total number of pages is greater than the maximum number of page numbers displayed, which cannot be displayed at this time.</h1>
  <div class="row">
    <Al-Pager
    :total="20"
    :currentPage="currentPage1"
    @current-change="(page)=>(currentPage1=page)"></Al-Pager>
  </div>
  <h1 class="row-title">Situation two</h1>
  <div class="row">
    <Al-Pager
    :total="10"
    :currentPage="currentPage2"
    @current-change="(page)=>(currentPage2=page)"></Al-Pager>
  </div>
  <h1 class="row-title">Situation three: different color</h1>
  <div class="row">
    <Al-Pager
    :total="10"
    type="warning"
    :currentPage="currentPage2"
    @current-change="(page)=>(currentPage2=page)"></Al-Pager>
  </div>
  <h1 class="row-title">Situation four: different sizes</h1>
  <div class="row">
    <Al-Pager
    :total="10"
    size="large"
    :currentPage="currentPage2"
    @current-change="(page)=>(currentPage2=page)"></Al-Pager>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const currentPage1=ref(1)
const currentPage2=ref(1)
</script>
