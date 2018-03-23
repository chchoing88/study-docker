## INTRO
 
 - 기존 돌아가는 서버를 proxy로 바라보고 부분적으로 react를 적용하는 환경을 구축한다.
 - spa를 해도 되고 부분적으로 react를 적용 할 수 있도록 한다.

## STACK

- webpack 4.0
- react 16.02
- flow 0.68 ( typecheck )
- jest 22.3 ( test framework )
- enzyme 3.3.0 ( test library )

React preset에는 이미 flow preset이 포함되어 있다.

## STURUCTURE

```
├── config
│   ├── jest                        ## jest config 폴더
│   |   ├── setupTests.js           ## jest 각 test 진행하기 전 테스트 코드를 setup or configure 하는 파일 ( package.json에 설정되어있음)
│   ├── paths                       ## 경로 설정 ( 각자의 경로가 다르다면 여기서 수정)
│   ├── webpack.dev.config.js       ## 웹팩 prod config
│   ├── webpack.dev.config.js       ## 웹팩 dev config
│   ├── wepackDevServer.js          ## 웹팩 dev server용 config
├── flow-typed                      ## ...
├── interfaces                      ## ...
├── scripts                         ## frontend 개발서버 , build , 배포 쪽 스크립트
│   ├── build.js                    ## 배포 build 
│   ├── start.js                    ## 개발서버 start 
├── src                             ## react 소스 폴더
│   ├── components                  ## components 들 모음 폴더 ( atomic )
│   ├── App.js                      ## app 의 시작점
│   ├── index.js                    ## react render의 시작점
├── package.json                    
  
```

## USAGE

- dev 환경에서 

```sh
$ npm install
$ npm start
```

- build

```sh
$ npm install
$ npm build
```

## Customize dev env setting

- dev 환경시 scripts/start.js 에서 수정 && 경로는 config/paths.js 에서 수정 ( 주의, 그 외에는 건들지 않도록 한다.)