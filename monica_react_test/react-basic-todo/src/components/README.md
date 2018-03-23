#src/Components

앱에 글로벌하게 쓸 라이브러리 구현체를 모아 놓은 디렉토리이다.

<br/>

### 알아둘 부분: SPA와 react-router-dom 라이브러리
- SPA의 특징 : 싱글페이지에서 모든 뷰를 라우팅 한다.
- SPA의 단점 : 앱 규모가 커지면 스크립트도 넘나 커지는것
- 해당 단점 해결 : react-router-dom을 이용한 code splitting(bundle을 여러개로 분리하는 것)



###Loadable (https://github.com/jamiebuilds/react-loadable)


- 페이지 로드시 async지원
- 다양한 서버사이드 렌더링 옵션 지원
- 서버사이드 렌더링이 일어날 때 bundle.js를 바로 만들 수 있는 웹팩 플러그인 가능
- ...

###Pages


- ./screens의 페이지 뷰를 뿌리는 컴포넌트

###Router


- 라우팅시의 hashRouter/ BrowserRouter를 위한 포탈 (구/신버전 브라우저 분기처리)

###WithDetect ( https://www.npmjs.com/package/mobile-detect)


- 라우팅시 모바일 / pc, 버전 확인을 위한 컴포넌트

###WithRouter


- 최상위 Wrap div를 만들어줌
- path에 따른 페이지별 children 그리기

###...


- 필요할 때마다 추가할 것.

