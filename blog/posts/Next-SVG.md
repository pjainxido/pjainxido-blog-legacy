---
layout: post
title: Svg import in Next.js
tags: [next, babel, webpack, react, svg]
published: true
date: "2021-10-03"
---

nextjs로 페이지를 만들면서 svg파일을 import 해야 했다. 원래는 img src 내에 public 폴더에 있는 svg 파일 경로를 추가해 사용했었다.  

하지만 해당 방식으로 svg를 사용하면 색이나 크기를 다르게 설정해야할때 비슷한 svg파일을 여러개 만들어야 하는 단점이 있다.  

결국 svg를 제대로 활용하지 못한다는 건데..  

간단하게 webpack에 svg loader 모듈을 추가해 해결할 수 있다.

# @svgr/webpack

```
yarn add -D @svgr/webpack

```

먼저 @svgr/webpack을 설치한다.

그리고 `next.config.js` 파일을 수정해 웹팩 설정에 해당 로더를 추가한다

```
module.exports = {
  ...
  webpack(config) {
    ...
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

```

그리고 svg파일을 아래와 같이 import 해서 컴포넌트 처럼 사용할 수 있다.

```
import Star from './star.svg'

const App=()=>(
  <div>
    <Star/>
  </div>
)
```

추가적으로 아래와 같은 방식으로 svg 옵션을 줄 수 있다.

```
import Star from './star.svg'

const App=()=>(
  <div>
    <Star fill='#333' width=33 height=33/>
  </div>
)
```
