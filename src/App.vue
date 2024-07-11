<script setup lang="ts">
import LayoutHeader from "@/views/LayoutHeader.vue";
import LayoutSider from "@/views/LayoutSider.vue";
import { RouterView } from "vue-router";
import { useStores } from "@/stores";
import { dateZhCN, zhCN } from "naive-ui";

const stores = useStores();
</script>

<template>
  <n-config-provider
    :theme="stores.naiveTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
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
        <n-layout-content class="layout-content" :native-scrollbar="false">
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.layout-sider {
  height: calc(100vh - 64px);
}
.layout-content {
  height: calc(100vh - 64px);
}
</style>
