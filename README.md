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
