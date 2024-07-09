import { defineStore } from "pinia";
import type { MenuOption } from "naive-ui";
import axios from "axios";

export const useStores = defineStore("stores", {
  state: () => ({
    menu: {} as MenuOption,
    menus: [] as MenuOption[],
    list: {} as MenuOption,
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
