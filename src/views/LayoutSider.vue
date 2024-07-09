<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { useStores } from "@/stores";

const stores = useStores();

const menuOnUpdate = function (key: string, item: MenuOption) {
  stores.list.key = item.key;
  stores.loadContent();
};
</script>

<template>
  <n-menu
    :options="stores.lists"
    :value="stores.list.key"
    :on-update:value="menuOnUpdate"
  ></n-menu>
</template>
