<template>
  <div class="al-dropdown">
    <Al-Tooltip
      :trigger="trigger"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
      ref="tooltipRef"
    >
      <slot></slot>
      <!--generating content for slot in the Tooltip-->
      <template #content>
        <ul class="al-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" class="divided-placeholder"></li>
            <li
              class="al-dropdown__item"
              :class="{
                'is-disabled': item.disabled
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVnode :v-node="item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Al-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import propObj from './prop'
import RenderVnode from '../Common/RenderVnode';
defineOptions({
  name: 'Al-Dropdown'
})
const tooltipRef = ref(null)
const emit=defineEmits(['select','visible-change'])
const props=defineProps(propObj)
const itemClick=(item)=>{
    if(item.disabled) return
    emit('select',item)
    if (props.hideAfterClick) tooltipRef.value.hide()
}
const visibleChangeHandler=(e)=>{
    emit('visible-change',e);
}
defineExpose({
  show: () => {
    tooltipRef.value.show()
  },
  hide: () => {
    tooltipRef.value.hide()
  }
})
</script>


<style lang="scss" scoped>
.bar{
    color:red
}
</style>
