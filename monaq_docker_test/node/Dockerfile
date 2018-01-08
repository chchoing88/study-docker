# latest official node image
FROM node:latest

MAINTAINER monica.kwon

# install nodemon
RUN npm install -g nodemon

EXPOSE 3333

WORKDIR /data/app_node

CMD ['nodemon', 'server.js']