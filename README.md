# Hook (4.11)

- useState : 상태 관리
- useEffect : 생명주기(사이드 이팩트) 관리
- useCallBack : 함수 메모이제이션
- useRef : DOM 제어
- Hook은 리액트 함수 내에서만 호출이 가능하다.

# Quiz (4.11)

- 과제 : 입력한 값을 박스에 나타내기

# Custom Hook (4.12~13)

Hook과 함수의 차이가 무엇인가?

Hook은 리액트의 함수 컴포넌트에서 사용되며, 컴포넌트의 상태 관리(useState), 생명주기 관리(useEffect), DOM 제어(useRef) 등의 기능을 제공한다. 반면에 함수는 프로그래밍 언어에서 재사용성과 모듈화를 위한 코드 블럭이다.

---

- 반복되는 Hook 로직을 재사용할 때 사용한다.
- Custom Hook을 사용하는 컴포넌트마다 Custom Hook이 가지는 useState와 useEffect는 독립적이다.
- Custom Hook을 한 컴포넌트에서 여러번 사용해도 Custom Hook이 가지는 useState와 useEffect는 독립적이다.
- pre 태그 : 문장 형태 그대로 브라우저에 나타낼때 사용한다.
- 문법 : 함수명이 use~~ 로 시작해야 한다, 리턴이 있어야한다.

# 자바스크립트 동시성 (4.29)

1. 자바스크립트와 쓰레드

- 자바스크립트는 싱글 쓰레도로써 기본적으로 동기 방식으로 동작하나, 실행 환경의 도움을 받는 특수한 경우에는 비동기 방식으로 동작하는 것처럼 보인다. - 동시성

- 데이터 처리 모델 : 동기식 처리, 비동기식 처리
- 동기 : 데이터의 요청과 결과를 완료한 후 다음 코드를 실행
- 비동기 : 데이터의 요청과 결과를 완료되기 전 다음 코드를 실행
- 동시성 : 코드가 동시에 처리되는 것처럼 보이는 현상
- 병렬 처리 : 실제로 코드가 동시에 처리되는 현상

2. V8 엔진에서의 비동기 작업 처리

- V8엔진은 내부적으로 Heap, Call Stack 으로 구분된다. Heap은 변수 데이터가 저장되고, Call Stack에는 메소드(console.log, alert 등) 데이터가 저장된다. Call Stack은 메소드를 동기적으로 처리한다. Call Stack에 실행 환경 메소드(API 요청, setTimeout 등)가 들어오면 이것을 해당 실행 환경으로 전달한다. 실행 환경은 전달 받은 메소드를 실행한다. 이러한 일련의 과정 때문에 자바스크립트가 비동기적으로 동작하는 것처럼 보이는 것이다.
- V8엔진은 Callback Queue와 Event Loop라는 공간을 가지고 있는데, Callback Queue는 비동기 작업 후 돌아오는 데이터를 받는 역할을 한다. Event Loop(Event Listener)는 Callback Queue에 들어온 데이터를 Call Stack에 올리기 위해 대기하고 전달하는 역할을 한다.

# Promise (4.29)

1. Promise

- 개념 : 비동기 연산이 종료된 후 결과를 알기위해 사용하는 객체
- 상태 : pending, fulfilled, rejected
- 후속 처리 메소드 : then, catch

2. 에러 핸들링

- 요청이 성공인지 실패인지 여부
- 원하는 값이 맞는지 아닌지 여부

# async, await (4.30)

- Promise를 편하게 쓸 수 있는 문법
- async : Promise를 반환한다.
- await : Promise가 처리 될때까지 기다렸다가 그 이후에 결과를 반환한다.

# 전역 상태관리 (4.30)

- Context API
- Redux
- Recoil

# Context API (5.4)

- React 내장 전역 상태관리 방법이다.
- 스토어를 여러개 만들어야 하기 때문에 관리하기 어렵다.
- 사용방법
  1. store 생성 : createContext
  2. context API 적용 : Provider
  3. store 구독 : Consumer, useContext
