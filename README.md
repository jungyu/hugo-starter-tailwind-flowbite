
無論你將它視為 Hugo 專案或佈景主題，皆能使用以下指令，安裝：

## 作為 Hugo 專案

```bash
yarn install
hugo server
```

## 作為 Hugo 主題

```bash
hugo mod npm pack
yarn install
```

你也許還需要設定 `hugo.toml`，自訂你所需要的參數:

## 開發階段，你或許會經常使用以下指令：(建議開2個 bash shell 頁籤)

```bash
## 編譯 app.js 
yarn build

## 在本機執行 hugo 服務
hugo server
```

開啟瀏覽器，在網址列上輸入： 

```bash
https://localhost:1313
```

## 詳細參考 package.json 內的 scripts 描述：

```json
  "scripts": {
    "start": "run-p start:dev:*",
    "start:dev:hugo": "hugo server -D --watch",
    "start:dev:webpack": "webpack --mode=development --watch",
    "build": "NODE_ENV=production && run-s build:webpack build:hugo",
    "build:hugo": "hugo --destination=./.build",
    "build:webpack": "webpack --mode=production",
    "build:styles": "npx tailwindcss -i ./src/style.css -o ./dist/css/flowbite.css"
  },
```

## 其它說明

Hugo 本身並不直接支援 ES6 module 語法，因為它是一個靜態網站產生器，主要用於生成靜態 HTML、CSS 和 JavaScript 檔案，而不是處理 JavaScript 的模組化。

因此在融合 flowbite 及 alpinejs 時，須透過使用 Webpack 或其他 JavaScript bundler 來處理 JavaScript 檔案並支援 ES6 module 語法。