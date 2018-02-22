## INTRO

Building a web server with a docker for testing

## USAGE

1. /etc/hosts file modify

```vi
0.0.0.0   nodeapp.local
```

2. build express image

```sh
$ docker build -t blog_express:v1 -f ./express/Dockerfile .
```

3. download nginx-proxy for load balancing

```sh
$ docker pull jwilder/nginx-proxy 
```

4. docker compose up

```sh
$ docker-compose up app_blue
```

5. load balancing test

```sh
$ sh check.sh
```


