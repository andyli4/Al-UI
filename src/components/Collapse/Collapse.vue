<template>
    <div class="al-collapse">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref,provide } from 'vue';
import {collapseProps,collapseContextKey} from './prop'
defineOptions({
    name:"Al-Collapse"
})
const emit=defineEmits(['change','update:modelValue']);
const props=defineProps(collapseProps);

const activeNames=ref(props.modelValue);

//through dependency injection, collapseItem will receieve this method
const handleItemClick=(itemName)=>{
    let _activeNamesArr=[...activeNames.value];
    if(props.accordion){
        //new Arr is used to store the part users clicked
        //if this element already exists in activeNames, this part has been clicked already
        //then this part should be closed
        _activeNamesArr=[activeNames.value[0]===itemName ? '' :itemName]
    }else{
        const index=_activeNamesArr.indexOf(itemName);
        if(index>-1){
            _activeNamesArr.splice(index,1)
        }else{
            _activeNamesArr.push(itemName)
        }
    }
    //update arr
    activeNames.value=_activeNamesArr;
    //send the new arr to the parent component
    emit('update:modelValue',_activeNamesArr);
    emit('change',_activeNamesArr);
}
provide(collapseContextKey,{activeNames,handleItemClick})
</script>

<style lang="scss" scoped>

</style>