## Version 1 spec.

버전 0 에서 기본 express-app 의 라우팅과 서버 셋팅이 목표였고 구현이 되었다.

그리고 이제 버젼 1 에서 구현해야 할 구성에 대한 스팩이 정해졌다.

page-spec :  login / logout / sign-up / detail

module : passport

strategy : local-strategy

about : passport? & local-strategy?

> * 노드에서 사용할 수 있는 사용자 인증 모듈이다.  
> * passport 는 수백 가지의 인증 방식을 제공하는데, 이러한 인증방식을 strategy 라고 칭한다.  
> * 웹 서버에서 전달받은 값을 데이터베이스에 저장된 정보와 비교하는 local-strategy 를 사용할 것이다.

## Npm Install Guide

passport 를 이용해서 로그인 기능을 구현하기 위해서는 세가지 모듈 설치가 필요하다.

```text
    npm i passport
    npm i passport-local
    npm i connect-flash
```

* passport : 사용자 인증 처리에 필요한 기본 기능을 제공한다.
* passport-local : 웹 서버에서 직접 사용자의 아이디와 비밀번호를 전달받아 데이터베이스에 저장된 정보와 비교하는 로컬 인증기능을 제공한다.
* connect-flash : 요청 객체에 메시지를 넣어 둘 수 있는 기능을 제공한다.

!! 주의 : package.json 이 업데이트 된다면 도커 빌드를 다시 돌려주어야 한다.

```text
    docker build -t blog_express:v1 -f ./dockerfile/Dockerfile_express .
```



