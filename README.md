# XMLHttpRequest (5.21)

- 개념 : 클라이언트로와 서버가 비동기 통신을 하기 위해 사용하는 객체
- 사용방법
  1. `const xhr = new XMLHttpRequest()` : XMLHTTPRequest 객체 생성
  2. `xhr.open("GET", "http://localhost:4000/sleep-time")` : 요청 만들기
  3. `xhr.send()` : 요청 보내기
  4. 응답 받기 - 이벤트 리스너
  - `xhr.onreadystatechange` : `XMLHttpRequest.readyState` 가 바뀔 때마다 콜백 함수를 실행
    - `XMLHttpRequest.readyState` : 0 - 객체 생성 / 1 - 요청 만들기 / 2 - 요청 보내기 / 3 - 응답 기다림 / 4 - 응답 완료
  - `xhr.onload` : 서버 응답이 완료 될때 콜백 함수를 실행

# Postman, REST API, mock API, json-server (5.21)

- Postman : API 개발 및 테스트 서비스이다. API 요청 및 응답 테스트, API 문서화를 지원한다.
- REST API : HTTP를 사용하는 클라이언트와 서버 사이의 통신 방식
  - 구성
    1. 자원 : URI
    2. 행위 : HTTP method(GET, POST, PUT, DELETE)
    3. 표현 : JSON, XML 등
  - 특징
    1. 클라이언트-서버 구조
    2. 무상태성
    3. 캐시 처리
- mock API
  - 개념 : API가 구축되어 있지 않는 상태에서 사용하는 테스트용 API
  - 방법 : json-server
    - `yarn add json-server`
    - `db.json` 파일 생성 및 작성
    - `yarn json-server --watch db.json --port 4000`

# 2주차 숙제 (5.20)

- toolkit은 immer라는 불변성 유지 패키지를 내장하고 있다. 그래서 reducer에서 state를 변경하고 할때 스프레드 문법을 통한 불변성을 유지를 할 필요가 없다.

  - redux : `state.listTIL = [...state.listTIL, addData]`
  - reduxToolkit : `state.listTIL.push(action.payload);`

- navigate(-1) : 뒤로 가기

# react-router-dom (5.20) - v6

- `yarn add react-router-dom`
- 필수 개념
  1. BrowserRouter : 루트 디렉토리 `<BrowserRouter>` 감싸기
  2. Routes, Route : `<Routes><Route path="/" element={<Home />} /></Routes>`
  3. 정적 라우팅 : `<Route path="/" element={<Home />} />`
  4. 동적 라우팅 : `<Route path="/myself/:index" element={<Myself />} />`
- 필수 메소드

  1. `useParams` : URL params 가져오기
  2. `useNavigate` : 페이지 이동

  # Redux Toolkit (5.20)

- 배경 : redux의 보일러 플레이트를 줄이기 위해 등장
- 필수 개념
  1. slice : action type, action creator, initial state, reducer를 묶어서 관리하는 역할
- 필수 메소드
  1. `createSlice` : 슬라이스 생성
  2. `configureStore` : 스토어 생성
- `yarn add @reduxjs/toolkit`

# Redux (5.6)

- `yarn add redux react-redux`
- 상태관리 흐름
  1. redux store를 component에 연결
  2. component에서 상태 변화에 필요한 action을 호출
  3. reducer를 통해 새로운 상태값 생성
  4. 새로운 상태값을 store에 저장
  5. 새로운 상태 값을 component에서 사용
- Ducks 구조 : action type, action creator, initial state, reducer가 한 파일에 들어있음
- 필수 개념
  1. Provider : 루트 디렉토리 `<Provider store={store}>` 감싸기
- 필수 메소드
  1. `combineReducers` : 리듀서 합치기
  2. `createStore` : 스토어 생성
- Redux Hook
  1. `useSelector` : 데이터 구독
  2. `useDispatch` : 데이터 변경

# Context API (5.4)

- React 내장 전역 상태관리 방법
- 데이터 변경이 잦지 않은 경우에 사용이 적합하다.
- 데이터의 규모가 있을때 스토어를 여러개 만들어야 하기 때문에 관리하기 어렵다.
- 사용방법
  1. store 생성 : createContext
  2. context API 적용 : Provider
  3. store 구독 : Consumer, useContext

# 전역 상태관리 (4.30)

- Context API
- Redux
- Recoil

# async, await (4.30)

- Promise를 편하게 쓸 수 있는 문법
- async : Promise를 반환한다.
- await : Promise가 처리 될때까지 기다렸다가 그 이후에 결과를 반환한다.

# Promise (4.29)

1. Promise

- 개념 : 비동기 연산이 종료된 후 결과를 알기위해 사용하는 객체
- 상태 : pending, fulfilled, rejected
- 후속 처리 메소드 : then, catch

2. 에러 핸들링

- 요청이 성공인지 실패인지 여부
- 원하는 값이 맞는지 아닌지 여부

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

# Custom Hook (4.12~13)

Hook과 함수의 차이가 무엇인가?

Hook은 리액트의 함수 컴포넌트에서 사용되며, 컴포넌트의 상태 관리(useState), 생명주기 관리(useEffect), DOM 제어(useRef) 등의 기능을 제공한다. 반면에 함수는 프로그래밍 언어에서 재사용성과 모듈화를 위한 코드 블럭이다.

---

- 반복되는 Hook 로직을 재사용할 때 사용한다.
- Custom Hook을 사용하는 컴포넌트마다 Custom Hook이 가지는 useState와 useEffect는 독립적이다.
- Custom Hook을 한 컴포넌트에서 여러번 사용해도 Custom Hook이 가지는 useState와 useEffect는 독립적이다.
- pre 태그 : 문장 형태 그대로 브라우저에 나타낼때 사용한다.
- 문법 : 함수명이 use~~ 로 시작해야 한다, 리턴이 있어야한다.

# Quiz (4.11)

- 과제 : 입력한 값을 박스에 나타내기

# Hook (4.11)

- useState : 상태 관리
- useEffect : 생명주기(사이드 이팩트) 관리
- useCallBack : 함수 메모이제이션
- useRef : DOM 제어
- Hook은 리액트 함수 내에서만 호출이 가능하다.
