# Starter

一个零依赖的静态站点起步项目：改完 `index.html` 就能变成你自己的页面。

## 技术栈

- 原生 HTML / CSS / JavaScript，没有构建步骤，没有依赖
- 本地打开即可预览，也可直接部署到 GitHub Pages

## 目录结构

```
.
├── index.html    # 页面结构
├── styles.css    # 样式（深色主题，CSS 变量集中在 :root）
├── app.js        # 交互脚本
├── LICENSE
└── .gitignore
```

## 本地预览

任选一种：

```sh
# Python 自带的静态服务器
python -m http.server 8000

# 或 Node
npx serve .
```

然后打开 <http://localhost:8000>。

## 部署到 GitHub Pages

1. 打开仓库 **Settings → Pages**
2. Source 选 **Deploy from a branch**，分支 `main`，目录 `/ (root)`
3. 保存后等一两分钟，访问 `https://zenglutao2-stack.github.io/starter/`

## 下一步可以做的

- 把 `index.html` 里的名字和介绍换成自己的
- 在 `:root` 里改主题色，不用翻遍 CSS
- 需要多页时，新增 `about.html` 并把导航补进 `<main>`

---

MIT License
