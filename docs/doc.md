# VitePress 搭建和 Github Pages 部署

::: warning 更新时间 最近更新：2023年10月22日

搭建版本：VtePress v1.0.0-rc.23
:::



## 前期工作

### 工具

必装：[安装nodejs](https://nodejs.org/)

必装：[安装git](https://git-scm.com/)

建议安装：[安装vscode](https://code.visualstudio.com/)



### pnpm

``` bash
#安装pnpm
npm install -g pnpm

#查看版本号
pnpm -v
```



## Github 创建一个新项目并克隆到本地

![image-20231023164903424](.\image-20231023164903424.png)

​	![image-20231023172506751](.\image-20231023172506751.png)

​	

::: warning 说明 

我下载的目录为 D 盘根目录，项目路径为 D:\SimLengDoc 
:::



## 安装 VitePress

### 安装依赖

在目录上方的地址栏输入 `cmd` 打开命令行窗口，也可以通过 VsCode 打开项目

``` bash
pnpm add -D vitepress
```

### 初始化向导

``` bash
pnpm dlx vitepress init
```

我们将文件都放在 `./docs` ，参照下面，其他默认回车

``` bash
vitepress v1.0.0-rc.23

T   Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  My Awesome Project
|
o  Site description:
|  A VitePress Site
|
o  Theme:
|  Default Theme
|
o  Use TypeScript for config and theme files?
|  Yes
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run npm run docs:dev and start writing.
```



### 安装依赖

我测试还需要重新安装一次依赖

```bash
pnpm install
```



### 启动项目

``` bash
pnpm run docs:dev
```



## Github Pages 部署

### git忽略项

添加以下忽略项

```tex
docs/.vitepress/dist
docs/.vitepress/cache
node_modules/
```



### 获取Github 访问令牌

- ## 登录github，点击设置

  ![image-20231024093148334](.\image-20231024093148334.png)

- ## 在左侧菜单点击开发者设置

  ![image-20231024093237312](.\image-20231024093237312.png)

- ## 点击 生成新的访问令牌

  ![image-20231024094122313](.\image-20231024094122313.png)

- 键入信息，点击生成

  ![image-20231024094517632](.\image-20231024094517632.png)

- 复制Token保存（只会在当前页面显示一次）

  ![image-20231024094653649](.\image-20231024094653649.png)

### 回到项目，设置 Action secrets

![image-20231024100451724](.\image-20231024100451724.png)



![image-20231024100721488](.\image-20231024100721488.png)

### 新建 gh-pages 分支

![image-20231024101604485](.\image-20231024101604485.png)

![image-20231024101632858](.\image-20231024101632858.png)



### 添加Action

在本地项目中，新建文件夹 .github\workflows

新建文件：deploy.yml

``` yaml
name: Deployhahah

on:
  push:
    branches:
      main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 18
          registry-url: https://registry.npm.taobao.org
      - uses: pnpm/action-setup@v2
        with:
          version: latest
      - run: pnpm install
      - run: pnpm run docs:build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUBTOKEN }}
          publish_dir: docs/.vitepress/dist
```

### 设置路径

在 .\docs\\.vitepress\config.mts 中添加 base 路径

``` json
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  
    // 路径为你的项目名称
  base:"/SimLengDoc/",
  ...
})
```





保存文件，上传项目到github，我使用的是vscode上传



![image-20231024103730326](.\image-20231024103730326.png)
