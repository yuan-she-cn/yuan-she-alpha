<script setup lang="ts">
import LayoutHeader from "@/views/LayoutHeader.vue";
import LayoutSider from "@/views/LayoutSider.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <n-layout>
    <n-layout-header>
      <LayoutHeader />
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        class="layout-sider"
        bordered
        :native-scrollbar="false"
        width="300"
      >
        <LayoutSider />
      </n-layout-sider>
      <n-layout-content>
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.layout-sider {
  height: calc(100vh - 64px);
}
</style>
