FROM node:14
MAINTAINER Marcus Cartágenes

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install firebase-tools -g
RUN npm run build

ENTRYPOINT firebase emulators:start --only functions