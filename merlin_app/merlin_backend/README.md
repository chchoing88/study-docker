## INTRO

- Building a web server with a docker for testing

## USAGE

1. /etc/hosts file modify

```vi
0.0.0.0   nodeapp.local
```

2. build express image

```sh
$ docker build -t blog_express:v1 -f ./dockerfile/Dockerfile_express .
```

3. server execute

```sh
$ sh check.sh
```

4. server reExcute (blue / green deploy)

```sh
$ sh check.sh
```

## STURUCTURE

```
├── dockerfile
│   ├── Dockerfile_express       ## express 이미지 생성 소스파일 ( 해당 파일 build 하면 도커 express 이미지 생성)
├── server                       ## server 쪽 소스 폴더 ( 이 안 구성은 자유롭게 )
├── check.sh                     ## server 구동 및 재실행 쉘 스크립트 
├── docker-compose.yml           ## nginx , express , mongo 관련 설정 및 셋팅 파일 (해당 파일을 토대로 서버 컨테이너 실행)
├── package.json                    
  
```


