<script setup lang="ts">
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import { useStores } from "@/stores";

const stores = useStores();
</script>

<template>
  <div class="layout-content">
    <div class="md-preview-container">
      <n-scrollbar style="height: calc(100vh - 64px)">
        <div class="md-preview-content">
          <MdPreview
            editorId="mdEditor"
            :modelValue="stores.content"
            :theme="stores.editorTheme"
            style="background-color: transparent"
          />
        </div>
      </n-scrollbar>
    </div>
    <div
      class="md-catalog-container"
      :style="{ borderLeftColor: stores.borderColor }"
    >
      <n-scrollbar style="height: calc(100vh - 64px)">
        <div class="md-catalog-content">
          <MdCatalog
            editorId="mdEditor"
            scrollElement=".md-preview-container .n-scrollbar-container"
            :scrollElementOffsetTop="74"
          />
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.layout-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  .md-preview-container {
    flex-grow: 1;
    .md-preview-content {
      padding: 0 32px;
    }
  }
  .md-catalog-container {
    box-sizing: border-box;
    width: 300px;
    border-left-width: 1px;
    border-left-style: solid;
    .md-catalog-content {
      padding: 16px;
    }
  }
}
</style>
