<template>
    <Transition name="dialog-fade">
        <!--outer container-->
        <div v-show="visible" class="al-dialog_wrapper">
        <!--This layer is used to control the width and height of the dialog-->
          <div class="al-dialog" :style="{width,marginTop:top}">
            <!--header-->
            <div class="al-dialog_header">
                <slot name="title">
                    <span class="al-dialog_title">{{title}}</span>
                </slot>
                <!--close button-->
                <button class="al-dialog_headerbtn" @click="clickHandler">
                    <Al-Icon icon="xmark"></Al-Icon>
                </button>
            </div>
            <!--content area-->
            <div class="al-dialog_body">
                <slot></slot>
            </div>
            <!--footer -->
            <div class="al-dialog_footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
          </div>
        </div>
    </Transition>
</template>

<script setup>
import probObj from "./prop"
defineOptions({
    name:'Al-Dialog'
})
defineProps(probObj)

const emit=defineEmits(['close'])
function clickHandler(){
    //Trigger close events of the parent component
    emit('close');
}
</script>

<style lang="scss" scoped>

</style>