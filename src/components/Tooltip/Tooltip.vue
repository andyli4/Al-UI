<template>
  <div class="al-tooltip" v-on="outerEvents">
    <div class="al-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot></slot>
    </div>
    <div class="al-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup>
import { ref,watch,reactive,computed } from "vue";
import { createPopper } from "@popperjs/core";
import propObj from "./prop"
import { debounce } from "lodash-es";
defineOptions({
    name:"Al-Tooltip"
})
const props=defineProps(propObj);
const emit=defineEmits(['visible-change']);

let popperInstance=null;
//Calculating Properties as third parameters for popperinstance
const popperOptions=computed(()=>({
    placement:props.placement,
    modifiers: [
       {
         name: 'offset',
         options: {
           offset: [0, 6],
         },
       },
    ],
}));


//stores all kind of events for trigger element
let events=reactive({});
let outerEvents=reactive({});
const openDebounce=debounce(()=>{
    isOpen.value=true;
    emit('visible-change',true);
},props.openDelay)
const closeDebounce=debounce(()=>{
    isOpen.value=false;
    emit('visible-change',false);
},props.closeDelay)
const open=()=>{
    closeDebounce.cancel()
    openDebounce();
};
const close=()=>{
    openDebounce.cancel()
    closeDebounce();
};
const isOpen=ref(false);
const triggerRef=ref(null);
const popperRef=ref(null);
// Popper should be created when the state of isOpen changes
watch(isOpen,(newValue)=>{
    if(newValue){
        if(triggerRef.value &&popperRef.value){
            popperInstance=createPopper(triggerRef.value,popperRef.value,popperOptions.value);
        }else{
            popperInstance?.destroy();
        }
    }
},{flush:'post'})

//binding events for trigger element
const attachEvents=()=>{
    //judging which trigger this is
    //hover or click
    if(props.trigger==='hover'){
        events['mouseenter']=open;
        outerEvents['mouseleave']=close;
    }else if(props.trigger==='click'){
        events['click']=()=>(isOpen.value ? close() :open())
    }
}
if(!props.manual){
    attachEvents();
}

//expose close/open methods to the user
defineExpose({
    show:open,
    hide:close,
})
</script>

<style lang="scss" scoped></style>
