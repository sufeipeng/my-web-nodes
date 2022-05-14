<template>
  <header>
    <el-menu
      :default-active="route.path"
      class="el-menu-header"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item index="/">
        首页
      </el-menu-item>
      <el-menu-item index="/details">
        详情
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 60px;
  color: #fff;
  user-select:none;
  :v-deep .el-menu--horizontal {
    border-color: #545c64;
  }
}
</style>