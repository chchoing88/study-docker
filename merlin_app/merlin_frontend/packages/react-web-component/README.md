## INTRO
 
 - 기존 돌아가는 서버를 proxy로 바라보고 부분적으로 react를 적용하는 환경을 구축한다.

## STACK

- webpack 4.0
- react 16.02

## STURUCTURE

```
├── config
│   ├── webpack.dev.config.js       ## 웹팩 dev config
│   ├── wepackDevServer.js          ## 웹팩 dev server용 config
├── scripts                         ## frontend 개발서버 , build , 배포 쪽 스크립트
│   ├── start.js                    ## 개발서버 start 
├── src                             ## react 소스 폴더
│   ├── components                  ## components 들 모음 폴더
│   ├── App.js                      ## app 의 시작점
│   ├── index.js                    ## react render의 시작점
├── 
├── package.json                    
  
```

## USAGE

- dev 환경에서 

```sh
$ npm install
$ npm start
```

- build ( 예정 )

```sh
$ npm install
$ npm build
```

## Customize dev env setting

- scripts/start.js 에서 수정. ( 주의, 그 외에는 건들지 않도록 한다.)