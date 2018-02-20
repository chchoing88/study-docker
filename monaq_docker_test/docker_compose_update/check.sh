#!/bin/sh

EXIST_BLUE=${docker ps | grep node_blue}

if [ -z "$EXIST_BLUE"]; then
  docker-compose up -d node_blue
  docker-compose stop node_green
  echo "run node_blue"
else
  docker-compose up -d node_green
  docker-compose stop node_blue
  echo "run node_green"

fi
