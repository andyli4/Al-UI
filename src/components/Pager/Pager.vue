<template>
    <!--Outermost container-->
    <div class="al-pager"
    :class="{
        [`al-pager--${type}`]:type,
        [`al-pager--${size}`]:size,
    }"
    >
        <!--First page-->
        <a :class="currentPage===1 ? 'disabled' : ''" @click.prevent="goToFirstPage"><Al-Icon icon="angles-left"></Al-Icon></a>
        <!--Previous page-->
        <a :class="currentPage===1 ? 'disabled' : ''" @click.prevent="prevClick" :disabled="currentPage===1 ? true : false">
            Previous
        </a>
        <!--Number Area-->
        <a v-if="total>pagerCount&&currentPage>5" @click.prevent="pageClick(1)">1</a>
        <a v-if="total>pagerCount&&currentPage>5" >
            <Al-Icon icon="ellipsis" size="sm"></Al-Icon>
        </a>
        <a v-for="page in pager"
        :key="page"
        :class="page===currentPage ? 'active' :''"
        @click.prevent="pageClick(page)"
        >{{page}}</a>
        <a v-if="total>pagerCount && currentPage<total-4">
            <Al-Icon icon="ellipsis" size="sm"></Al-Icon>
        </a>
        <a v-if="total >pagerCount && currentPage <total-4" @click.prevent="pageClick(total)">{{total}}</a>

        <!--Next page-->
        <a :class="currentPage===total ? 'disabled' : ''"
        @click.prevent="nextClick"
        :disabled="currentPage===total ? true : false">
            Next
        </a>
        <!--Last page-->
        <a :class="currentPage===total ? 'disabled' : ''" @click.prevent="goToLastPage"> 
            <Al-Icon icon="angles-right"></Al-Icon></a>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import propObj from './prop'
defineOptions({
    name:"Al-Pager"
})
const props=defineProps(propObj)

//calculation for the number area
const pager=computed(()=>{
    const renderPage=[];
    if(props.total<=props.pagerCount){
        for(let i=1; i<=props.total;i++){
            renderPage.push(i);
        }
    }else{
        //There are 3 conditions when the total pages are greater than the page count in the number area
        if(props.currentPage <=5 ){
            //1. current page is on the left side of middle number [1] 2 3 4 5 ... 10
            for(let i=1; i<=5;i++){
                renderPage.push(i);
            }
        }else if(props.currentPage>= props.total -4 ){
            //2. current page is on the right side of middle number 1 2 ... 7 8 [9] 10
            for(let i=props.total-4; i<=props.total;i++){
               renderPage.push(i);
            }
        }else{
            //3. current page is close to the middle number 1 2 3 [4] 5 ... 10
            for(let i=props.currentPage-2; i<=props.currentPage+2;i++){
                renderPage.push(i);
            }
        }
    }
    return renderPage;
})

const emit=defineEmits(['current-change']);
const goToFirstPage=()=>{
    emit('current-change',1)
}
const goToLastPage=()=>{
    emit('current-change',props.total)
}
const prevClick=()=>{
    if(props.currentPage===1) return
    emit('current-change',props.currentPage-1)
}
const nextClick=()=>{
    if(props.currentPage===props.total) return
    emit('current-change',props.currentPage+1)
}
const pageClick=(page)=>{
    emit('current-change',page)
}
</script>

<style lang="scss" scoped>

</style>