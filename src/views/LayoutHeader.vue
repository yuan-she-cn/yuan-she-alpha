<script setup lang="ts">
import { onMounted } from "vue";
import type { MenuOption } from "naive-ui";
import { useStores } from "@/stores";

const stores = useStores();

const menuOnUpdate = function (key: string, item: MenuOption) {
  stores.menu.key = item.key;
  stores.loadLists();
};

onMounted(() => {
  stores.loadMenus();
});
</script>

<template>
  <div class="layout-header">
    <div class="logo-container">
      <img class="logo" src="@/assets/logo.ico" />
      <span class="brand">猿社</span>
    </div>
    <div class="menu-container">
      <div class="menu-div">
        <n-menu
          :options="stores.menus"
          mode="horizontal"
          :on-update:value="menuOnUpdate"
        ></n-menu>
      </div>
      <div class="search-div"><n-input placeholder="搜索"></n-input></div>
    </div>
    <div class="button-container">
      <n-button quaternary>English</n-button>
      <n-button quaternary>深色</n-button>
      <n-button quaternary>GitHub</n-button>
      <n-button quaternary>2.38.2</n-button>
    </div>
  </div>
</template>

<style scoped>
.layout-header {
  box-sizing: border-box;
  width: 100vw;
  height: 64px;
  border-bottom: 1px solid #efeff5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  .logo-container {
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .logo {
    }
    .brand {
      box-sizing: border-box;
      width: 204px;
      padding-left: 8px;
      font-family: "SimSun";
      font-size: 24px;
      font-weight: 700;
      color: #333639;
    }
  }
  .menu-container {
    box-sizing: border-box;
    padding: 0 32px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .menu-div {
    }
    .search-div {
      box-sizing: border-box;
      width: 220px;
      padding-left: 20px;
    }
  }
  .button-container {
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
