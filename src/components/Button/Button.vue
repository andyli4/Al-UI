<template>
    <button 
    ref="_ref"
    class="al-button" 
    :class="{
        [`al-button--${type}`]:type,
        [`al-button--${size}`]:size,
        'is-plain':plain,
        'is-round':round,
        'is-circle':circle,
        'is-disabled':disabled || loading,
    }"
    :disabled="disabled || loading">
       <Al-Icon icon="spinner" spin v-if="loading"></Al-Icon>
       <Al-Icon :icon="icon"  v-if="icon"></Al-Icon>
       <span v-if="$slots.default">
         <slot></slot>
        </span>
       
    </button>
</template>

<script setup>
import { ref } from 'vue';
import propObj from './Props'
defineOptions({
    name:'Al-Button'
})
defineProps(propObj);

//Through _ref, we are able to get button element
const _ref=ref(null);

defineExpose({
    ref:_ref,
})

</script>

<style lang="scss" scoped>

</style>