<template>
  <div class="main_page">
    {{ count }}
    详情
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<style scoped lang="less">

</style>
