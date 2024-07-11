<script setup lang="ts">
import { onMounted } from "vue";
import { darkTheme, type MenuOption } from "naive-ui";
import { useStores } from "@/stores";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const stores = useStores();

const menuOnUpdate = async function (key: string, item: MenuOption) {
  stores.menu.key = item.key;
  await stores.loadLists();
  // @ts-ignore
  const listKey = getFirstMD(stores.lists);
  stores.list.key = listKey;
  await stores.loadContent();
};

const getFirstMD = function (items: MenuOption[]): string {
  const key = items[0].key as string;
  if (key.endsWith(".md")) {
    return key;
  } else {
    return getFirstMD(items[0].children as MenuOption[]);
  }
};

const searchOnUpdate = async function (value: string) {
  const menuAndList = value.split("|");
  stores.menu.key = menuAndList[0];
  await stores.loadLists();
  stores.list.key = menuAndList[1];
  await stores.loadContent();
};

const changeTheme = function () {
  if (stores.naiveTheme) {
    stores.themeName = "深色";
    stores.naiveTheme = null;
    stores.editorTheme = undefined;
    stores.borderColor = "rgb(239, 239, 245)";
    stores.logoImg = logoLight;
  } else {
    stores.themeName = "浅色";
    stores.naiveTheme = darkTheme;
    stores.editorTheme = "dark";
    stores.borderColor = "rgba(255, 255, 255, 0.09)";
    stores.logoImg = logoDark;
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
  stores.loadSearchOptions();
});
</script>

<template>
  <div class="layout-header" :style="{ borderBottomColor: stores.borderColor }">
    <div class="logo-container">
      <img class="logo" :src="stores.logoImg" />
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
      <div class="search-div">
        <n-select
          placeholder="搜索"
          :show-arrow="false"
          :consistent-menu-width="false"
          :show-checkmark="false"
          placement="bottom"
          filterable
          :options="stores.searchOptions"
          :on-update:value="searchOnUpdate"
        >
        </n-select>
      </div>
    </div>
    <div class="button-container">
      <n-button quaternary @click="changeTheme">
        {{ stores.themeName }}
      </n-button>
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
  border-bottom-width: 1px;
  border-bottom-style: solid;
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
      width: 32px;
      height: 32px;
    }
    .brand {
      box-sizing: border-box;
      width: 204px;
      padding-left: 8px;
      font-family: "SimSun";
      font-size: 24px;
      font-weight: 700;
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
