import { defineStore } from "pinia";
import axios from "axios";
import type { GlobalTheme, MenuOption } from "naive-ui";
import type { Themes } from "md-editor-v3";
import logoLight from "@/assets/logo-light.png";

export const useStores = defineStore("stores", {
  state: () => ({
    themeName: "深色" as string,
    naiveTheme: null as GlobalTheme | null,
    editorTheme: undefined as Themes | undefined,
    borderColor: "rgb(239, 239, 245)" as string,
    logoImg: logoLight as string,
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
