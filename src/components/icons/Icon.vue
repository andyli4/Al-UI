<template>
    <i class="al-icon" :class="{[`al-icon--${type}`]:type}">
        <!--from fontawesome-->
        <!-- secondary packaging -->
        <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
    </i>
</template>

<script setup>
import { computed } from "vue";
import propObj from "./props"
import { omit } from "lodash-es";
defineOptions({
    name:'Al-Icon'
})
const props=defineProps(propObj);

//Using omit as filter of the properties we don't need.
const filteredProps=computed(()=>omit(props,['type']));
</script>

<style lang="scss" scoped>

</style>