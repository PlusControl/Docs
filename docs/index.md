---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PlusControl"
  text: "WPF 自定义控件库"
  tagline: "赋能每一次点击，让界面交互更加简洁，高效"
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started
    - theme: sponsor
      text: API Examples
      link: /api-examples
    - theme: sponsor
      text: 文档示例
      link: /building-documents

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);


  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

</style>