<script setup lang="ts">
import { onMounted } from "vue";
import type { MenuOption } from "naive-ui";
import { useStores } from "@/stores";

const stores = useStores();

const menuOnUpdate = async function (key: string, item: MenuOption) {
  stores.menu.key = item.key;
  await stores.loadLists();
  const listKey = getFirstMD(stores.lists);
  stores.list.key = listKey;
  await stores.loadContent();
};

const getFirstMD = function (items: MenuOption[]) {
  const key = items[0].key as string;
  if (key.endsWith(".md")) {
    return key;
  } else {
    return getFirstMD(items[0].children as MenuOption[]);
  }
};

const gotoGitHub = function () {
  window.open("https://github.com/yuan-she-cn/yuan-she-alpha");
};

const gotoGitee = function () {
  window.open("https://gitee.com/yuan-she-cn/yuan-she-alpha");
};

onMounted(() => {
  stores.loadMenus();
  stores.loadLists();
  stores.loadContent();
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
          mode="horizontal"
          :options="stores.menus"
          :value="stores.menu.key"
          :on-update:value="menuOnUpdate"
        ></n-menu>
      </div>
      <div class="search-div"><n-input placeholder="搜索"></n-input></div>
    </div>
    <div class="button-container">
      <n-button quaternary>深色</n-button>
      <n-button quaternary @click="gotoGitHub">GitHub</n-button>
      <n-button quaternary @click="gotoGitee">Gitee</n-button>
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
