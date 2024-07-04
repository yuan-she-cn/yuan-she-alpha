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
      <n-layout-sider>
        <LayoutSider />
      </n-layout-sider>
      <n-layout-content>
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
