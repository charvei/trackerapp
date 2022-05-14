# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /usr/goal

COPY package.json .
RUN npm install

COPY . .
RUN npx tsc
CMD ["node", "out/src/app/app.js"]

EXPOSE 3072