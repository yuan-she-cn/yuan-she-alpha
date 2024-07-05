<script setup lang="ts">
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: "通用组件(15)",
    key: "1",
    children: [
      { label: "头像 Avater", key: "11" },
      { label: "按钮 Button", key: "12" },
      { label: "卡片 Card", key: "13" },
      { label: "轮播图 Carousel", key: "14" },
      { label: "折叠面板 Collapse", key: "15" },
      { label: "分割线 Divider", key: "16" },
      { label: "下拉菜单 Dropdown", key: "17" },
      { label: "文本省略 Ellipsis", key: "18" },
      { label: "渐变文字 Gradient Text", key: "19" },
      { label: "图标 Icon", key: "110" },
      { label: "页头 Page Header", key: "111" },
      { label: "标签 Tag", key: "112" },
      { label: "排印 Typography", key: "113" },
      { label: "水印 Watermark", key: "114" },
      { label: "浮动按钮 Float Button", key: "115" },
    ],
  },
  {
    label: "数据录入组件(20)",
    key: "2",
    children: [
      { label: "头像 Avater", key: "11" },
      { label: "按钮 Button", key: "12" },
      { label: "卡片 Card", key: "13" },
      { label: "轮播图 Carousel", key: "14" },
      { label: "折叠面板 Collapse", key: "15" },
      { label: "分割线 Divider", key: "16" },
      { label: "下拉菜单 Dropdown", key: "17" },
      { label: "文本省略 Ellipsis", key: "18" },
      { label: "渐变文字 Gradient Text", key: "19" },
      { label: "图标 Icon", key: "110" },
      { label: "页头 Page Header", key: "111" },
      { label: "标签 Tag", key: "112" },
      { label: "排印 Typography", key: "113" },
      { label: "水印 Watermark", key: "114" },
      { label: "浮动按钮 Float Button", key: "115" },
    ],
  },
  {
    label: "数据展示组件(19)",
    key: "3",
    children: [
      { label: "头像 Avater", key: "11" },
      { label: "按钮 Button", key: "12" },
      { label: "卡片 Card", key: "13" },
      { label: "轮播图 Carousel", key: "14" },
      { label: "折叠面板 Collapse", key: "15" },
      { label: "分割线 Divider", key: "16" },
      { label: "下拉菜单 Dropdown", key: "17" },
      { label: "文本省略 Ellipsis", key: "18" },
      { label: "渐变文字 Gradient Text", key: "19" },
      { label: "图标 Icon", key: "110" },
      { label: "页头 Page Header", key: "111" },
      { label: "标签 Tag", key: "112" },
      { label: "排印 Typography", key: "113" },
      { label: "水印 Watermark", key: "114" },
      { label: "浮动按钮 Float Button", key: "115" },
    ],
  },
];
</script>

<template>
  <n-menu :options="menuOptions"></n-menu>
</template>
