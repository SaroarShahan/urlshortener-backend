FROM node:12-alpine

RUN apk update && apk add yarn

WORKDIR /usr/app

COPY . .

RUN yarn

CMD ["yarn", "dev"]