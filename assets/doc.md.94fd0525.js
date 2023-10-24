import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.c5bcd4a6.js";const l="/Docs/image-20231023164903424.png",o="/Docs/image-20231023172506751.png",e="/Docs/image-20231024093148334.png",t="/Docs/image-20231024093237312.png",c="/Docs/image-20231024094122313.png",r="/Docs/image-20231024094517632.png",i="/Docs/image-20231024094653649.png",E="/Docs/image-20231024100451724.png",y="/Docs/image-20231024100721488.png",F="/Docs/image-20231024101604485.png",d="/Docs/image-20231024101632858.png",h="/Docs/image-20231024103730326.png",_=JSON.parse('{"title":"VitePress 搭建和 Github Pages 部署","description":"","frontmatter":{},"headers":[],"relativePath":"doc.md","filePath":"doc.md"}'),u={name:"doc.md"},g=p(`<h1 id="vitepress-搭建和-github-pages-部署" tabindex="-1">VitePress 搭建和 Github Pages 部署 <a class="header-anchor" href="#vitepress-搭建和-github-pages-部署" aria-label="Permalink to &quot;VitePress 搭建和 Github Pages 部署&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">更新时间 最近更新：2023年10月22日</p><p>搭建版本：VtePress v1.0.0-rc.23</p></div><h2 id="前期工作" tabindex="-1">前期工作 <a class="header-anchor" href="#前期工作" aria-label="Permalink to &quot;前期工作&quot;">​</a></h2><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><p>必装：<a href="https://nodejs.org/" target="_blank" rel="noreferrer">安装nodejs</a></p><p>必装：<a href="https://git-scm.com/" target="_blank" rel="noreferrer">安装git</a></p><p>建议安装：<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">安装vscode</a></p><h3 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#安装pnpm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#查看版本号</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#安装pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#查看版本号</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><h2 id="github-创建一个新项目并克隆到本地" tabindex="-1">Github 创建一个新项目并克隆到本地 <a class="header-anchor" href="#github-创建一个新项目并克隆到本地" aria-label="Permalink to &quot;Github 创建一个新项目并克隆到本地&quot;">​</a></h2><p><img src="`+l+'" alt="image-20231023164903424"></p><p>​ <img src="'+o+`" alt="image-20231023172506751"></p><p>​</p><div class="warning custom-block"><p class="custom-block-title">说明</p><p>我下载的目录为 D 盘根目录，项目路径为 D:\\SimLengDoc</p></div><h2 id="安装-vitepress" tabindex="-1">安装 VitePress <a class="header-anchor" href="#安装-vitepress" aria-label="Permalink to &quot;安装 VitePress&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><p>在目录上方的地址栏输入 <code>cmd</code> 打开命令行窗口，也可以通过 VsCode 打开项目</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span></code></pre></div><h3 id="初始化向导" tabindex="-1">初始化向导 <a class="header-anchor" href="#初始化向导" aria-label="Permalink to &quot;初始化向导&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>我们将文件都放在 <code>./docs</code> ，参照下面，其他默认回车</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">vitepress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.0.0-rc.23</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">Welcome</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress!</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Where</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">should</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">initialize</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config?</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">./docs</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Site</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">title:</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">My</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Awesome</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Project</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Site</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">description:</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Site</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Theme:</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">Default</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Theme</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">TypeScript</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">files?</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">Yes</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">o</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json?</span></span>
<span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">Yes</span></span>
<span class="line"><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#B392F0;">—</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Done!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Now</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">writing.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vitepress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.0.0-rc.23</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">T</span><span style="color:#24292E;">   </span><span style="color:#032F62;">Welcome</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress!</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Where</span><span style="color:#24292E;"> </span><span style="color:#032F62;">should</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">initialize</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config?</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">./docs</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Site</span><span style="color:#24292E;"> </span><span style="color:#032F62;">title:</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">My</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Awesome</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Project</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Site</span><span style="color:#24292E;"> </span><span style="color:#032F62;">description:</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Site</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Theme:</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Theme</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">TypeScript</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">files?</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Yes</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">o</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json?</span></span>
<span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">Yes</span></span>
<span class="line"><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#6F42C1;">—</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Done!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Now</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">writing.</span></span></code></pre></div><h3 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><p>我测试还需要重新安装一次依赖</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><h3 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span></code></pre></div><h2 id="github-pages-部署" tabindex="-1">Github Pages 部署 <a class="header-anchor" href="#github-pages-部署" aria-label="Permalink to &quot;Github Pages 部署&quot;">​</a></h2><h3 id="git忽略项" tabindex="-1">git忽略项 <a class="header-anchor" href="#git忽略项" aria-label="Permalink to &quot;git忽略项&quot;">​</a></h3><p>添加以下忽略项</p><div class="language-tex vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tex</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#E1E4E8;">docs/.vitepress/cache</span></span>
<span class="line"><span style="color:#E1E4E8;">node_modules/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292E;">docs/.vitepress/cache</span></span>
<span class="line"><span style="color:#24292E;">node_modules/</span></span></code></pre></div><h3 id="获取github-访问令牌" tabindex="-1">获取Github 访问令牌 <a class="header-anchor" href="#获取github-访问令牌" aria-label="Permalink to &quot;获取Github 访问令牌&quot;">​</a></h3><ul><li><h2 id="登录github-点击设置" tabindex="-1">登录github，点击设置 <a class="header-anchor" href="#登录github-点击设置" aria-label="Permalink to &quot;登录github，点击设置&quot;">​</a></h2><p><img src="`+e+'" alt="image-20231024093148334"></p></li><li><h2 id="在左侧菜单点击开发者设置" tabindex="-1">在左侧菜单点击开发者设置 <a class="header-anchor" href="#在左侧菜单点击开发者设置" aria-label="Permalink to &quot;在左侧菜单点击开发者设置&quot;">​</a></h2><p><img src="'+t+'" alt="image-20231024093237312"></p></li><li><h2 id="点击-生成新的访问令牌" tabindex="-1">点击 生成新的访问令牌 <a class="header-anchor" href="#点击-生成新的访问令牌" aria-label="Permalink to &quot;点击 生成新的访问令牌&quot;">​</a></h2><p><img src="'+c+'" alt="image-20231024094122313"></p></li><li><p>键入信息，点击生成</p><p><img src="'+r+'" alt="image-20231024094517632"></p></li><li><p>复制Token保存（只会在当前页面显示一次）</p><p><img src="'+i+'" alt="image-20231024094653649"></p></li></ul><h3 id="回到项目-设置-action-secrets" tabindex="-1">回到项目，设置 Action secrets <a class="header-anchor" href="#回到项目-设置-action-secrets" aria-label="Permalink to &quot;回到项目，设置 Action secrets&quot;">​</a></h3><p><img src="'+E+'" alt="image-20231024100451724"></p><p><img src="'+y+'" alt="image-20231024100721488"></p><h3 id="新建-gh-pages-分支" tabindex="-1">新建 gh-pages 分支 <a class="header-anchor" href="#新建-gh-pages-分支" aria-label="Permalink to &quot;新建 gh-pages 分支&quot;">​</a></h3><p><img src="'+F+'" alt="image-20231024101604485"></p><p><img src="'+d+`" alt="image-20231024101632858"></p><h3 id="添加action" tabindex="-1">添加Action <a class="header-anchor" href="#添加action" aria-label="Permalink to &quot;添加Action&quot;">​</a></h3><p>在本地项目中，新建文件夹 .github\\workflows</p><p>新建文件：deploy.yml</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployhahah</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v1</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">registry-url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">latest</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm install</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm run docs:build</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">github_token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUBTOKEN }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_dir</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployhahah</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v1</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">registry-url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">latest</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm install</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm run docs:build</span></span>
<span class="line"><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUBTOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_dir</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span></code></pre></div><h3 id="设置路径" tabindex="-1">设置路径 <a class="header-anchor" href="#设置路径" aria-label="Permalink to &quot;设置路径&quot;">​</a></h3><p>在 /docs\\.vitepress\\config.mts 中添加 base 路径</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;My Awesome Project&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;A VitePress Site&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 路径为你的项目名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">base</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;/SimLengDoc/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;My Awesome Project&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;A VitePress Site&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 路径为你的项目名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">base</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;/SimLengDoc/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>保存文件，上传项目到github，我使用的是vscode上传</p><p><img src="`+h+'" alt="image-20231024103730326"></p>',48),m=[g];function b(C,B,v,D,k,A){return a(),n("div",null,m)}const q=s(u,[["render",b]]);export{_ as __pageData,q as default};
