FROM node:lts-stretch

WORKDIR /app/

EXPOSE 3000

ENTRYPOINT npm install && npm start
