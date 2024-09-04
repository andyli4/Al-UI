<template>
  <h1 class="row-title">Collapse</h1>
  <div class="row">
    <Al-Collapse v-model="opened" @change="changeHandler">
      <Al-CollapseItem name="a" title="Home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima labore illum saepe velit libero quidem, ea iure ratione aut eum perferendis sapiente dolore consectetur similique fugit, quae quo perspiciatis!</Al-CollapseItem>
      <Al-CollapseItem name="b" title="Address">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo placeat cum quae quaerat repellat necessitatibus error assumenda quibusdam suscipit repellendus mollitia dolores, dolorum obcaecati in nihil praesentium debitis animi commodi?</Al-CollapseItem>
      <Al-CollapseItem name="c" title="School">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea architecto harum excepturi non eos molestiae impedit, in molestias labore? At sequi non saepe debitis iusto rem asperiores recusandae accusantium!</Al-CollapseItem>
      <Al-CollapseItem name="d" title="Contact">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum illum accusantium est quod hic, dicta maiores, eaque unde qui blanditiis animi aliquid itaque facere. Culpa sequi expedita soluta vitae!</Al-CollapseItem>
    </Al-Collapse>
  </div>
  <h1 class="row-title">Accordion</h1>
  <div class="row">
    <Al-Collapse v-model="opened2" @change="changeHandler" accordion>
      <Al-CollapseItem name="a" title="Home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima labore illum saepe velit libero quidem, ea iure ratione aut eum perferendis sapiente dolore consectetur similique fugit, quae quo perspiciatis!</Al-CollapseItem>
      <Al-CollapseItem name="b" title="Address">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo placeat cum quae quaerat repellat necessitatibus error assumenda quibusdam suscipit repellendus mollitia dolores, dolorum obcaecati in nihil praesentium debitis animi commodi?</Al-CollapseItem>
      <Al-CollapseItem name="c" title="School">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea architecto harum excepturi non eos molestiae impedit, in molestias labore? At sequi non saepe debitis iusto rem asperiores recusandae accusantium!</Al-CollapseItem>
      <Al-CollapseItem name="d" title="Contact">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum illum accusantium est quod hic, dicta maiores, eaque unde qui blanditiis animi aliquid itaque facere. Culpa sequi expedita soluta vitae!</Al-CollapseItem>
    </Al-Collapse>
  </div>
  <h1 class="row-title">Custom Collapse</h1>
  <div class="row">
    <Al-Collapse v-model="opened3" accordion>
      <Al-CollapseItem name="Consistency" title="Consistency">
        <template #title>
          <div class="titleContainer">
            <span class="title">Consistency</span>
            <Al-Icon icon="house" />
          </div>
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </Al-CollapseItem>
      <Al-CollapseItem name="Feedback">
        <template #title>
          <div class="titleContainer">
            <span class="title">Feedback</span>
            <Al-Icon icon="image" />
          </div>
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </Al-CollapseItem>
      <Al-CollapseItem name="Efficiency">
        <template #title>
          <div class="titleContainer">
            <Al-Icon icon="phone" />
            <span class="title">Efficiency</span>
          </div>
        </template>
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly
          understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to
          identify and frees them from memorizing and recalling.
        </div>
      </Al-CollapseItem>
      <Al-CollapseItem name="Controllability" title="Controllability">
        <template #title>
          <div class="titleContainer">
            <Al-Icon icon="star" />
            <span class="title">Controllability</span>
          </div>
        </template>
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including
          canceling, aborting or terminating current operation.
        </div>
      </Al-CollapseItem>
    </Al-Collapse>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const opened=ref(['a','b']);
const opened2=ref(['a']);
const opened3=ref(['b']);
const changeHandler=(arr)=>{
  console.log(arr)
}
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>