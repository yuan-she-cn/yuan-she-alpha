## 运行环境

- pnpm 9.1.4
- node v20.14.0
- npm 10.7.0

## 目录结构

### /public/note

笔记存放文件夹，用于存放笔记内容，采用 markdown 语法编写。第一级目录为笔记类型，第二级目录为笔记主题。第三级目录以后为笔记目录或笔记文件，笔记文件采用 .md 作为后缀。

### /public/list

目录配置文件夹，用于配置笔记主题的目录展示，采用 json 语法编写。第一级目录为笔记类型，第二级文件为笔记主题。每一个文件对应一个文件主题，采用 .json 作为后缀。

.json 文件内容为数组对象，数组中的每一个对象对应一个目录。对象中，key 属性为笔记文件的存放路径；label 属性为目录名称；children 属性为下级目录。建议 key 值对应 /public/note 的目录结构。

### /public/menu/index.json

菜单配置文件，用于配置菜单的展示，采用 json 语法编写。文件内容为数组对象，数组中的每一个对象对应一个菜单。第一级对象为笔记类型，第二级对象为笔记主题。对象中，key 属性为目录配置文件的存放路径；label 属性为菜单名称；children 属性为下级菜单。建议 key 值对应 /public/list 的目录结构。

### /public/search/index.json

搜索配置文件，用于配置可搜索项，采用 json 语法编写。文件内容为数组对象，数组中的每一个对象对应一个可搜索项。对象中，value 属性为可搜索项的定位值，value 分为两部分，采用英文 | 号分隔，第一部分为菜单配置文件中的 key，第二部分为目录配置文件中的 key；label 属性为搜索标题。

### 其他文件

- /src/assets：资源文件夹
- /src/router/index.ts：路由配置文件
- /src/stores/index.ts：存储配置文件
- /src/views：Vue 界面文件
- /src/App.vue：Vue 界面入口
- /src/main.ts：Vue 程序入口
- /.gitignore：Git 忽略配置文件
- /env.d.ts：环境变量配置文件
- /index.html：Html 界面入口
- /package.json：包管理配置文件
- /pnpm-lock.yaml：pnpm 包锁定配置文件
- /README.md：项目自述文件
- /tsconfig.json：TypeScript 配置文件
- /vite.config.ts：Vite 配置文件

## 默认配置

### /src/stores/index.ts

- themeName：主题名称，可用值："深色"、"浅色"，选值应与当前主题相反
- naiveTheme：Naive UI 主题，可用值：null、darkTheme
- editorTheme：MD 编辑器主题，可用值：undefined、"dark"
- borderColor：边框颜色，可用值："rgb(239, 239, 245)"、"rgba(255, 255, 255, 0.09)"
- logoImg：Logo 图标，可用值：logoLight、logoDark
- menu.key：默认选中菜单
- list.key：默认选中目录
