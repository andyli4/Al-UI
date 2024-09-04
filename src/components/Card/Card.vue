<template>
    <div class="al-card" :style="width ? {width: width + 'px'} : {}">
        
        <div class="al-card-img" :style="imgHeight ? {height:height+'px'} :{}">
            <img :src="imgSrc" alt="img">
        </div>

        <div v-if="summary" class="al-card-summary">
            {{summary}}
        </div>

        <div v-else class="al-card-summary">
            <slot ></slot>
        </div>

        <div class="al-card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div >

</template>

<script setup>
import propObj from './prop'
defineOptions({
    name:'Al-Card'
})
defineProps(propObj)

</script>

<style lang="scss" scoped>

</style>