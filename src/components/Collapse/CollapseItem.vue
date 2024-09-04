<template>
    <div class="al-collapse-item" :class="{
        'is-disabled':disabled,
    }">
        <!--title-->
        <div class="al-collapse-item__header" 
            :class="{
                'is-disabled':disabled,
                'is-active':isActive
            }" 
            :id="`item-header-${name}`"
            @click="itemClickHandler">
            <slot name="title">{{ title }}</slot>
            <Al-Icon icon="angle-right" class="header-angle"></Al-Icon>
        </div>
        <!--content-->
        <Transition name="slide" v-on="TransitionEvents">
            <div class="al-collapse-item__wrapper" v-show="isActive">
            <div class="al-collapse-item__content" :id="`item-content-${title}`">
                <slot></slot>
            </div>
        </div>
        </Transition>
    </div>
</template>

<script setup>
import {inject,computed} from 'vue'
import { collapseItemProps,collapseContextKey } from './prop';
defineOptions({
    name:"Al-CollapseItem"
})

const collapseContext=inject(collapseContextKey);
const props=defineProps(collapseItemProps);

//if 'name' value exists in 'activeNames' arr that provided by Collapse component
// then this section should be actived
const isActive=computed(()=>collapseContext.activeNames.value.includes(props.name))

const itemClickHandler=()=>{
    if(props.disabled) return
    collapseContext.handleItemClick(props.name);
}

const TransitionEvents={
    beforeEnter(el){
        el.style.height='0px';
        el.style.overflow='hidden';
    },
    enter(el){
        el.style.height=el.scrollHeight+'px';
    },
    afterEnter(el){
        el.style.height='';
        el.style.overflow='';
    },
    beforeLeave(el){
        el.style.height=el.scrollHeight+'px';
        el.style.overflow='hidden';
    },
    leave(el){
        el.style.height='0px';
    },
    afterLeave(el){
        el.style.height='';
        el.style.overflow='';
    },
}
</script>

<style lang="scss" scoped>

</style>