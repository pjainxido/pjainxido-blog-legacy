---
layout: post
title: Numble Challenge  
tags: [numble, react, useReducer, typescript]
published: true 
date: "2022-02-28"
---

# numble-find-diff

[https://github.com/pjainxido/numble-find-diff](https://github.com/pjainxido/numble-find-diff)

배포주소: [https://numble-find-diff.vercel.app/](https://numble-find-diff.vercel.app/)

![Untitled](/postimgs/NumbleCh/Untitled.png)

## 💻 코드

```jsx
import type { NextPage } from 'next'
import FindDiffGame from '../components/FindDiffGame'

const Home: NextPage = () => {
  return (
    <>
      <FindDiffGame boardSide={360} timePenalty ={3} timePerStage={15} />
    </>
  )
}

export default Home
```

next.js로 프로젝트를 생성해 pages 내 index.tsx에 FindDiffgame 컴포넌트를 추가했습니다.

```jsx
interface IFindDiffGame {
  boardSide: number;
  timePenalty: number;
  timePerStage: number;
}

const FindDiffGame: React.FC<IFindDiffGame> = ({ boardSide, timePenalty, timePerStage }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { isPlaying, stage, score, time, answer, defaultColor, answerColor } = state;
```

전체적인 게임 컴포넌트로, props로 게임판의 한변의 길이, 실패시 패널티 시간, 스테이지당 시간 옵션을 추가하여 커스텀 가능하게 설정했습니다. 해당 컴포넌트에서 관리할 state의 종류가 너무 많아 useReducer 훅을 통해 상태를 관리합니다.

```jsx
const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "START_STAGE":
      const blockCount = Math.pow(Math.round((state.stage + 0.5) / 2) + 1, 2);
      const answerIndex = getRandomInteger(0, blockCount - 1);
      const { defaultColor, answerColor } = getRandomPairColor(state.stage);
      return {
        ...state,
        isPlaying: true,
        answer: answerIndex,
        time: action.time,
        defaultColor: defaultColor,
        answerColor: answerColor,
      };
    case "CLEAR_STAGE":
      return {
        ...state,
        stage: state.stage + 1,
        score: state.score + Math.pow(state.stage, 3) * state.time,
      };
    case "TIME_DECREASE":
      return { ...state, time: state.time < action.time ? 0 : state.time - action.time };
    case "RESET_GAME":
      return { ...initialState };
    case "GAME_OVER":
      return { ...state, isPlaying: false };
    default:
      throw new Error("Action type error");
  }
};
```

리듀서에서는 stage를 시작하며 기본색, 정답색, 정답블록의 인덱스를 설정하는 START_STAGE를 통해 게임을 실행합니다. 
CLEAR_STAGE는 게임을 클리어하면 실행하며 stage를 +1하고 챌린지 문서에서 요구한 로직대로 score를 더해줍니다.

TIME_DECREAE는 입력한 값만큼  time을 감소시키며, 챌린지에서 예시로 배포한 프로젝트와 동일하게 time값을 0보다 작아질경우 0으로 설정합니다.

RESET_GAME은 initialState로 게임을 초기화 하며, GAME_OVER는 isPlaying 옵션을 false로 수정합니다.

```jsx
	const blockRowCount = Math.round((stage + 0.5) / 2) + 1;
  const totalBlockCount = Math.pow(blockRowCount, 2);
  const blockSideLength = boardSide / blockRowCount - 4;

  const decreaseTime = (input: number) => {
    dispatch({ type: "TIME_DECREASE", time: input });
  };

  useEffect(() => {
    dispatch({ type: "START_STAGE", time: timePerStage });
  }, [stage]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) decreaseTime(1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "GAME_OVER" });
      alert("GAME OVER!\n" + `스테이지: ${stage}, 점수: ${score} `);
      dispatch({ type: "RESET_GAME" });
      dispatch({ type: "START_STAGE", time: timePerStage });
    }
  }, [time]);

  const onSelect = (index: number) => {
    if (index === answer) {
      dispatch({ type: "CLEAR_STAGE" });
    } else decreaseTime(timePenalty);
  };
```

blockRowCount, totalBlockCount, blockSideLength는 기본적인 stage값과 props로 받는 boardSide로 값을 구할수 있어 state로 사용하는대신 코드내 const값으로 작성했습니다.

useEffect를 통해 대부분의 게임 로직이 동작합니다 .stage가 변할때마다 START_STAGE를 dispath해 자동적으로 게임이 플레이 되게 했습니다. 
그리고 isPlaying state를 통해 매 1초마다 시간을 1씩 감소하게했으며, time값이 0이 되는 순간 gameover가 되며, alert로 현재 스테이지와 점수를 출력합니다. 그후 alert창에서 확인을 누르면 게임을 리셋하고 stage를 재시작합니다. 

onSelect는 블록을 선택하면 해당 블록의 인덱스와 answer의 값이 일치하면 clear-stage를 dispatch합니다. 

값이 다를 경우 timePenalty만큼 시간을 감소시킵니다.

```jsx
return (
    <>
      <Header stage={stage} time={time} score={score} />
      <div className={styles.wrapper}>
        {Array.from({ length: totalBlockCount }).map((_, index) => (
          <Block
            key={index}
            id={index}
            side={blockSideLength}
            color={index === answer ? answerColor : defaultColor}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
```

```jsx
const Block: React.FC<BlockProps> = ({ side, id, color, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(id)}
      style={{ width: side, height: side, backgroundColor: color, margin: 2 }}
    />
  );
};
```

먼저 게임판 상단에 게임정보를 표시해주는 header 컴포넌트를 추가했습니다.
div tag 내부에 블록을 렌더링하며 totalBlockCount 만큼 array를 생성후 map을 통해 블록의 크기와, color를 추가합니다. index가 answer의 인덱스와 일치하면 defaultColor 대신 answerColor를 추가합니다. 그리고 onSelect 함수를 인자로 추가해 블록을 클릭하면 Block 컴포넌트에서 id 값을 인자로 onSelect 함수를 실행해 클릭한 블록의 정답여부를 체크하여 시간을 깎거나 스테이지를 클리어합니다.

## 😵 어려웠던 부분

```jsx
function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

function getRandomPairColor(stage: number) {
  const baseRgb: number[] = Array.from({ length: 3 }, () => getRandomInteger(0, 255));
  const matchDiff = Math.round(stage / 3) + 0.2;
  const answerRgb: number[] = baseRgb.map((item) => {
    return item + plusOrMinus() * Math.floor(item / matchDiff);
  });
  const defaultColor: string = `rgb(${baseRgb[0]},${baseRgb[0]},${baseRgb[2]})`;
  const answerColor: string = `rgb(${answerRgb[0]},${answerRgb[0]},${answerRgb[2]})`;
  console.log(answerColor)
  return { defaultColor, answerColor };
}
```

lib 폴더내에서는 answer의 값을 정하기위해 일정범위 내의 무작위 정수를 리턴하는 getRandomInteger와 answerColor, defaultColor를 생성하는 getRandomPairColor가 있습니다.

```jsx
const blockRowCount = Math.round((stage + 0.5) / 2) + 1;
```

getRandomPairColor를 작성할때 스테이지별 색깔을 어떤식으로 난이도를 높일까 고민을 많이 했었는데, FindDiffGame/index내에 있는 한 면당 블록개수를 구하는 blockRowCount의 식을 참고했습니다. 
기존 rgb의 각각의 값에 스테이지별로 점점 증가하는 값을 나누어 무작위로 더하거나 빼는 로직을 통해 answerColor를 생성합니다

## ✋ 마치며

처음 챌린지에 도전했는데, 거의 막바지에 신청해 급하게 진행했습니다.  코드의 구조나 state값을 설정하는 기준에 대해 고민해보고 컴포넌트의 구성에 고민을 계속하며 작성했습니다. 내 기준으로는 최선을 다한것 같으나, 내가 놓치고 있는 점을 빨리 알고 개선하고 싶은 생각이 많이 드는 챌린지 였습니다.
