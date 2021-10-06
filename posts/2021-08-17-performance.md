---
layout: post
title: TIL - Performance check
cover-img: /assets/img/path.jpg
tags: [til, wecode, FE, js, web, console.time, performance]
published: true
date: "2021-08-17"
---

## 함수 성능 측정

기업 과제를 하면서 요구사항 구현은 다했으나 뭔가 부족한거같아 특정함수 실행시 실행시간을 측정해 화면에 뿌리기로 했다.
처음엔 아무생각 없이 Date.now()로 하려했으나 좀더 작은 단위로 측정해야 해서 다른 방법을 찾아봤다.
대표적으로 크게 두가지 방법이 있다고 한다.

## console.time

```
console.time(label);


// do something..

console.timeEnd(label);

```

인자로 주워진 이름의 타이머를 실행, 종료한다.
label에는 unique한 값이 들어가야하며, 미입력시 default라는 이름으로 동작한다.
사용법은 간단하다. 특정 로직 실행전에 console.time을 실행하고 원하는 타이머 종료 지점에 timeEnd를 호출해 로그로 측정하면 된다.
하지만 콘솔로만 값을 확인할 수 있어 개발자도구나 디버깅에 사용해야 할듯하고, 실제 화면에 렌더링하기에는 적합하지 않다.

## performance.now

```
const start = performance.now();

// do something...

const end = performance.now();
console.log("Call to doSomething took " + (end - start) + " milliseconds.");
```

window의 performace객체를 활용해 측정하는 방법이다.

사용법은 비슷하다 시작지점과 종료지점에 performance.now()를 호출해 변수에 값을 저장해 서로 차이값을 측정하면된다.

DOMHighResTimeStamp를 return하며 console.time보다 더 정확하다. 그리고 메인 컨텍스트를 기준으로 측정되어 <mark style='background-color: #dcffe4'> 브라우저마다 다른 값을 반환</mark>한다.

## 마치며

performance.now는 좀더 정확하게 측정하고 실제 변수로 사용할 수 있어 실행시간 측정 코드를 구현할때 해당 기능을 사용했다.

하지만 함수성능을 개발자레벨에서 디버깅용으로 측정한다면 console.time으로 하는게 더 좋은듯 싶다. 각 측정별로 label을 간단하게 입력 할 수 있어 사용성으로는 console.time더 좋다.

![consoletime](/postimgs/8_17/consoletime.png)
(이런식으로 label: 시간 방식으로 콘솔에 출력된다.)

## Ref

- https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

- https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
