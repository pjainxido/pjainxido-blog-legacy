---
layout: post
title: Next.js link options
tags: [next, link]
published: false 
date: "2022-02-17"
---

## passHref

Link 태그내 styled components를 사용할경우 next.js에서 기본적으로 a tag를 추가하면 자동으로 href가 추가되는 대신 자동으로 추가해주지 않는다. 자식 컴포넌트내에 href attribute를 넘겨줄 수 있음, 만약 href가 존재하지 않는다면 SEO에 좋지도 않음

## replace

history 스택에 새 url 추가대신 현재 state 를 교체

## Shallow

현재 페이지의 path를 업데이트 함 rerunning 없이

getStaticProps, getInitialProps 같이 데이터를 가져오는 메소드를 다시 동작시키지 않고 url을 변경함
