<script setup lang="ts">
import { ref } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const content = ref(
  "# 一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十\n## 二\n### 三\n#### 四\n##### 五\n###### 六\n### 七\n### 八\n### 九\n### 十\n### 十一\n### 十二\n### 十三\n### 十四\n### 十五\n### 十六\n### 十七\n### 十八\n### 十九\n### 二十\n### 二十一\n### 二十二\n### 二十三\n### 二十四\n### 二十五\n### 二十六\n### 二十七\n### 二十八\n### 二十九\n### 三十\n"
);
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
