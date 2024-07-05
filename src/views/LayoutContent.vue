<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import axios from "axios";

const content = ref();

onMounted(() => {
  axios.get("/note/test.md").then((response) => {
    content.value = response.data;
  });
});
</script>

<template>
  <div class="layout-content">
    <div class="md-preview-container">
      <n-scrollbar style="height: calc(100vh - 64px)">
        <div class="md-preview-content">
          <MdPreview editorId="mdEditor" :modelValue="content" />
        </div>
      </n-scrollbar>
    </div>
    <div class="md-catalog-container">
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
    border-left: 1px solid #efeff5;
    .md-catalog-content {
      padding: 16px;
    }
  }
}
</style>
