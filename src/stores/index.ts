import { defineStore } from "pinia";
import type { MenuOption } from "naive-ui";
import axios from "axios";

export const useStores = defineStore("stores", {
  state: () => ({
    menu: { key: "/list/system/OpenEuler.json" } as MenuOption,
    menus: [] as MenuOption[],
    list: { key: "/note/system/OpenEuler/aa1.md" } as MenuOption,
    lists: [] as MenuOption[],
    content: "" as string,
  }),
  actions: {
    async loadMenus() {
      await axios.get("/menu/index.json").then((response) => {
        this.menus = response.data;
      });
    },
    async loadLists() {
      await axios.get(this.menu.key as string).then((response) => {
        this.lists = response.data;
      });
    },
    async loadContent() {
      await axios.get(this.list.key as string).then((response) => {
        this.content = response.data;
      });
    },
  },
});
